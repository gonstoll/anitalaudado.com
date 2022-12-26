import type {PortableTextProps} from '@portabletext/react';
import groq from 'groq';
import sanityClient from '~/lib/sanity';
import type {Image} from './image';

interface Intro {
  challenge: string | null;
  role: string | null;
  year: string | null;
}

interface Metadata {
  title: string | null;
  subtitle: string | null;
  tags: Array<{
    _id: string;
    title: string;
  }> | null;
  slug: {
    current: string;
  };
  publishedDate: string | null;
}

interface Editor {
  _key: string;
  _type: 'editor';
  editorField: PortableTextProps['value'];
}
interface ImagesLayout {
  _key: string;
  _type: 'imagesLayout';
  layout: 'one-column' | 'two-columns' | 'three-columns';
  images: Array<Image>;
}

export interface Post extends Intro, Metadata {
  _createdAt: string;
  _id: string;
  mainImage: Image | null;
  thumbnailImage: Image | null;
  pageBuilder: Array<Editor | ImagesLayout> | null;
  finalThoughts?: {
    _type: 'editor';
    editorField: PortableTextProps['value'];
  } | null;
}

interface UserPost
  extends Omit<
    Post,
    'challenge' | 'role' | 'year' | 'pageBuilder' | 'finalThoughts'
  > {
  isPublished: boolean;
  isComingSoon: boolean;
}

const IMAGE_ASSET_FIELDS = groq`
  _createdAt,
  _id,
  url,
  'tags': opt.media.tags[]->{
    _id,
    'title': name.current
  },
  title,
  altText,
  description,
  'metadata': metadata{
    dimensions,
    lqip,
  },
`;

export async function getAllPosts() {
  const query = groq`*[_type == "post"]{
    _id,
    isPublished,
    publishedDate,
    isComingSoon,
    'mainImage': mainImage{
      ...,
      'asset': asset->{
        ${IMAGE_ASSET_FIELDS}
      }
    },
    'thumbnailImage': thumbnailImage{
      ...,
      'asset': asset->{
        ${IMAGE_ASSET_FIELDS}
      }
    },
    title,
    subtitle,
    'tags': tags[]->{_id, title},
    slug,
  } | order(publishedDate desc)`;

  const posts = await sanityClient.fetch<Array<UserPost>>(query);
  return posts;
}

export async function getPostBySlug(slug: string) {
  const query = groq`*[_type == "post"]{
    _id,
    'mainImage': mainImage{
      ...,
      'asset': asset->{
        ${IMAGE_ASSET_FIELDS}
      }
    },
    'thumbnailImage': thumbnailImage{
      ...,
      'asset': asset->{
        ${IMAGE_ASSET_FIELDS}
      }
    },
    title,
    subtitle,
    'tags': tags[]->{_id, title},
    slug,
    challenge,
    role,
    year,
    'pageBuilder': pageBuilder[]{
      ...,
      _type == 'imagesLayout' => {
        images[]{
          ...,
          'asset': asset->{
            ${IMAGE_ASSET_FIELDS}
          }
        }
      }
    },
    finalThoughts,
  }[0]`;

  const post = await sanityClient.fetch<Post>(query, {slug});
  return post;
}

export async function getAllSlugs() {
  const query = groq`
    *[_type == "post"
    && defined(slug.current)][].slug.current
  `;

  const slugs = await sanityClient.fetch<Array<string>>(query);
  return slugs;
}

import type {PortableTextProps} from '@portabletext/react';
import groq from 'groq';
import sanityClient from '~/lib/sanity';
import type {Image} from './image';

interface Intro {
  challenge: string;
  role: string;
  year: string;
}

interface Metadata {
  title: string;
  subtitle: string;
  tags: Array<{
    _id: string;
    title: string;
  }>;
  slug: {
    current: string;
  };
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
  mainImage: Image;
  thumbnailImage?: Image;
  pageBuilder: Array<Editor | ImagesLayout>;
  finalThoughts?: {
    _type: 'editor';
    editorField: PortableTextProps['value'];
  };
}

interface UserPost
  extends Omit<
    Post,
    'challenge' | 'role' | 'year' | 'pageBuilder' | 'finalThoughts'
  > {
  isPublished: boolean;
  isComingSoon: boolean;
}

export async function getAllPosts() {
  const query = groq`*[_type == "post"]{
    _createdAt,
    _id,
    isPublished,
    isComingSoon,
    mainImage,
    thumbnailImage,
    title,
    subtitle,
    "tags": tags[]->{title, _id},
    slug,
  } | order(_createdAt desc)`;

  const posts = await sanityClient.fetch<Array<UserPost>>(query);
  return posts;
}

export async function getPostBySlug(slug: string) {
  const query = groq`*[_type == "post"]{
    _createdAt,
    _id,
    mainImage,
    thumbnailImage,
    title,
    subtitle,
    "tags": tags[]->{title, _id},
    slug,
    challenge,
    role,
    year,
    pageBuilder,
    finalThoughts
  } | order(_createdAt desc)[0]`;

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

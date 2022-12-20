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

type Editor = {
  _key: string;
  _type: 'editor';
  editorField: PortableTextProps;
};
type OneImageLayout = {
  _key: string;
  _type: 'oneImageLayout';
  image1: Image;
};
type TwoImageLayout = {
  _key: string;
  _type: 'twoImageLayout';
  image1: Image;
  image2: Image;
};
type ThreeImageLayout = {
  _key: string;
  _type: 'threeImageLayout';
  image1: Image;
  image2: Image;
  image3: Image;
};
type FourImageLayout = {
  _key: string;
  _type: 'fourImageLayout';
  image1: Image;
  image2: Image;
  image3: Image;
  image4: Image;
};

export interface Post extends Intro, Metadata {
  _createdAt: string;
  _id: string;
  mainImage: Image;
  thumbnailImage: Image;
  pageBuilder: Array<
    | Editor
    | OneImageLayout
    | TwoImageLayout
    | ThreeImageLayout
    | FourImageLayout
  >;
}

interface UserPost
  extends Omit<
    Post,
    'challenge' | 'role' | 'year' | 'pageBuilder' | 'finalThoughts'
  > {}

export async function getAllPosts() {
  const query = groq`*[_type == "post"]{
    _createdAt,
    _id,
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

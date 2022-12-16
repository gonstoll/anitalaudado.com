import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';
import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Layout from '~/components/Layout';
import sanityClient from '~/lib/sanity';

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

interface Post extends Intro, Metadata {
  _createdAt: string;
  _id: string;
  mainImage: {
    alt: string;
    caption?: string;
    asset: {
      _ref: string;
    };
  };
}

export default function Project({
  post,
  mainImage,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = `Ana Laudado | ${post.title}`;

  console.log('post', post);

  return (
    <>
      <Head>{title}</Head>
      <Layout
        type="project"
        title={post.title}
        banner={{
          src: mainImage.url,
          alt: mainImage.alt,
        }}
        tags={post.tags.map(t => t?.title)}
        summary={post.subtitle}
        intro={{
          challenge: post.challenge,
          role: post.role,
          year: post.year,
        }}
      >
        Content!
      </Layout>
    </>
  );
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _createdAt,
  _id,
  mainImage,
  title,
  subtitle,
  "tags": tags[]->{title, _id},
  slug,
  challenge,
  role,
  year,
  pageBuilder,
  finalThoughts
} | order(_createdAt desc)`;

export async function getStaticPaths() {
  const paths = await sanityClient.fetch<Array<string>>(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map(slug => ({params: {slug}})),
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const {slug = ''} = context.params || {};
  const post = await sanityClient.fetch<Post>(query, {slug});
  const mainImage = imageUrlBuilder(sanityClient).image(
    post.mainImage.asset._ref
  );

  return {
    props: {
      post,
      mainImage: {
        url: mainImage.url(),
        alt: post.mainImage.alt,
      },
    },
  };
}

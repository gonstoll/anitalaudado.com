import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Layout from '~/components/Layout';
import {parseEsotericImage} from '~/models/image';
import {getAllSlugs, getPostBySlug} from '~/models/post';

export default function Project({
  post,
  mainImageUrl,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const pageTitle = `Ana Laudado | ${post.title}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Layout
        type="project"
        title={post.title}
        banner={{
          src: mainImageUrl,
          alt: post.mainImage.alt,
        }}
        tags={post?.tags.map(t => t?.title)}
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

export async function getStaticPaths() {
  const slugs = await getAllSlugs();

  return {
    paths: slugs.map(slug => ({
      params: {slug},
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const {slug = ''} = context.params || {};
  const post = await getPostBySlug(slug as string);
  const mainImageUrl = parseEsotericImage(post.mainImage).url();

  return {
    props: {
      post,
      mainImageUrl,
    },
  };
}

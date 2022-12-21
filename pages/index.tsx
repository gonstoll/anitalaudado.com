import type {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Card from '~/components/Card';
import Layout from '~/components/Layout';
import {parseEsotericImage} from '~/models/image';
import {getAllPosts} from '~/models/post';

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Ana Laudado</title>
      </Head>
      <Layout
        includeCarousel
        type="page"
        title={`Hola! I'm Ana,
        a Product Designer
        based in Copenhagen.`}
      >
        <h2 className="mt-10 text-2xl text-black dark:text-white">
          I enjoy defining the right problems just as much as solving them
          through design, where my strong UI background comes in handy.
        </h2>
        <h3 className="mt-20 md:mt-40 mb-10 text-4-1/2xl text-black dark:text-white">
          Selected <b>work</b>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {posts.map(post =>
            post.isPublished ? (
              <Card
                key={post._id}
                title={post.title}
                description={post.subtitle}
                tags={
                  post.isComingSoon
                    ? ['Coming soon']
                    : post.tags.map(t => t.title)
                }
                link={
                  post.isComingSoon ? undefined : `/work/${post.slug.current}`
                }
                image={{
                  src: parseEsotericImage(
                    post.thumbnailImage || post.mainImage
                  ).url(),
                  alt: post.thumbnailImage?.alt || post.mainImage?.alt,
                  priority: true,
                  fill: true,
                  sizes: '(min-width: 1024px) 33vw, 100vw',
                }}
              />
            ) : null
          )}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

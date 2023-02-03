import {dehydrate, QueryClient} from '@tanstack/react-query';
import {motion} from 'framer-motion';
import type {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import type {ImageProps} from 'next/image';
import Card from '~/components/Card';
import Layout from '~/components/Layout';
import {getAllCarouselImages, parseEsotericImage} from '~/models/asset';
import {getAllPosts, SinglePost} from '~/models/post';

function getThumbnailImage(post: SinglePost): ImageProps | undefined {
  const baseImageProps = {
    alt: `${post.title || 'Untitled'} post thumbnail`,
    fill: true,
    loading: 'lazy',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  } satisfies Partial<ImageProps>;

  if (post.thumbnailImage) {
    return {
      ...baseImageProps,
      src: parseEsotericImage(post.thumbnailImage).url(),
      alt: post.thumbnailImage.asset.altText || baseImageProps.alt,
      blurDataURL: post.thumbnailImage.asset.metadata.lqip,
    };
  }
  if (post.mainImage) {
    return {
      ...baseImageProps,
      src: parseEsotericImage(post.mainImage).url(),
      alt: post.mainImage.asset.altText || baseImageProps.alt,
      blurDataURL: post.mainImage.asset.metadata.lqip,
    };
  }
}

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
          I enjoy defining the right problems just as much as designing
          intuitive experiences, where I can put my strong UI background in good
          use.
        </h2>
        <h3 className="mt-20 md:mt-40 mb-10 text-4-1/2xl text-black dark:text-white">
          Selected <b>work</b>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {posts.map((post, postIndex) => {
            const thumbnailImage = getThumbnailImage(post);

            return post.isPublished ? (
              <motion.div
                key={post._id}
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                  duration: 0.5,
                  delay: Number(`0.${2 * postIndex}`),
                }}
                className="flex"
              >
                <Card
                  title={post.title || 'Untitled'}
                  description={post.subtitle}
                  tags={
                    post.isComingSoon
                      ? ['Coming soon']
                      : post.tags?.map(t => t.title)
                  }
                  link={
                    post.isComingSoon ? undefined : `/work/${post.slug.current}`
                  }
                  image={thumbnailImage}
                />
              </motion.div>
            ) : null;
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['carouselImages'],
    queryFn: getAllCarouselImages,
  });

  return {
    props: {
      posts,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

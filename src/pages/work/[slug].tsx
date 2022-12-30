import {PortableText, PortableTextReactComponents} from '@portabletext/react';
import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ImageBlock from '~/components/ImageBlock';
import Layout from '~/components/Layout';
import {parseEsotericImage} from '~/models/asset';
import {getAllSlugs, getPostBySlug} from '~/models/post';

const components: Partial<PortableTextReactComponents> = {
  block: {
    h3: ({children}) => <h3 className="text-3-1/2xl mb-6">{children}</h3>,
    normal: ({children}) => <p className="text-xl peer mb-5">{children}</p>,
  },
  list: {
    bullet: ({children}) => (
      <ul className="text-xl mb-5 list-disc list-inside">{children}</ul>
    ),
  },
  types: {
    editorImage: ({value}) => {
      const imageUrl = parseEsotericImage(value).url();
      return (
        <Image src={imageUrl} width={1100} height={1100} alt={value.alt} />
      );
    },
  },
};

export default function Project({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const pageTitle = `Ana Laudado | ${post.title}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {post.thumbnailImage ? (
          <meta property="og:image" content={post.thumbnailImage.asset.url} />
        ) : post.mainImage ? (
          <meta property="og:image" content={post.mainImage.asset.url} />
        ) : (
          <meta property="og:image" content="/images/AnitaLaudado.jpeg" />
        )}
        {post.title ? (
          <meta property="og:title" content={`${post.title} ✦ Ana Laudado`} />
        ) : null}
      </Head>
      <Layout
        type="project"
        title={post.title || 'Untitled'}
        banner={
          post.mainImage
            ? {
                src: post.mainImage.asset.url,
                width: post.mainImage.asset.metadata.dimensions.width,
                height: post.mainImage.asset.metadata.dimensions.height,
                alt: post.mainImage.asset.altText || 'Project banner',
                blurDataURL: post.mainImage.asset.metadata.lqip,
              }
            : undefined
        }
        tags={post.tags?.map(t => t?.title)}
        summary={post.subtitle}
        intro={{
          challenge: post.challenge,
          role: post.role,
          year: post.year,
        }}
      >
        {post.pageBuilder?.map(block => {
          if (block._type === 'editor') {
            return (
              <div
                key={block._key}
                className="text-black dark:text-white mb-20 lg:px-40"
              >
                <PortableText
                  value={block.editorField}
                  components={components}
                />
              </div>
            );
          }
          if (block._type === 'imagesLayout') {
            const images = block.images.map(img => ({
              ...img,
              src: img.asset.url,
              width: img.asset.metadata.dimensions.width,
              height: img.asset.metadata.dimensions.height,
              blurDataURL: img.asset.metadata.lqip,
              alt: img.asset.altText || 'Project image',
            }));

            return (
              <ImageBlock
                key={block._key}
                type={
                  block.layout === 'one-column'
                    ? 'one-col'
                    : block.layout === 'two-columns'
                    ? 'two-cols'
                    : 'three-cols'
                }
                images={images}
              />
            );
          }
          return null;
        })}

        {post.finalThoughts?.editorField ? (
          <div className="lg:px-40">
            <div className="p-6 border-1 text-black dark:text-white border-black dark:border-dark-white rounded-lg">
              <h3 className="text-3-1/2xl mb-6">
                Final <b>thoughts</b>
              </h3>
              <PortableText
                value={post.finalThoughts.editorField}
                components={components}
              />
            </div>
          </div>
        ) : null}
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
    fallback: 'blocking',
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const {slug = ''} = context.params || {};
  const post = await getPostBySlug(slug as string);

  return {
    props: {
      post,
    },
  };
}

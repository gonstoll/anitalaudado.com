import {PortableText, PortableTextReactComponents} from '@portabletext/react';
import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import NextImage from 'next/image';
import ImageBlock from '~/components/ImageBlock';
import Layout from '~/components/Layout';
import {parseEsotericImage} from '~/models/image';
import {getAllSlugs, getPostBySlug} from '~/models/post';

const components: Partial<PortableTextReactComponents> = {
  block: {
    h3: ({children}) => <h3 className="text-3-1/2xl mb-6">{children}</h3>,
    normal: ({children}) => <p className="text-xl peer">{children}</p>,
  },
  list: {
    bullet: ({children}) => (
      <ul className="text-xl mt-5 list-disc list-inside">{children}</ul>
    ),
  },
  types: {
    fullImage: ({value}) => {
      console.log('value [fullImage]', value);
      const imageUrl = parseEsotericImage(value).url();
      return (
        <NextImage src={imageUrl} width={1200} height={1000} alt={value.alt} />
      );
    },
  },
};

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
        {post.pageBuilder.map(block => {
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
            const imagesLength = block.images.length;
            const images = block.images.map(img => ({
              src: parseEsotericImage(img).url(),
              width: img.width || 2000,
              height: img.height || 1000,
              alt: img.alt,
              caption: img.caption,
            }));

            return (
              <ImageBlock
                key={block._key}
                type={
                  imagesLength === 1 // TODO: Can I add radio buttons on the field to select the layout?
                    ? 'one-col'
                    : imagesLength === 2
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
            <div className="p-6 border-1 border-black dark:border-dark-white rounded-lg">
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

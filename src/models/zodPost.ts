import type {PortableTextProps} from '@portabletext/react';
import groq from 'groq';
import sanityClient from '~/lib/sanity';
import {Image, IMAGE_ASSET_FIELDS} from './asset';
import {z} from 'zod';

const entitySchema = z.object({
  _id: z.string().uuid(),
});

const keyedSchema = z.object({
  _key: z.string(),
});

const slugSchema = z.object({
  current: z.string(),
});

const introSchema = z.object({
  challenge: z.string().optional(),
  role: z.string().optional(),
  year: z.string().optional(),
});

const metaDataSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  tags: z
    .array(
      entitySchema.merge(
        z.object({
          title: z.string(),
        })
      )
    )
    .nullable(),
  slug: slugSchema,
  publishedDate: z.string().optional(),
  isPublished: z.boolean(),
  isComingSoon: z.boolean(),
});

const imageSchema = z.object({
  _type: z.literal('image'),
  asset: z.object({
    _id: z.string(),
    _createdAt: z.string(),
    altText: z.string().nullable(),
    description: z.string().nullable(),
    title: z.string().nullable(),
    url: z.string().url(),
    tags: z.array(entitySchema.merge(z.object({title: z.string()}))).nullable(),
    metadata: z.object({
      dimensions: z.object({
        aspectRatio: z.number(),
        height: z.number(),
        width: z.number(),
      }),
      lqip: z.string(),
    }),
  }),
});

const editorSchema = keyedSchema.merge(
  z.object({
    _type: z.literal('editor'),
    editorField: z.array(keyedSchema.passthrough()),
  })
);

const imageLayoutSchema = keyedSchema.merge(
  z.object({
    _type: z.literal('imagesLayout'),
    layout: z.enum(['one-column', 'two-columns', 'three-columns']),
    images: z.array(keyedSchema.merge(imageSchema)),
  })
);

const singlePostSchema = entitySchema
  .merge(introSchema)
  .merge(
    metaDataSchema.omit({
      publishedDate: true,
      isPublished: true,
      isComingSoon: true,
    })
  )
  .merge(
    z.object({
      mainImage: imageSchema.nullable(),
      thumbnailImage: imageSchema.nullable(),
    })
  )
  .merge(
    z.object({
      pageBuilder: z.array(z.union([editorSchema, imageLayoutSchema])),
      finalThoughts: editorSchema.omit({_key: true}).optional(),
    })
  );

export async function getPostBySlugNew(slug: string) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    ...,
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
    'tags': tags[]->{_id, title},
  }`;

  const post = await sanityClient.fetch(query, {slug});
  return singlePostSchema.parse(post);
  // return post;
}

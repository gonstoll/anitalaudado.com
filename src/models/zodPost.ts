import groq from 'groq';
import {z} from 'zod';
import sanityClient from '~/lib/sanity';
import {IMAGE_ASSET_FIELDS} from './asset';
import {imageLayoutSchema, imageSchema} from './zodImage';

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

const editorSchema = keyedSchema.merge(
  z.object({
    _type: z.literal('editor'),
    editorField: z.array(
      z
        .object({
          _type: z.string(),
          _key: z.string(),
        })
        .passthrough()
    ),
  })
);

const fullPostSchema = entitySchema
  .merge(introSchema)
  .merge(metaDataSchema)
  // Images
  .merge(
    z.object({
      mainImage: imageSchema.nullable(),
      thumbnailImage: imageSchema.nullable(),
    })
  )
  // Blocks
  .merge(
    z.object({
      pageBuilder: z
        .array(z.union([editorSchema.optional(), imageLayoutSchema.optional()]))
        .optional(),
      finalThoughts: editorSchema.omit({_key: true}).optional(),
    })
  );

const singlePostSchema = fullPostSchema.omit({
  publishedDate: true,
  isPublished: true,
  isComingSoon: true,
});

const allPostsSchema = z.array(
  fullPostSchema.omit({
    challenge: true,
    role: true,
    year: true,
    pageBuilder: true,
    finalThoughts: true,
  })
);

export type FullPost = z.infer<typeof fullPostSchema>;
export type SinglePost = z.infer<typeof singlePostSchema>;
export type AllPosts = z.infer<typeof allPostsSchema>;

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
}

export async function getAllPostsNew() {
  const query = groq`*[_type == "post"]{
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
    'tags': tags[]->{_id, title},
  } | order(publishedDate desc)`;

  const posts = await sanityClient.fetch(query);
  return allPostsSchema.parse(posts);
}

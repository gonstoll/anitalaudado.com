import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';
import {z} from 'zod';
import sanityClient from '~/lib/sanity';

const entitySchema = z.object({
  _id: z.string().uuid(),
});

const keyedSchema = z.object({
  _key: z.string(),
});

export const imageSchema = z.object({
  _type: z.literal('image'),
  asset: z.object({
    _id: z.string(),
    _createdAt: z.string(),
    altText: z.string().nullable(),
    description: z.string().nullable(),
    title: z.string().nullable(),
    url: z.string().url(),
    tags: z.array(z.object({_id: z.string(), title: z.string()})).nullable(),
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

export const imageLayoutSchema = keyedSchema.merge(
  z
    .object({
      _type: z.literal('imagesLayout'),
      layout: z.enum(['one-column', 'two-columns', 'three-columns']),
      images: z.array(keyedSchema.merge(imageSchema)),
    })
    .passthrough()
);

const carouselImagesSchema = z.array(
  entitySchema.merge(
    z.object({
      _type: z.literal('carouselImages'),
      image: imageSchema,
    })
  )
);

const fileSchema = z.object({
  url: z.string().url(),
});

export function parseEsotericImage(source: z.infer<typeof imageSchema>) {
  return imageUrlBuilder(sanityClient).image(source);
}

export async function getAllCarouselImagesNew() {
  const query = groq`
    *[_type == "carouselImages"][]{
      ...,
      'image': image{
        ...,
        'asset': asset->{
          ...,
          'tags': opt.media.tags[]->{
            _id,
            'title': name.current
          }
        }
      },
    } | order(publishedDate desc)
  `;

  const images = await sanityClient.fetch(query);
  return carouselImagesSchema.parse(images);
}

export async function getResumeNew() {
  const query = groq`
    *[_type == "sanity.fileAsset"
    && $type in opt.media.tags[]->{name}.name.current]{url}
    | order(_createdAt desc)[0]
  `;

  const resume = await sanityClient.fetch(query, {
    type: 'Resume',
  });
  return fileSchema.parse(resume);
}

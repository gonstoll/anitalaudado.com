import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';
import sanityClient from '~/lib/sanity';

export interface Image {
  _key: string;
  asset: {
    _createdAt: string;
    _id: string;
    url: string;
    tags: Array<{_id: string; title: string}> | null;
    title: string | null;
    altText: string | null;
    description: string | null;
    metadata: {
      dimensions: {
        aspectRatio: number;
        height: number;
        width: number;
      };
      lqip: string;
    };
  };
}

export const IMAGE_ASSET_FIELDS = groq`
  _createdAt,
  _id,
  url,
  'tags': opt.media.tags[]->{
    _id,
    'title': name.current
  },
  title,
  altText,
  description,
  'metadata': metadata{
    dimensions,
    lqip,
  },
`;

export function parseEsotericImage(source: Image) {
  return imageUrlBuilder(sanityClient).image(source);
}

export async function getAllCarouselImages() {
  const query = groq`
    *[_type == "carouselImages"][]{
      '_key': _id,
      publishedDate,
      'asset': image.asset->{
        ${IMAGE_ASSET_FIELDS}
      }
    } | order(publishedDate desc)
  `;

  const images = await sanityClient.fetch<Array<Image>>(query);
  return images;
}

export async function getResume() {
  const query = groq`
    *[_type == "sanity.fileAsset"
    && $type in opt.media.tags[]->{name}.name.current]{url}
    | order(_createdAt desc)[0]
  `;

  const resume = await sanityClient.fetch<{url: string}>(query, {
    type: 'Resume',
  });
  return resume;
}

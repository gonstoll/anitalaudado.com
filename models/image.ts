import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';
import sanityClient from '~/lib/sanity';

export interface Image {
  _key: string;
  asset: {
    _createdAt: string;
    _id: string;
    altText: string | null;
    description: string | null;
    title: string | null;
    tags: Array<{_id: string; title: string}> | null;
    url: string;
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
    *[_type == "sanity.imageAsset"
    && defined(opt.media.tags)
    && length(opt.media.tags) > 0][]{
      ${IMAGE_ASSET_FIELDS}
    }
  `;
  const images = await sanityClient.fetch<Array<Image['asset']>>(query);
  const filteredImages = images.filter(image => {
    return image.tags?.some(tag => tag.title === 'Carousel');
  });
  return filteredImages;
}

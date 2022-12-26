import imageUrlBuilder from '@sanity/image-url';
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

export function parseEsotericImage(source: Image) {
  return imageUrlBuilder(sanityClient).image(source);
}

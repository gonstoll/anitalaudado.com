import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '~/lib/sanity';

export interface Image {
  _key: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  asset: {
    _ref: string;
  };
}

export function parseEsotericImage(source: Image) {
  return imageUrlBuilder(sanityClient).image(source);
}

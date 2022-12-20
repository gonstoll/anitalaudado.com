import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '~/lib/sanity';

export interface Image {
  alt: string;
  caption?: string;
  asset: {
    _ref: string;
  };
}

export function parseEsotericImage(source: Image) {
  return imageUrlBuilder(sanityClient).image(source);
}

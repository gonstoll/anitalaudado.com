import NextImage, {ImageProps} from 'next/image';
import type {ImageBlock} from '~/models/asset';

type NextImageProps = Pick<
  ImageProps,
  'src' | 'width' | 'height' | 'blurDataURL' | 'alt' | 'fill'
>;

type SanityImageProps = Pick<ImageBlock, '_key'> & {
  description: ImageBlock['asset']['description'];
};

interface Props {
  type: 'one-col' | 'two-cols' | 'three-cols';
  /**
   * Combines Next image props necessary to render the image,
   * and props coming from the response object
   */
  // images: Array<NextImageProps & Omit<ImageBlock, keyof NextImageProps>>;
  images: Array<NextImageProps & SanityImageProps>;
}

export default function ImageBlock({type, images}: Props) {
  const isRelative = images.some(img => img.fill);
  const imageClass = isRelative
    ? 'h-auto max-w-full max-h-full object-cover'
    : '';
  const gridClass =
    type === 'two-cols'
      ? 'xl:grid-cols-2'
      : type === 'three-cols'
      ? 'xl:grid-cols-3'
      : '';

  return (
    <div
      className={`grid gap-4 my-20 grid-cols-1 ${gridClass} ${
        isRelative ? 'relative' : ''
      }`}
    >
      {images.map(img => (
        <div key={img._key} className="col-span-1">
          <NextImage
            {...img}
            loading="lazy"
            placeholder="blur"
            className={`rounded ${imageClass}`}
          />

          {img.description ? (
            <p className="mt-4 text-base text-black dark:text-white">
              {img.description}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

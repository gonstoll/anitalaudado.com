import NextImage, {ImageProps} from 'next/image';
import type {Image} from '~/models/image';

interface Props {
  type: 'one-col' | 'two-cols' | 'three-cols';
  images: Array<ImageProps & Omit<Image, keyof ImageProps>>;
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
          <NextImage {...img} className={`rounded ${imageClass}`} />

          {img.caption ? (
            <p className="mt-4 text-base text-black dark:text-white">
              {img.caption}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

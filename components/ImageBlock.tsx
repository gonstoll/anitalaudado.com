import Image, {ImageProps} from 'next/image';

interface Props {
  type: 'two-cols' | 'three-cols';
  images: Array<ImageProps & {caption?: string}>;
}

export default function ImageBlock({type, images}: Props) {
  const isRelative = images.some(img => img.fill);
  const imageClass = isRelative
    ? 'h-auto max-w-full max-h-full object-cover'
    : '';

  return (
    <div
      className={`grid gap-4 my-20 grid-cols-1 ${
        type === 'two-cols' ? 'xl:grid-cols-2' : 'xl:grid-cols-3'
      } ${isRelative ? 'relative' : ''}`}
    >
      {images.map(img => (
        <div key={`image-${img.alt}`} className="col-span-1">
          <Image {...img} className={`w-full rounded ${imageClass}`} />

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

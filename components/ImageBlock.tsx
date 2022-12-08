import Image from 'next/image';

interface Props {
  type: 'two-cols' | 'three-cols';
  images: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    caption?: string;
  }>;
}

export default function ImageBlock({type, images}: Props) {
  const isRelative = images.some(img => img.fill);

  return (
    <div
      className={`grid gap-4 my-20 grid-cols-1 ${
        type === 'two-cols' ? 'xl:grid-cols-2' : 'xl:grid-cols-3'
      } ${isRelative ? 'relative' : ''}`}
    >
      {images.map(img => (
        <div key={img.src} className="col-span-1">
          {img.fill ? (
            <Image
              fill
              src={img.src}
              alt={img.alt}
              className="w-full h-auto max-w-full max-h-full object-cover rounded"
            />
          ) : (
            <Image
              width={img.width}
              height={img.height}
              src={img.src}
              alt={img.alt}
              className="w-full rounded"
            />
          )}

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

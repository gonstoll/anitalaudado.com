import Image from 'next/image';

interface Props {
  cols: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  images: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    caption?: string;
  }>;
}

export default function ImageBlock({cols, images}: Props) {
  const containerClass = ['grid', 'gap-4', 'my-20'];

  if (cols.mobile) {
    containerClass.push(`grid-cols-${cols.mobile}`);
  }

  if (cols.tablet) {
    containerClass.push(`md:grid-cols-${cols.tablet}`);
  }

  if (cols.desktop) {
    containerClass.push(`xl:grid-cols-${cols.desktop}`);
  }

  if (images.some(img => (img.fill ? 'relative' : ''))) {
    containerClass.push('relative');
  }

  return (
    <div className={containerClass.join(' ')}>
      {images.map(img => (
        <div key={img.src} className="col-span-1">
          {img.fill ? (
            <Image
              fill
              src={img.src}
              alt={img.alt}
              className="w-full rounded"
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

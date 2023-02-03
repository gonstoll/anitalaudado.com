import {useQuery} from '@tanstack/react-query';
import Image from 'next/image';
import {getAllCarouselImages} from '~/models/asset';
import {getAllCarouselImagesNew} from '~/models/zodImage';

export default function Carousel() {
  const {data: carouselImages} = useQuery({
    queryKey: ['carouselImages'],
    queryFn: getAllCarouselImagesNew,
  });

  const images = carouselImages?.map(img => (
    <div
      key={img._id}
      className="w-80 md:w-98 h-80 md:h-98 bg-gray-400 rounded shrink-0 snap-center relative"
    >
      <Image
        src={img.image.asset.url}
        alt={img.image.asset.altText || `Carousel item ${img._id}`}
        width={img.image.asset.metadata.dimensions.width}
        height={img.image.asset.metadata.dimensions.height}
        placeholder="blur"
        blurDataURL={img.image.asset.metadata.lqip}
        sizes="(min-width: 768px) 400px, 320px"
        className="w-full h-auto max-w-full max-h-full object-cover rounded [@media(hover:hover)]:grayscale [@media(pointer:fine)]:grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  ));

  if (!images || !images.length) return null;

  return (
    <div className="mt-40">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-20">
        <h3 className="mb-10 text-4-1/2xl text-black dark:text-white">
          I also love to <b>draw</b>
        </h3>
      </div>
      <div className="overflow-y-hidden overflow-x-scroll scrollbar-hide snap-x snap-mandatory snap-always gap-4 flex relative w-screen">
        {images}
        {images}
      </div>
    </div>
  );
}

const firstImage = {
  image: {
    _type: 'image',
    asset: {
      _id: 'image-6b710ad54cddefd80058f9df9e37a20d9e3484db-1200x1200-png',
      _createdAt: '2022-12-26T17:58:45Z',
      description: null,
      title: null,
      tags: [{_id: '974wCYB6EQ3xW9LGNX6onD', title: 'Carousel'}],
      metadata: {
        dimensions: {
          aspectRatio: 1,
        },
      },
    },
  },
};

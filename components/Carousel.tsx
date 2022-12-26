import {useQuery} from '@tanstack/react-query';
import Image from 'next/image';
import {getAllCarouselImages} from '~/models/image';

export default function Carousel() {
  const {data} = useQuery({
    queryKey: ['carouselImages'],
    queryFn: getAllCarouselImages,
  });

  return (
    <div className="mt-40">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-20">
        <h3 className="mb-10 text-4-1/2xl text-black dark:text-white">
          I also love to <b>Draw</b>
        </h3>
      </div>
      <div className="overflow-y-hidden overflow-x-scroll scrollbar-hide snap-x snap-mandatory snap-always gap-4 flex relative w-screen">
        {data?.map(i => (
          <div
            key={i._id}
            className="w-80 md:w-98 h-80 md:h-98 bg-gray-400 rounded shrink-0 snap-center relative"
          >
            <Image
              src={i.url}
              alt={i.altText || `Carousel item ${i._id}`}
              width={i.metadata.dimensions.width}
              height={i.metadata.dimensions.height}
              placeholder="blur"
              blurDataURL={i.metadata.lqip}
              sizes="(min-width: 768px) 400px, 320px"
              className="w-full h-auto max-w-full max-h-full object-cover rounded [@media(hover:hover)]:grayscale [@media(pointer:fine)]:grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

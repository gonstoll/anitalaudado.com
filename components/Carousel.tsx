import Image, {ImageProps} from 'next/image';

const carouselItems: Array<ImageProps> = [
  {
    src: '/images/carousel/carousel_01.png',
    alt: 'Carousel item 1',
    id: '1',
  },
  {
    src: '/images/carousel/carousel_02.png',
    alt: 'Carousel item 2',
    id: '2',
  },
  {
    src: '/images/carousel/carousel_03.png',
    alt: 'Carousel item 3',
    id: '3',
  },
  {
    src: '/images/carousel/carousel_04.png',
    alt: 'Carousel item 4',
    id: '4',
  },
  {
    src: '/images/carousel/carousel_01.png',
    alt: 'Carousel item 1',
    id: '5',
  },
  {
    src: '/images/carousel/carousel_02.png',
    alt: 'Carousel item 2',
    id: '6',
  },
  {
    src: '/images/carousel/carousel_03.png',
    alt: 'Carousel item 3',
    id: '7',
  },
  {
    src: '/images/carousel/carousel_04.png',
    alt: 'Carousel item 4',
    id: '8',
  },
  {
    src: '/images/carousel/carousel_01.png',
    alt: 'Carousel item 1',
    id: '9',
  },
  {
    src: '/images/carousel/carousel_02.png',
    alt: 'Carousel item 2',
    id: '10',
  },
  {
    src: '/images/carousel/carousel_03.png',
    alt: 'Carousel item 3',
    id: '11',
  },
  {
    src: '/images/carousel/carousel_04.png',
    alt: 'Carousel item 4',
    id: '12',
  },
];

export default function Carousel() {
  return (
    <div className="mt-40">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-20">
        <h3 className="mb-10 text-4-1/2xl text-black dark:text-white">
          I also love to <b>Draw</b>
        </h3>
      </div>
      <div className="overflow-y-hidden overflow-x-scroll scrollbar-hide snap-x snap-mandatory snap-always gap-4 flex relative w-screen">
        {carouselItems.map(i => (
          <div
            key={i.id}
            className="w-80 md:w-98 h-80 md:h-98 bg-gray-400 rounded shrink-0 snap-center relative"
          >
            <Image
              {...i}
              fill
              sizes="(min-width: 768px) 400px, 320px"
              className="w-full h-auto max-w-full max-h-full object-cover rounded [@media(hover:hover)]:grayscale [@media(pointer:fine)]:grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

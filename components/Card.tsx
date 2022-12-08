import Link from 'next/link';
import Tag from './Tag';

interface Props {
  image?: string; // TODO: Add image support
  title: string;
  description: string;
  tags: Array<string>;
  link: string;
}

// TODO: Accessibility here is not great. I need to add aria-labels to the
// buttons and links.
export default function Card({image, title, description, tags, link}: Props) {
  return (
    <Link
      href={link ?? ''}
      className="flex flex-col group p-4 rounded-lg border-1 border-black dark:border-dark-white"
    >
      <div className="w-full h-80 md:h-96 rounded-lg bg-gray-200"></div>
      <h2 className="mt-6 mb-4 text-2xl md:text-3-1/2xl font-bold text-black dark:text-white">
        {title}
      </h2>
      <p className="text-xl mb-4 text-black dark:text-white">{description}</p>
      <div className="flex items-end justify-between mt-auto gap-4">
        <div className="flex items-center flex-wrap gap-2">
          {tags.map((tag, i) => (
            <Tag key={`tag-${i}`} title={tag} />
          ))}
        </div>
        <div className="h-16 w-16 min-w-16 flex items-center text-center rounded-full border-1 border-black dark:border-dark-white group-hover:bg-black dark:group-hover:bg-white text-black dark:text-white group-hover:text-white dark:group-hover:text-black">
          <p className="text-4-1/2xl w-full group-hover:-rotate-45 duration-200 transition-transform ease-linear">
            →
          </p>
        </div>
      </div>
    </Link>
  );
}

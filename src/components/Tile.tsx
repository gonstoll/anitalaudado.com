import Link from 'next/link';

interface Props {
  title: string;
  link?: string;
  size: 'small' | 'medium' | 'large';
  icon?: string;
}

export default function Tile({title, link, size, icon}: Props) {
  const sizeClasses = {
    small: {
      content: 'text-base',
      tile: 'h-10 gap-4',
    },
    medium: {
      content: 'text-3-1/2xl',
      tile: 'py-5 gap-6',
    },
    large: {
      content: 'text-3-1/2xl',
      tile: 'py-9 gap-8',
    },
  };

  return link ? (
    <Link
      href={link}
      className={`${sizeClasses[size].tile} flex items-center justify-between border-b-1 border-black dark:border-white group`}
      aria-label={title}
    >
      <p className={`${sizeClasses[size].content} text-black dark:text-white`}>
        {title}
      </p>
      <p
        className={`${sizeClasses[size].content} text-black dark:text-white group-hover:-rotate-45 duration-200 transition-transform ease-linear`}
      >
        {icon ?? '→'}
      </p>
    </Link>
  ) : (
    <div
      className={`${sizeClasses[size].tile} flex items-center justify-between border-b-1 border-black dark:border-white`}
    >
      <p className={`${sizeClasses[size].content} text-black dark:text-white`}>
        {title}
      </p>
      <p className={`${sizeClasses[size].content} text-black dark:text-white`}>
        {icon ?? 'wip'}
      </p>
    </div>
  );
}

import Link from 'next/link';

interface Props {
  title: string;
  link?: string;
  size: 'small' | 'medium' | 'large';
  icon?: string;
}

export default function Tile({title, link, size, icon}: Props) {
  const sizeClasses = {
    small: 'text-base h-10 gap-4',
    medium: 'text-3-1/2xl py-5 gap-6',
    large: 'text-3-1/2xl py-9 gap-8',
  };

  return link ? (
    <Link
      href={link}
      className={`${sizeClasses[size]} flex items-center justify-between border-b-1 border-black dark:border-white text-black dark:text-white group`}
      aria-label={title}
    >
      <p>{title}</p>
      <p className="group-hover:-rotate-45 duration-200 transition-transform ease-linear">
        {icon ?? '→'}
      </p>
    </Link>
  ) : (
    <div
      className={`${sizeClasses[size]} flex items-center justify-between border-b-1 border-black dark:border-white text-black dark:text-white`}
    >
      <p>{title}</p>
      <p>{icon ?? 'wip'}</p>
    </div>
  );
}

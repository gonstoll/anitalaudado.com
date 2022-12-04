import Link, {LinkProps} from 'next/link';

type Primary = {
  type: 'primary';
  size: 'small' | 'medium';
};

type Secondary = {
  type: 'secondary';
};

type Rounded = {
  type: 'rounded';
};

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps;

type LinkButtonProps = {title: string} & AnchorProps &
  (Primary | Secondary | Rounded);

export default function LinkButton({title, ...props}: LinkButtonProps) {
  if (props.type === 'primary') {
    const sizeClass =
      props.size === 'small' ? 'h-8 px-4 text-base' : 'h-10 px-8 text-xl';

    return (
      <Link
        className={`flex items-center rounded-4xl border-1 border-black dark:border-white text-black dark:text-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black ${sizeClass}`}
        {...props}
      >
        {title}
      </Link>
    );
  }

  if (props.type === 'secondary') {
    return (
      <Link
        className="text-base text-black dark:text-white hover:underline underline-offset-6"
        {...props}
      >
        {title}
      </Link>
    );
  }

  return (
    <Link
      className="h-16 w-16 text-4.5xl flex items-center rounded-full border-1 border-black dark:border-white text-black dark:text-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black"
      {...props}
    >
      {title}
    </Link>
  );
}

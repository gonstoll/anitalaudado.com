interface Props {
  title: string
}

export default function Tag({title}: Props) {
  return (
    <div className="flex items-center justify-center whitespace-nowrap px-4 h-8 rounded-2xl bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10 text-black dark:text-white">
      {title}
    </div>
  )
}

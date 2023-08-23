import {useQuery} from '@tanstack/react-query'
import {motion} from 'framer-motion'
import Image, {ImageProps} from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import {getResume} from '~/models/asset'
import Carousel from './Carousel'
import Header from './Header'
import LinkButton from './LinkButton'
import Tag from './Tag'
import Tile from './Tile'

type Page = {
  type: 'page'
}

type Project = {
  type: 'project'
  banner?: ImageProps
  tags?: Array<string>
  summary?: string
  intro: {
    challenge?: string
    role?: string
    year?: string
  }
}

type Props = {
  title: string
  includeCarousel?: boolean
} & (Page | Project)

export default function Layout({
  title,
  includeCarousel,
  children,
  ...props
}: React.PropsWithChildren<Props>) {
  // Fetched on the client
  const {data: resume} = useQuery({
    queryKey: ['resume'],
    queryFn: getResume,
    placeholderData: {
      url: '/docs/resume.pdf',
    },
  })

  return (
    <>
      <Header />

      {props.type === 'project' ? (
        <div className="relative h-98">
          {props.banner ? (
            <Image
              {...props.banner}
              alt={props.banner?.alt || 'Project banner'}
              placeholder="blur"
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10" />
          )}
        </div>
      ) : null}

      <motion.main
        initial={{y: 20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5}}
        className="mb-auto"
      >
        {props.type === 'page' ? (
          <div className="mx-auto mt-20 max-w-screen-2xl px-6 md:mt-40 md:px-20">
            <h1 className="text-4-1/2xl font-bold text-black dark:text-white md:whitespace-pre-line md:text-6-1/2xl">
              {title}
            </h1>
            {children}
          </div>
        ) : (
          <div className="mx-auto mt-5 max-w-screen-2xl px-6 md:mt-10 md:px-20">
            <h1 className="text-4-1/2xl font-bold text-black dark:text-white md:whitespace-pre-line md:text-6-1/2xl">
              {title}
            </h1>
            <div className="my-10 flex flex-wrap items-center gap-4">
              {props.tags?.map(tag => (
                <Tag key={tag} title={tag} />
              ))}
            </div>
            <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-2">
              <h2 className="text-3-1/2xl text-black dark:text-white">
                {props.summary}
              </h2>
              <div>
                {Object.entries(props.intro).map(([key, value]) => (
                  <div
                    key={key}
                    className="mb-6 text-xl text-black last:mb-0 dark:text-white"
                  >
                    <p className="font-bold">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
            {children}
          </div>
        )}

        {includeCarousel ? <Carousel /> : null}
      </motion.main>

      <footer className="mt-20 border-t-1 border-black dark:border-white/10 md:mt-40">
        <div className="mx-auto max-w-3xl p-10">
          <div className="mb-8 items-center justify-between md:flex">
            <Link
              href="/"
              aria-label="Logo"
              className="mb-4 block text-3-1/2xl text-black dark:text-white md:mb-0"
            >
              ✦
            </Link>
            <Link
              href="mailto:anitalaudado@gmail.com"
              className="block text-2xl font-bold text-black dark:text-white md:text-3-1/2xl"
            >
              anitalaudado@gmail.com
            </Link>
          </div>
          <div className="items-end justify-between md:flex">
            <div className="mb-8 md:mb-0 md:w-80">
              <Tile size="small" title="Work" link="/work" />
              <Tile size="small" title="Personal Projects" />
              <Tile size="small" title="About" link="/about" />
            </div>
            <div className="flex flex-wrap gap-4">
              <LinkButton
                href="https://www.linkedin.com/in/ana-laudado/"
                type="primary"
                size="small"
                title="linkedin"
                target="_blank"
                rel="noreferrer"
              />
              <LinkButton
                href={resume?.url || '/docs/resume.pdf'}
                type="primary"
                size="small"
                title="resume ↓"
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
              />
              <button
                className="flex h-8 content-center items-center rounded-4xl border-1 border-black px-4 text-base text-black hover:bg-black hover:text-white dark:border-white dark:text-white hover:dark:bg-white hover:dark:text-black"
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              >
                top ↑
              </button>
            </div>
          </div>
        </div>

        <div className="copyright-bar bg-black text-white dark:bg-white dark:bg-opacity-10">
          <div className="mx-auto max-w-3xl items-center justify-between px-10 py-6 md:flex">
            <p className="mb-6 text-base md:mb-0">
              Ana Laudado - {new Date().getFullYear()}
            </p>
            <p className="text-base uppercase">
              Made with ♥ <br className="md:hidden" />
              From the end of the world
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

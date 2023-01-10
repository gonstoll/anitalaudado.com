import {useQuery} from '@tanstack/react-query';
import {motion} from 'framer-motion';
import Image, {ImageProps} from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import {getResume} from '~/models/asset';
import Carousel from './Carousel';
import Header from './Header';
import LinkButton from './LinkButton';
import Tag from './Tag';
import Tile from './Tile';

type Page = {
  type: 'page';
};

type Project = {
  type: 'project';
  banner?: ImageProps;
  tags?: Array<string>;
  summary: string | null;
  intro: {
    challenge: string | null;
    role: string | null;
    year: string | null;
  };
};

type Props = {
  title: string;
  includeCarousel?: boolean;
} & (Page | Project);

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
  });

  return (
    <>
      <Header />

      {props.type === 'project' ? (
        <div className="h-98 relative">
          {props.banner ? (
            <Image
              {...props.banner}
              placeholder="blur"
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10" />
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
          <div className="mt-20 md:mt-40 px-6 md:px-20 max-w-screen-2xl mx-auto">
            <h1 className="text-4-1/2xl md:text-6-1/2xl text-black dark:text-white font-bold md:whitespace-pre-line">
              {title}
            </h1>
            {children}
          </div>
        ) : (
          <div className="mt-5 md:mt-10 px-6 md:px-20 max-w-screen-2xl mx-auto">
            <h1 className="text-4-1/2xl md:text-6-1/2xl text-black dark:text-white font-bold md:whitespace-pre-line">
              {title}
            </h1>
            <div className="my-10 flex items-center flex-wrap gap-4">
              {props.tags?.map(tag => (
                <Tag key={tag} title={tag} />
              ))}
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 mb-20">
              <h2 className="text-3-1/2xl text-black dark:text-white">
                {props.summary}
              </h2>
              <div>
                {Object.entries(props.intro).map(([key, value]) => (
                  <div
                    key={key}
                    className="mb-6 last:mb-0 text-xl text-black dark:text-white"
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

      <footer className="mt-20 md:mt-40 border-t-1 border-black dark:border-white/10">
        <div className="p-10 max-w-3xl mx-auto">
          <div className="md:flex items-center justify-between mb-8">
            <Link
              href="/"
              aria-label="Logo"
              className="block text-3-1/2xl text-black dark:text-white mb-4 md:mb-0"
            >
              ✦
            </Link>
            <Link
              href="mailto:anitalaudado@gmail.com"
              className="block text-2xl md:text-3-1/2xl font-bold text-black dark:text-white"
            >
              anitalaudado@gmail.com
            </Link>
          </div>
          <div className="md:flex items-end justify-between">
            <div className="md:w-80 mb-8 md:mb-0">
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
                className="flex items-center content-center rounded-4xl border-1 border-black dark:border-white text-black dark:text-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black h-8 px-4 text-base"
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              >
                top ↑
              </button>
            </div>
          </div>
        </div>

        <div className="copyright-bar text-white bg-black dark:bg-white dark:bg-opacity-10">
          <div className="md:flex items-center justify-between px-10 py-6 max-w-3xl mx-auto">
            <p className="text-base mb-6 md:mb-0">
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
  );
}

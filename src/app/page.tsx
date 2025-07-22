import {Metadata} from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ana Laudado - Product Designer',
}

export default function Index() {
  return (
    <main className="flex flex-1 bg-[#FAFAF7]">
      <div className="flex flex-col my-auto gap-8 p-10 w-full max-w-[520px]">
        <Image
          priority
          src="/images/a.svg"
          alt="An a icon, initial from Ana"
          width={32}
          height={32}
        />
        <div>
          <p className="mb-2 text-[#373737]">
            Hi :) I’m Ana, a Product Designer based in Copenhagen, shaping
            brands and building products from the ground up.
          </p>
          <p className="text-[#979797]">
            Currently rebuilding my portfolio, but you can find me on{' '}
            <a
              className="underline underline-offset-2"
              href="https://www.linkedin.com/in/ana-laudado/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            , see{' '}
            <a
              className="underline underline-offset-2"
              href="/docs/resume.pdf"
              download
            >
              what I’ve been up to
            </a>{' '}
            or simply{' '}
            <a
              className="underline underline-offset-2"
              href="mailto:anitalaudado@gmail.com"
            >
              say hi
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}

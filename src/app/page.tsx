import {Metadata} from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ana Laudado - Product Designer',
}

export default function Index() {
  return (
    <main className="flex flex-1 bg-[#FAFAF7]">
      <div className="flex m-auto flex-col md:flex-row lg:items-center gap-10 p-10">
        <Image
          priority
          src="/images/a.svg"
          alt="An a icon, intial from Ana"
          width={40}
          height={40}
        />
        <div>
          <p className="mb-4 text-[#373737]">
            Hi :) I’m Ana, a Product Designer based in Copenhagen,{' '}
            <br className="hidden md:block" />
            shaping brands and building products from the ground up.
          </p>
          <p className="text-[#979797]">
            Currently rebuilding my portfolio, but you can find me on{' '}
            <br className="hidden md:block" />
            <a
              className="underline underline-offset-2"
              href="https://www.linkedin.com/in/ana-laudado/"
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

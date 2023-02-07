import Head from 'next/head';
import Image from 'next/image';
import Layout from '~/components/Layout';
import Tile from '~/components/Tile';

const SKILLS = [
  'Product Design',
  'Design Systems',
  'High Fidelity Prototyping',
  'Visual Design',
  'Iconography & Illustration',
  'User Research & Usability Testing',
];

export default function About() {
  return (
    <>
      <Head>
        <title>Ana Laudado | About</title>
      </Head>
      <Layout
        type="page"
        title={`Thanks for
        stopping by :)`}
      >
        <div className="mt-20 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="self-start">
            <h2 className="mb-10 text-3-1/2xl text-black dark:text-white">
              I'm Ana, a Product Designer specialised in detailed interfaces and
              passionate about components, who always finds an excuse to draw
              something.
            </h2>
            <p className="text-xl text-black dark:text-white">
              Originally from Ushuaia (Argentina), also known as the
              southernmost city in the world. At a young age I moved to the
              other side of the country to follow my passion for art,
              illustration and design. I've worked in some of the most
              recognizable design and digital agencies for over 8 years.
              <br />
              <br />
              Following that direction, a few years ago I sold everything and
              moved to the complete opposite hemisphere to continue my
              adventure. And that's exactly what I'm doing here in beautiful
              Copenhagen, where I work as a Product Designer.
              <br />
              <br />
              When I'm not designing or drawing I love experimenting in the
              kitchen, growing my indoor jungle, exploring new places and trying
              to catch some live music.
            </p>
          </div>
          <div className="h-200 rounded relative">
            <Image
              priority
              src="/images/AnitaLaudado.jpeg"
              alt="A profile picture of me"
              sizes="(min-width: 768px) 700px, 800px"
              width={800}
              height={600}
              className="rounded object-cover object-top w-full h-full"
            />
            <p className="mt-4 text-base text-black dark:text-white">
              Me, in my natural habitat
            </p>
          </div>
        </div>

        <h2 className="text-4-1/2xl mb-15 text-black dark:text-white">
          What I <b>do</b>
        </h2>
        <div>
          {SKILLS.map(skill => (
            <Tile key={skill} size="medium" title={skill} icon="✦" />
          ))}
        </div>
      </Layout>
    </>
  );
}

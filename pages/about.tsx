import Head from 'next/head';
import Image from 'next/image';
import Layout from '~/components/Layout';

const SKILLS = [
  'Product Design',
  'Design Systems',
  'High Fidelity Prototyping',
  'Visual Design',
  'Iconography & Illustration',
  'User Researh & Usability Testing',
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
              I'm Ana, a Product and Visual designer specialised in UI and
              Design Systems.
            </h2>
            <p className="text-xl text-black dark:text-white">
              Originally from Ushuaia, Argentina, also known as the southernmost
              city in the world. At a young age I moved to the other side of the
              country to follow my passion for art, illustration and design,
              where I got my bachelor in Graphic Design. I've worked as a Visual
              Designer and UI/UX Designer in some of the most recognizable
              design and digital agencies.
              <br />
              <br />
              Following that direction, a few years ago I sold everything and
              moved to the complete opposite hemisphere to continue my
              adventure. And that's exactly what I'm doing here in beautiful
              Copenhagen, where I work as a Product Designer specialised in
              Design Systems.
              <br />
              <br />
              When I'm not designing or drawing I love experimenting in the
              kitchen, growing my indoor jungle, exploring new places and trying
              to catch some live music.
            </p>
          </div>
          <div className="h-200 rounded relative">
            <Image
              fill
              priority
              src="/images/AnitaLaudado.jpeg"
              alt="A profile picture of me"
              /* width={3852}
              height={4815} */
              className="rounded object-cover object-top"
            />
          </div>
        </div>

        <h2 className="text-4-1/2xl mb-15 text-black dark:text-white">
          What I <b>do</b>
        </h2>
        <div>
          {/* TODO: Move this to the Tile component */}
          {SKILLS.map(skill => (
            <div
              key={skill}
              className="w-full flex items-center gap-6 py-5 border-b-1 border-black dark:border-white"
            >
              <p className="text-3-1/2xl text-black dark:text-white">{skill}</p>
              <p className="text-3-1/2xl text-black dark:text-white ml-auto">
                ✦
              </p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

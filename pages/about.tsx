import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <>
      <Head>
        <title>Ana Laudado | About</title>
      </Head>
      <Layout
        title={`Thanks for
        stopping by :)`}
      >
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center">
          <div>
            <h2 className="mb-10 text-3-1/2xl text-black dark:text-white">
              I'm Ana, a Product and Visual designer specialised in UI and
              Design Systems.
            </h2>
            <p className="text-base text-black dark:text-white">
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
        </div>
      </Layout>
    </>
  );
}

import Head from 'next/head';
import Card from '~/components/Card';
import Layout from '~/components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ana Laudado</title>
      </Head>
      <Layout
        includeCarousel
        type="page"
        title={`Hola! I'm Ana,
        a Product Designer
        based in Copenhagen.`}
      >
        <h2 className="mt-10 text-2xl text-black dark:text-white">
          I enjoy defining the right problems just as much as solving them
          through design, where my strong UI background comes in handy.
        </h2>
        <h3 className="mt-20 md:mt-40 mb-10 text-4-1/2xl text-black dark:text-white">
          Selected <b>work</b>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            title="Airtame Cloud  Split Navigation"
            description="A complete redesign of Airtame's management desktop platform for devices."
            tags={['Product Design', 'Design systems']}
            link="/projects/airtame-cloud-split-navigation"
            image={{
              src: '/images/projects/airtame-cloud-split-navigation/banner.png',
              alt: 'Airtame Cloud Split Navigation',
              priority: true,
              fill: true,
              sizes: '(min-width: 1024px) 33vw, 100vw',
            }}
          />
          <Card
            title="Airtame UI - Design System"
            description="Airtame UI is Airtame's official design system. Project leader, shipping multiple components, building documentation and improving collaboration between designer and developers."
            tags={['Design systems', 'Project Management']}
            link="/projects/airtame-ui-design-system"
            image={{
              src: '/images/projects/airtame-ui-design-system/banner.png',
              alt: 'Airtame Cloud Split Navigation',
              priority: true,
              fill: true,
              sizes: '(min-width: 1024px) 33vw, 100vw',
            }}
          />
          <Card
            title="Airtame Cloud Settings - Redesign for scale"
            tags={['Coming soon']}
            image={{
              src: '/images/projects/airtame-cloud-split-navigation/banner.png',
              alt: 'Airtame Cloud Split Navigation',
              priority: true,
              fill: true,
              sizes: '(min-width: 1024px) 33vw, 100vw',
            }}
          />
          <Card
            title="Introducing Playlists for Digital Signage"
            tags={['Coming soon']}
            image={{
              src: '/images/projects/airtame-ui-design-system/banner.png',
              alt: 'Airtame Cloud Split Navigation',
              priority: true,
              fill: true,
              sizes: '(min-width: 1024px) 33vw, 100vw',
            }}
          />
        </div>
      </Layout>
    </>
  );
}

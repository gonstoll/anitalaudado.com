import Head from 'next/head';
import Card from '../components/Card';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ana Laudado</title>
      </Head>
      <Layout
        title={`Hola! I'm Ana,
        a Product Designer
        based in Copenhagen.`}
      >
        <h2 className="mt-10 text-2xl text-black dark:text-white">
          I have a strong UI background, and a passion for Design Systems. My
          goal is to build digital products that impact people in a positive
          way.
        </h2>
        <h3 className="mt-20 md:mt-40 mb-10 text-4.5xl text-black dark:text-white">
          Selected <b>work</b>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Airtame Cloud  Split Navigation"
            description="A complete redesign of Airtame’s management desktop platform for devices."
            tags={['Product Design', 'Design systems']}
          />
          <Card
            title="Airtame UI - Design System"
            description="Airtame UI is Airtame’s official design system. Project leader, shipping multiple components, building documentation and improving collaboration between designer and developers."
            tags={['Design systems', 'Project Management']}
          />
        </div>
      </Layout>
    </>
  );
}

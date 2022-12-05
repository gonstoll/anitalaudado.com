import Head from 'next/head';
import Layout from '~/components/Layout';

export default function AirtameCloudSplitNavigation() {
  return (
    <>
      <Head>
        <title>Ana Laudado | Airtame Cloud Split Navigation</title>
      </Head>
      <Layout
        type="project"
        title="Airtame Cloud Split Navigation"
        banner=""
        tags={['Product Design', 'Design systems']}
        summary="A complete redesign of Airtame's management desktop platform for devices."
        details={{
          challenge:
            'How might we create a satisfying experience that makes finding, selecting and managing a device(s) feel quick, intuitive and efficient?',
          role: 'Product Design, Design System, Prototyping, Usability Testing',
          year: '2020 - 2021',
        }}
      >
        <h1>Airtame Cloud Split Navigation</h1>
      </Layout>
    </>
  );
}

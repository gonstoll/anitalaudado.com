import Head from 'next/head';
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
      </Layout>
    </>
  );
}

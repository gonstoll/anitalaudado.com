import Head from 'next/head';
import Header from './components/Header';
import Layout from './components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ana Laudado</title>
      </Head>
      <Layout>
        <Header />
      </Layout>
    </>
  );
}

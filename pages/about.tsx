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
            <h2 className="mb-10 text-3-1/2xl text-black dark:text-white"></h2>
          </div>
        </div>
      </Layout>
    </>
  );
}

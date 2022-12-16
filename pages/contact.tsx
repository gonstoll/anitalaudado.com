import Head from 'next/head';
import * as React from 'react';
import Layout from '~/components/Layout';
import LinkButton from '~/components/LinkButton';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Ana Laudado | Contact</title>
      </Head>
      <Layout type="page" title="Let's keep in touch!">
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="mb-10 text-2xl text-black dark:text-white">
              Feel free to reach out if you find what I do interesting, or
              simply have a chat :)
            </h2>
            <div className="flex items-center gap-4">
              <LinkButton
                type="primary"
                href="mailto:anitalaudado@gmail.com"
                size="medium"
                title="Email me directly"
              />
              <LinkButton
                type="primary"
                href="https://www.linkedin.com/in/ana-laudado/"
                size="medium"
                title="Connect on Linkedin"
                target="_blank"
                rel="noreferrer"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

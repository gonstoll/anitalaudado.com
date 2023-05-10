import Head from 'next/head'
import Layout from '~/components/Layout'
import LinkButton from '~/components/LinkButton'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Ana Laudado | Contact</title>
      </Head>
      <Layout type="page" title="Let's keep in touch!">
        <div className="mt-20 mb-10 grid grid-cols-1 lg:grid-cols-2">
          <h2 className="text-2xl text-black dark:text-white">
            Feel free to reach out if you find what I do interesting, or just to
            simply say hi :)
          </h2>
        </div>
        <div className="flex items-center flex-wrap gap-4">
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
      </Layout>
    </>
  )
}

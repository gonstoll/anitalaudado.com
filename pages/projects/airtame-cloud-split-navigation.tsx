import Head from 'next/head';
import {useRouter} from 'next/router';
import ImageBlock from '~/components/ImageBlock';
import Layout from '~/components/Layout';
import TextBlock from '~/components/TextBlock';

export default function AirtameCloudSplitNavigation() {
  const {asPath} = useRouter();

  const PROJECT_DETAILS = {
    slug: asPath.split('/').at(-1),
    title: 'Airtame Cloud Split Navigation',
  };

  const title = `Ana Laudado | ${PROJECT_DETAILS.title}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout
        type="project"
        title={PROJECT_DETAILS.title}
        banner={{
          src: `/images/projects/${PROJECT_DETAILS.slug}/banner.png`,
          alt: PROJECT_DETAILS.title,
        }}
        tags={['Product Design', 'Design systems']}
        summary="A complete redesign of Airtame's management desktop platform for devices."
        details={{
          challenge:
            'How might we create a satisfying experience that makes finding, selecting and managing a device(s) feel quick, intuitive and efficient?',
          role: 'Product Design, Design System, Prototyping, Usability Testing',
          year: '2020 - 2021',
        }}
      >
        <TextBlock
          title="Context"
          blocks={[
            'Airtame offers a wireless presentation solution for business and educational institutions: hybrid conferencing, screen sharing, & digital signage, all in a single platform. Airtame Cloud is a web based application that allows users to manage, monitor and control their devices and screens from anywhere.',
          ]}
        />

        <ImageBlock
          type="two-cols"
          images={[
            {
              src: `/images/projects/${PROJECT_DETAILS.slug}/CS_A_01.png`,
              alt: 'Image showing the before and after of the device list',
              caption: 'Before',
              width: 1200,
              height: 600,
            },
            {
              src: `/images/projects/${PROJECT_DETAILS.slug}/CS_A_02.png`,
              alt: 'After',
              caption: 'After',
              width: 1200,
              height: 600,
            },
          ]}
        />

        <TextBlock
          title={
            <>
              Defining the <b>problem</b>
            </>
          }
          blocks={[
            "Airtame Cloud offers an overview of all the devices in the same organisation, where you can create different groups to better organise them. Some organisations, like big schools in the US, have hundreds (sometimes thousands) of devices and Airtame Cloud was not prepare for these big rollouts. Some users were experiencing delays when loading the device list, and managing groups wasn't really intuitive. Search for a specific device/s to edit was challenging, and on the UI some of the information was being hidden.",
            'Technically speaking we were having a performance issue, as the frontend rendering of the devices list contained two layers of rendering: the first displaying the full list of groups, and the second with the respective devices per group.',
          ]}
        />

        <TextBlock
          title="Discovery"
          blocks={[
            'We unearthed useful insights through user feedback, usage data, inventory analysis, and user research. We had a workshops where with the PM, the Cloud Team Lead, the Product Design Lead and myself (Digital Product Designer) discussed the assumptions we had, and we ended up with many issues identified. Some of the them stood out as clear problems for users and the business:',
          ]}
          list={[
            'Finding a device is not easy or efficient, and Search is not user friendly.',
            'Information is most of the time hidden, and these details are crucial to make the user confident that they are editing the right device/s.',
            "It's hard to manage when there is a large amount of devices.",
            'The Cloud UI is not really intuitive.',
            'From a technical standpoint we were experiencing performance issues.',
          ]}
        />

        <ImageBlock
          type="three-cols"
          images={[
            {
              src: `/images/projects/${PROJECT_DETAILS.slug}/CS_A_03.png`,
              alt: 'Image showing assumptions workshop',
              width: 450,
              height: 400,
            },
            {
              src: `/images/projects/${PROJECT_DETAILS.slug}/CS_A_04.png`,
              alt: 'Image showing the hipotheses from the workshop',
              width: 450,
              height: 400,
            },
            {
              src: `/images/projects/${PROJECT_DETAILS.slug}/CS_A_05.png`,
              alt: 'Image showing low fidelity wireframes',
              width: 450,
              height: 400,
            },
          ]}
        />

        <TextBlock
          title="Ideation"
          blocks={[
            'From the technical side, render one layer at a time would solve the performance issues. So having this in mind, how can we present a solution to the user, that would feel intuitive and friendly? We knew we could achieved this by following patterns that felt familiar for the user, instead of trying to “reinvent the wheel”.',
          ]}
        />

        <TextBlock
          title="Validation"
          blocks={[
            "We worked closely together with the User Research Lead, and we reached out to some of our users and invited them to participate on an interview where we let them interact with the prototype. We asked if they see any difference, and for our surprise most of them didn't: they just started using and interacting with the prototype without hesitating. Users didn't notice the change, they used it exactly as we intended to.",
          ]}
        />

        <TextBlock
          title={
            <>
              We didn't stop <b>there</b>
            </>
          }
          blocks={[
            "We worked closely together with the User Research Lead, and we reached out to some of our users and invited them to participate on an interview where we let them interact with the prototype. We asked if they see any difference, and for our surprise most of them didn't: they just started using and interacting with the prototype without hesitating. Users didn't notice the change, they used it exactly as we intended to.",
          ]}
        />

        <TextBlock
          title="Final thoughts"
          list={[
            'How users are going to benefit from this?',
            'What did we learn? What challenges made me grow?',
            'What went well? What can be improved?',
          ]}
        />
      </Layout>
    </>
  );
}

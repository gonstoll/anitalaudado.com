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
        intro={{
          challenge:
            'How might we create a satisfying experience that makes finding, selecting and managing a device(s) feel quick, intuitive and efficient?',
          role: 'Product Design, Design System, Prototyping, Usability Testing',
          year: '2020 - 2021',
        }}
      >
        <TextBlock
          title="Context"
          blocks={[
            'Airtame offers a wireless presentation solution for business and educational institutions: hybrid conferencing, screen sharing, & digital signage, all in a single platform. Airtame Cloud is a web based application that allows users to manage, monitor and control their Airtame devices and screens from anywhere.',
          ]}
        />

        {/* <ImageBlock
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
        /> */}

        <TextBlock
          title={
            <>
              Defining the <b>problem</b>
            </>
          }
          blocks={[
            "Airtame Cloud offers an overview of all the devices in the same organisation, where you can create different groups to better organise them. This is the main screen of Cloud, and we call it Device List. Some organisations, like big schools in the US, have hundreds (sometimes thousands) of devices and Airtame Cloud was not prepare for these big rollouts. Some users were experiencing delays when loading the device list, and managing groups wasn't really intuitive. Search for a specific device/s to edit was challenging, and on the UI some of the information was being hidden.",
            'Technically speaking we were having a performance issue, as the frontend rendering of the devices list contained two layers of rendering: the first displaying the full list of groups, and the second with the respective devices per group.',
          ]}
        />

        <TextBlock
          title="Discovery"
          blocks={[
            'We unearthed useful insights through user feedback, usage data, inventory analysis, and user research:',
            'We had a workshop where with the PM, the Cloud Team Lead, the Product Design Lead and myself (Digital Product Designer), we discussed the assumptions we had, and we ended up with many issues identified. Some of the them stood out as clear problems for users and the business:',
          ]}
          list={[
            'Finding a device is not easy or efficient, and Searching is not user friendly.',
            'Information is most of the time hidden, and these details are crucial to make the user confident that they are editing the right device/s.',
            "It's hard to manage when there is a large amount of devices.",
            'The Cloud UI is not really intuitive.',
            'From a technical standpoint we were experiencing performance issues.',
            'Speaking from the UX side of things, we wanted to use patterns that felt familiar and intuitive to the user.',
          ]}
        />

        {/* <ImageBlock
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
        /> */}

        <TextBlock
          title="Ideation"
          blocks={[
            'From the technical side, render one layer at a time would solve the performance issues. So having this in mind, how can we present a solution to the user, that would feel intuitive and friendly? We knew we could achieved this by following patterns that felt familiar for the user, instead of trying to “reinvent the wheel”.',
          ]}
        />

        <TextBlock
          title="Validation"
          blocks={[
            "We worked closely together with the User Research Lead, and we reached out to some of our users and invited them to participate on qualitative interviews, where we let them interact with the prototype while we observed. We asked them to think out loud, and if they see any difference, and for our surprise most of them didn't. They just started using and interacting with the prototype without hesitating. Users didn't notice the change, they used it exactly as we intended to. We asked them to do simple but everyday tasks, like find a device, a group, and select one and multiple devices.",
          ]}
        />

        <TextBlock
          isFinalBlock
          title={
            <>
              Final <b>thoughts</b>
            </>
          }
          blocks={[
            'This was the biggest change since Airtame Cloud made its first appearance. The project was a huge team effort, where we joined developer and design forces.',
            'Saying this, it was a big challenge and the pressure to make it right was present. The users never noticed a change, and just started experiencing the Cloud as we intended. Thanks to that we learned the power of making things intuitive and familiar for the users.',
          ]}
        />
      </Layout>
    </>
  );
}

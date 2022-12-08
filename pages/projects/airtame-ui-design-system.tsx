import Head from 'next/head';
import Layout from '~/components/Layout';
import TextBlock from '~/components/TextBlock';

const PROJECT_DETAILS = {
  slug: 'airtame-ui-design-system',
  title: 'Airtame UI Design System',
};
const title = `Ana Laudado | ${PROJECT_DETAILS.title}`;

export default function AirtameUIDesignSystem() {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout
        type="project"
        title={PROJECT_DETAILS.title}
        banner={{src: '', alt: PROJECT_DETAILS.title}}
        tags={['Design systems', 'Project Management']}
        summary="Project leader, shipping multiple components, building documentation and improving collaboration between designers and developers."
        details={{
          challenge:
            'How might we create a satisfying experience that makes finding, selecting and managing a device(s) feel quick, intuitive and efficient?',
          role: 'Role Design Systems, Project Management, Documentation, Workshop facilitation',
          year: '2020 - 2022',
        }}
      >
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-20">
          <div className="col-span-1">
            <div className="w-full h-98 rounded bg-gray-200"></div>
          </div>
          <div className="col-span-1">
            <div className="w-full h-98 rounded bg-gray-200"></div>
          </div>
          <div className="col-span-1">
            <div className="w-full h-98 rounded bg-gray-200"></div>
          </div>
        </div>

        <TextBlock
          title="What we did"
          list={[
            'Show before and after. Figma plain, and then with everything and organised. More pages.',
            'Documentation, how the icon library grew.',
            'Dashboard on Figma.',
            'Created a channel to bring all the communications in one place.',
            'Less and less legacy.',
            'Process for Jira, we weren’t trating it as a proper project. We gave them identity, we shared it, we gain backup from stakeholders and pms.',
            'In several retrospectives developers were praising it!',
          ]}
        />

        <TextBlock
          title="What we did"
          list={[
            '80% of what we had on Figma translated to Storybook by the end of the year. It took us only 3 months!',
            'We involved the company',
          ]}
        />

        <TextBlock
          title="Final thoughts"
          list={[
            'The dashboard is hard to keep up to date.',
            'What did we learn? What challenges made me grow?',
            'What went well? What can be improved?',
          ]}
        />
      </Layout>
    </>
  );
}

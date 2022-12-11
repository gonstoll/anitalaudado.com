import * as React from 'react';

interface Props {
  title: React.ReactNode;
  blocks?: Array<string>;
  list?: Array<string>;
}

export default function TextBlock({title, blocks, list}: Props) {
  const textBlockId = `title-${title}`;

  return (
    <div className="text-black dark:text-white mb-20 lg:px-40">
      <h3 id={textBlockId} className="text-2xl mb-6">
        {title}
      </h3>
      {blocks?.map((paragraph, index) => (
        <React.Fragment key={index}>
          <p className="text-base peer">{paragraph}</p>
          <br className="peer-last-of-type:hidden" />
        </React.Fragment>
      ))}
      {list ? (
        <ul
          aria-aria-labelledby={textBlockId}
          className="peer mt-5 list-disc list-inside"
        >
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

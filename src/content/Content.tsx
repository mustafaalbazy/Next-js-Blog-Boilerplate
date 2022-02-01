import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="content">
    {props.children}

    <style jsx>
      {`
        .content :global(*) {
          @apply break-words;
        }
        .content :global(p) {
          @apply my-6;
        }
        .content :global(ul) {
          @apply my-6;
        }
        .content :global(h2) {
          @apply text-2xl font-semibold mt-12;
        }
        .content :global(h3) {
          @apply text-xl font-semibold mt-8;
        }
      `}
    </style>
  </div>
);

export { Content };

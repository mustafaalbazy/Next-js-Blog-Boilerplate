import React, { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <ul className="navbar flex flex-wrap text-xl">
    {props.children}

    <style jsx>
      {`
        .navbar :global(a) {
          @apply text-stone-500;
        }

        .navbar :global(a:hover) {
          @apply no-underline;
          color: crimson;
        }
      `}
    </style>
  </ul>
);

export { Navbar };

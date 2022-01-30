import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="About"
        description="Mustafa Albazy about page. This is the official site of Mustafa Albazy."
      />
    }
  >
    <Content>
      <p>
        <h2>About Mustafa Albazy</h2>
      </p>
      <p>Hey :)</p>
      <p>
        welcome to my personal site.
        <br />
        This site have been built recently and it&apos;s still in early stages
        of developement.
      </p>
      <p>
        I do work as a Mastering Engineer in the music industry. At the same
        time I&apos;m studying BEng Electrical and Electronics Engineering at
        Salford University.
        <br />
        Arab/British living in the UK.
        <br />
      </p>
      <i>
        Just as every british, I hate the all-the-time cloudy and rainy weather
        :(
      </i>
      <p>
        I&apos;ve been blogging on my Arabic site on albazy.com for almost 15
        years and now decided, finally, to start also my English site.
      </p>
      <p>
        This site will contain my personal biography introducing my academic,
        skills, career and professional accomplishments. Plus some blogs from
        time to time to share updates, ideas, opinions and thoughts on
        everything (and maybe anything) related to me.
      </p>
      <p>Until then, take care for now *_^</p>
    </Content>
  </Main>
);

export default About;

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcom to <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, autem nihil eaque repellendus velit quaerat cumque dolorem quisquam provident sint.
        </SectionText>
        <Button onClick={() => winndow.location = 'https://google.com'}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
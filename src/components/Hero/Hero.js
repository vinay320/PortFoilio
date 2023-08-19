import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
           I'm{" "}
          <span style={{ color: "white" }}>Vinay Tomar</span>, a passionate Full
          Stack Developer with a commitment to crafting seamless digital
          experiences. With a background in both front-end and back-end
          technologies, I specialize in transforming innovative ideas into
          functional and user-friendly applications.
        </SectionText>
        <Button onClick={props.handleClick}>
          <a href="https://drive.google.com/file/d/1A8sWJFeBA5vBLNbYnQYxsoIc3BNkH8iA/view?usp=drive_link">
            <span style={{ color: "white" }}>Learn More</span>
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
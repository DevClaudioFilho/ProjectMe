import React from 'react';
import { Link } from 'react-router-dom';


import { Container} from './styles';

import TypingEfect from '../../../../components/TypingEfect';


function About() {
  return(
      <Container >
        <div>
          <TypingEfect lineHeight="2.1rem" maxLineHeight="5" bgColor="#312E38" title>
            Welcome to my World
          </TypingEfect>
          <TypingEfect lineHeight="1.3rem" bgColor="#312E38"  delay="2.5s">
            I am <strong last="true">Claudio Filho</strong>, I am full-stack web developer and UI/UX javascript specialist.<br/>
            Check my socials medias and take one view on my <Link to={"/portifolio"}>portifolio page</Link>.
          </TypingEfect>
        </div>
      </Container>
  );
}

export default About;
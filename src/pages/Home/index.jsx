import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet  } from "react-helmet";

import { AiOutlineCaretDown } from "react-icons/ai";
import { Container,About,TypingTitle,Typing} from './styles';

import SocialMedia from '../../components/SocialMedia';


function Home() {

  return(
    <> 
      <Helmet>
        <title>Claudio Filho | About</title>
      </Helmet>
      <Container>
        <About class="typewriter">
          <TypingTitle >Welcome to my World</TypingTitle>
          <Typing delay="2s">
            I am <strong last="true">Claudio Filho</strong>, I am full-stack web developer and UI/UX javascript specialist.<br/>
          </Typing>
          <Typing delay="4s" teste>
            Check my socials medias and take one view on my <Link to={"/portifolio"}>portifolio page</Link>.
          </Typing> 
        </About>
        <SocialMedia/>
        <Link to={"/portifolio"} className="NextPage">
            <AiOutlineCaretDown/>
        </Link>
      </Container>
    </>
  );
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet  } from "react-helmet";

import { AiOutlineInstagram,AiOutlineGithub,AiOutlineLinkedin, AiOutlineFacebook,AiOutlineCaretDown } from "react-icons/ai";
import { Container,SocialMedias,About} from './styles';


function Home() {
  return(
    <>
    <Helmet>
      <title>Claudio Filho | About</title>
    </Helmet>
    <Container>
      <About>
          <h1>Welcome to my World</h1>
          <p>
            I am <strong>Claudio Filho</strong>, I am full-stack web developer and UI/UX javascript specialist.<br />
            Check my socials medias and take one view on my <Link to={"/portifolio"}>portifolio page</Link>.
          </p>
      </About>
      <SocialMedias>
          <li className='github'>
            <a href="https://github.com/DevClaudioFilho" >
              <AiOutlineGithub/>
            </a>
          </li>
          <li className='linkedin'>
            <a href="https://github.com/DevClaudioFilho" >
              <AiOutlineLinkedin/>
            </a>
          </li>
          <li className='instagram'>
            <a href="https://github.com/DevClaudioFilho" >
              <AiOutlineInstagram/>
            </a>
          </li>
          <li className='facebook'>
            <a href="https://github.com/DevClaudioFilho" >
              <AiOutlineFacebook/>
            </a>
          </li>
      </SocialMedias>
      <Link to={"/portifolio"} className="NextPage">
          <AiOutlineCaretDown/>
      </Link>
    </Container>
    </>
  );
}

export default Home;
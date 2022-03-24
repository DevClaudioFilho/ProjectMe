import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { 
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin, 
  AiOutlineFacebook,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";

import { 
  SiReact
} from "react-icons/si";
import { Content,Title,CardsList,Card,SocialMedias, Container} from './styles';


function Portifolio() {
  return(
  <>
    <Helmet>
      <title>Claudio Filho | Guides</title>
    </Helmet>
    <Container>
    <Link to={"/"} className="PrevPage">
          <AiOutlineCaretUp/>
    </Link>
    <Content>
      <Title>
        <h1>Portifolio</h1>
        <p>This is my steps to my destiny, my way to demostrate things alsom...</p>
      </Title>
      <CardsList>
        <li>
          <Link to={""}>
             <Card>
               <h1>GrupoJomp</h1>
               <p>Site empresarial</p>
               <span>
                 <SiReact size={"20px"}/>
               </span>
             </Card>
          </Link>
        </li>
        <li>
          <Link to={""}>
             <Card>
               <h1>GrupoJomp</h1>
               <p>Site empresarial</p>
               <span>
                 <SiReact size={"20px"}/>
               </span>
             </Card>
          </Link>
        </li>
        <li>
          <Link to={""}>
             <Card>
               <h1>GrupoJomp</h1>
               <p>Site empresarial</p>
               <span>
                 <SiReact size={"20px"}/>
               </span>
             </Card>
          </Link>
        </li>
        <li>
          <Link to={""}>
             <Card>
               <h1>GrupoJomp</h1>
               <p>Site empresarial</p>
               <span>
                 <SiReact size={"20px"}/>
               </span>
             </Card>
          </Link>
        </li>
        <li>
          <Link to={""}>
             <Card>
               <h1>GrupoJomp</h1>
               <p>Site empresarial</p>
               <span>
                 <SiReact size={"20px"}/>
               </span>
             </Card>
          </Link>
        </li>
        <li>
          <Link to={""}>
             <Card>
               <h1>GrupoJomp</h1>
               <p>Site empresarial</p>
               <span>
                 <SiReact size={"20px"}/>
               </span>
             </Card>
          </Link>
        </li>
      </CardsList>
    </Content>
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

export default Portifolio;
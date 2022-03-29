import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { 
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";

import { Content,Title, Container} from './styles';
import SocialMedia from '../../components/SocialMedia';


function Contatos() {
  return(
  <>
    <Helmet>
      <title>Claudio Filho | Guides</title>
    </Helmet>
    <Container>
    <Link to={"/portifolio"} className="PrevPage">
          <AiOutlineCaretUp/>
    </Link>
    <Content>
      <Title>
        <h1>Contatos</h1>
        <p>This is my steps to my destiny, my way to demostrate things alsom...</p>
      </Title>
      <div>
        <h2>Email</h2>
        <p>teste@teste.com</p>
        <h2>Whatapp</h2>
        <p>teste@teste.com</p>
      </div>
    </Content>
    <SocialMedia/>
    <Link to={"/contatos"} className="NextPage">
      <AiOutlineCaretDown/>
    </Link>
    </Container>
  </>
  );
}

export default Contatos;
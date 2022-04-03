import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { 
  AiOutlineCaretUp,
  AiFillPhone,
  AiOutlineWhatsApp
} from "react-icons/ai";

import { 
  Content,
  Title,
  Container,
  EmailForm,
  ContatosContainer,
  InfoContainer
} from './styles';
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
      <ContatosContainer>
        <EmailForm
          action=""
          method="POST"
          id="sendEmail"
        >
            <h2>Email
            </h2>
            <div>
              <input
                  type="text"
                  size="30"
                  name="nome"
                  placeholder="Nome"
                  form="sendEmail"
                  required
                />
                <input
                  type="text"
                  size="30"
                  name="replyto"
                  placeholder="Email"
                  form="sendEmail"
                  required
                />
            </div>
            <textarea
              type="text"
              size="35"
              name="Comentarios"
              placeholder="Mensagem"
              form="sendEmail"
              required
            />
            <button type="submit" name="BTEnvia" value="Enviar" text="Enviar" >
              Enviar
            </button>
        </EmailForm>
      </ContatosContainer>

    </Content>
    <SocialMedia/>
    </Container>
  </>
  );
}

export default Contatos;
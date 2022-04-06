import React,{useState,useEffect} from 'react';

import { 
  Title,
  Container,
  EmailForm,
  ContatosContainer,
} from './styles';

import { 
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlinePhone
} from "react-icons/ai";



function Contatos() {
  const [modalIsOpen,setModalIsOpen] = useState(false);
  useEffect(() => {
    if(modalIsOpen===true){
      window.scrollTo(0, document.body.scrollHeight)
    }
  },[modalIsOpen]);
  return(
    <Container id='teste'>
      <Title>
        <h1>Contatos</h1>
        <p>This is my steps to my destiny, my way to demostrate things alsom...</p>
      </Title>
      <ContatosContainer>
        <ul>
          <li className='whatsapp'>
            <a href="https://wa.me/351961358647" target={'_blank'} rel="noreferrer" aria-label="Go to Whatsapp">
              <AiOutlineWhatsApp/>
            </a>
          </li>
          <li className='mail'>
            <button onClick={()=>setModalIsOpen(!modalIsOpen)} aria-label="Open Form Email" type='button'>
              <AiOutlineMail/>
            </button>
          </li>
          <li className='phone'>
            <a href="tel:+351-961-358-647" aria-label="Tell to my number: +351-961-358-647">
              <AiOutlinePhone/>
            </a>
          </li>
        </ul>
        {modalIsOpen?
        (
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
        ):null}
        
      </ContatosContainer>

    </Container>
  );
}

export default Contatos;
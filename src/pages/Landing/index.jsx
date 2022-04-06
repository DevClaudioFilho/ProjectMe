import React from 'react';
import { Container} from './styles';

import SocialMedia from '../../components/SocialMedia';
import About from './Sections/About';
import Portifolio from './Sections/Portifolio';
import Contatos from './Sections/Contato';


function Home() {
  
  return(
    <> 
      <Container y={window.innerHeight}>
        <SocialMedia/>
        <About/>
        <Portifolio/>
        <Contatos/>
      </Container>
    </>
  );
}

export default Home;
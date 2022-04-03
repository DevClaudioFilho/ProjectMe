import React from 'react';
import { Container} from './styles';

import SocialMedia from '../../components/SocialMedia';
import About from './Sections/About';
import Portifolio from './Sections/Portifolio';


function Home() {

  return(
    <> 
      <Container>
        <SocialMedia/>
        <About/>
        <Portifolio/>
      </Container>
    </>
  );
}

export default Home;
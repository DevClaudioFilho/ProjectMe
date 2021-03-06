import React,{useEffect,useState} from 'react';
import { Container} from './styles';

import SocialMedia from '../../components/SocialMedia';
import About from './Sections/About';
import Portifolio from './Sections/Portifolio';
import Contatos from './Sections/Contato';


function Home() {
  const [size,setSize] = useState(window.innerHeight)

  useEffect(() => {

  },[size]);

  window.addEventListener('resize',function(event){
    setSize(window.innerHeight);

    return
  });
  return(
    <> 
      <Container y={size}>
        <SocialMedia/>
        <About/>
        <Portifolio/>
        <Contatos/>
      </Container>
    </>
  );
}

export default Home;
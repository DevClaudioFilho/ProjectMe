import React from 'react';
import { AiOutlineMenu} from "react-icons/ai";
import { Container } from './styles';

function Header() {
  return (
      <Container>
        <nav>
            <AiOutlineMenu/>
        </nav>
      </Container>
  );
}

export default Header;
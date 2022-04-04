import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.section`
  z-index: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #c8c8c8;

  @media screen and (min-width: 800px) {
    h1{
      font-size: 2.7rem;
    }
    p{
      font-size: 1.2rem;
    }
  }
`;

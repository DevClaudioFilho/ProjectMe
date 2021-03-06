import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.section`
    z-index: 1;
    height: calc(100vh - 20px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50vh;
  }
  a{
    color:#c17dff;
    :hover{
      color:#c98fff;
    }
  }

  @media screen and (min-width: 800px) {
    h1{
      font-size: 2.7rem;
    }
    p{
      font-size: 1.2rem;
    }
  }
`;

import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
`;


export const Title =styled.div`
  align-self: flex-start;
  margin-bottom: 60px;
  max-width: 100%;
  h1{
    font-size:1.8rem;
  }
  p{
    font-size: 1rem;
    margin-top: 5px;
  }
  @media only screen and (min-width: 800px) {
    h1{
      font-size: 2.7rem;
    }
    p{
      font-size: 1.2rem;
    }
  }

`;


export const ContatosContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
`;

export const EmailForm = styled.form`
  display: flex;
  max-width: 500px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  flex-direction: column;
  input,textarea{
    background-color: transparent;
    border: solid 2px #FFF;
    border-radius: 4px;
    padding: 8px;
    color: #fff;
    :focus, :hover{
      border: solid 2px #551a8b;
    }
    ::placeholder{
      color: #fff;
    }
  }
  div{
    margin-bottom: 5px;
    display: flex;
    input{
      max-width: 49.7%;
    }
    input+input{
      margin-left: auto;
    }
  }
  textarea{
    margin-bottom: 5px;
    height: 200px;
    max-width: 600px;
    width: 100%;
    resize: none;
  }
  button{
    margin: 10px auto;
    padding:10px 30px;
    background-color: #551a8b;
    border: 1px solid transparent;
    border-radius: 4px;
    color: whitesmoke;
    font-size: 1.2rem;
    transition: all 0.8s;
    &:hover{
      border: 1px solid #fff;
    }
  }
  h2{
    margin-bottom: 25px;
  }
`;
import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 80px;

  a.NextPage,a.PrevPage{
    width:70px;
    height: 70px;
    svg{
      width: 100%;
      height: 100%;
    }
    :hover{
      zoom: 1.05;
    }
    &.NextPage{
      position: fixed;
      bottom: 0;
      right: calc(50% - 35px);
    }
    &.PrevPage{
      position: fixed;
      top: 0;
      right: calc(50% - 35px);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1015px;
  width: 100%;
  height: 65%;
`;

export const Title =styled.div`
  margin-bottom: 40px;
  width: 100%;
  p{
    margin-top: 5px;
  }
`;

export const ContatosContainer = styled.section`
  display: flex;
  width: auto;
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
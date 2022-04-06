import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.section`
    z-index: 1;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
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
  flex-direction: column;

  ul{
    display: flex;
    flex-direction: row;
    width: 50%;
    margin: 0 auto;
    justify-content: space-evenly;
    li{
      display: flex;
      align-items: center;
      justify-content: center;

      width: 70px;
      height: 70px;

      border: 3px solid #000;

      border-radius: 10px;

      button,a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: transparent;
        border: none;
      }
      svg{
        height: 50px;
        width: 50px;
        color: #000;
      }


      &:hover{
        color: #fff;
        border:3px solid #fff;
        svg{
        color: #fff;
        border: #fff;
        }

      }
    }
  }
`;

export const EmailForm = styled.form`
  display: flex;
  width: 60%;
  max-height: 400px;
  height: 100%;
  flex-direction: column;
  margin: 20px auto;
  padding: 10px 50px;
  background-color: rgb(0,0,0,0.3);
  position: relative;
  ::after{
      content: "";
      position: absolute;
      width: 0; 
      height: 0; 
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid rgb(0,0,0,0.3);;
      top: -20px;
      right: calc(50% - 20px);
    }
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
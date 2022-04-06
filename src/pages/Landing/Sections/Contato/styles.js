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
    width: 100%;
    margin: 0 auto;
    justify-content: space-evenly;

    li{
      display: flex;
      align-items: center;
      justify-content: center;

      width: 70px;
      height: 70px;
      button,a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: #fff;
        border: 3px solid #fff;
        border-radius: 10px;

        svg{
        height: 50px;
        width: 50px;
        color: #fff;

        } 

        &:hover{
        color: #c8c8c8;
        border:3px solid #c8c8c8;
          svg{
          color: #c8c8c8;
          border: #c8c8c8;
          }
        }
      }
    }

    

    .phone{ 
      position: relative;
      :hover{
        ::after{ 
          opacity: 1;
        }
      }
      ::after{
        content: "+351\-961\-358\-647";
        display: flex;
        justify-content: center;
        align-items:center;
      
        height: 30%;
        width: 100px;
       
        position: absolute;
        bottom: -55%;
        
        font-size: 0.8rem;
        
        background-color: #c8c8c8;
        color: #fff;
        padding: 10px;
        opacity:0;
        transition: opacity 0.4s;

      }
      @media screen and (min-width: 700px) {
          :after{
            right: -165%;
            bottom: 15%;
            width: auto;
          }
        }
    }

  }


  @media screen and (min-width: 700px) {
    ul{
      width: 50%;
    }
  }
`;

export const EmailForm = styled.form`
  display: flex;
  width: 100%;
  max-height: 400px;
  height: 100%;
  flex-direction: column;
  margin: 20px auto;
  padding: 10px 20px;
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
  h2{
    margin-bottom: 25px;
  }
  input,textarea{
    background-color: transparent;
    border: solid 2px #FFF;
    border-radius: 4px;
    padding: 8px;
    color: #fff;
    :focus, :hover{
      border: solid 2px #c8c8c8;
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


    
  @media screen and (min-width: 700px) {
      width: 60%;
      padding: 10px 50px;
  }

`;
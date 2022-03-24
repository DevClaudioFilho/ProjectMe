import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a.NextPage{
    width:70px;
    height: 70px;

    position: fixed;
    bottom: 0;
    right: calc(50% - 35px);
    svg{
      width: 100%;
      height: 100%;
    }
    :hover{
      zoom: 1.05;
    }
  }
`;

export const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width:800px;

  h1{
    font-size: 5rem;
  }
  p{
    margin-top:15px;
    font-size: 1.2rem;
  }
  strong{
    font-weight:bold;
  }
`;

export const SocialMedias = styled.ul`
  position: fixed;
  left: 0;
  top:calc(50%-60*4);
  .github{
      background-color: #5b5959;
  }
  .linkedin{
      background-color: #0e76a8;
  }
  .facebook{
    background: #3b5998;
  }
  .instagram{
    background: #d6249f;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  }
  li{
    width: 60px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: right;
    transition: width 1s;

    svg{
      width: 30px;
      height: 30px;

      color: white;
      margin: 0 15px;
    }
    :hover{
      width: 80px;
    }
  }
`;
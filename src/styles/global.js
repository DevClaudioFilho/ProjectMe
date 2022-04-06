import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:1;
  }
  html{
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch
  }
  body {
    background:#312E38;
    color:#FFF;
    -webkit-font-smoothing:antialiased;

    ::-webkit-scrollbar {
      background: rgba(0,0,0,0.3); 
      width: 10px;
    } 
    ::-webkit-scrollbar-thumb {
      background: #c8c8c8; 
      border-radius: 10px;
    }
  }
  input, button{
    font-family:'Roboto Slab', serif;
    font-size:1rem;
  }
  h1,h2,h3,h4,h5,h6, strong{
    font-weight:bold;
  }
  button{
    cursor:pointer;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
`;
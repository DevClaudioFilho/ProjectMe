import styled from 'styled-components';
// import { shade } from 'polished';

export const SocialMedias = styled.ul`
display: flex;
position: fixed;
z-index: 50;
right: 0;
top: 0;
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
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 1s;

  svg{
    width: 30px;
    height: 30px;

    color: white;
    margin: 0 15px;
  }
  :hover{
    height: 55px;
  }
}
`;
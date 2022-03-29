import styled from 'styled-components';
// import { shade } from 'polished';

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
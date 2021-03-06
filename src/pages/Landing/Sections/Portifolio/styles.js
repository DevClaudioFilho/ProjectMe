import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.section`
    z-index: 1;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
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

export const CardsList = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-right: 10px;

  overflow: auto;
  ::-webkit-scrollbar {
  width: 5px;
  } 
  ::-webkit-scrollbar-thumb {
    background: #c17dff; 
    border-radius: 10px;
  }

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
    
    li{
      justify-self: end
    }
    li:nth-child(2n){
      justify-self: start
    }
  }
  @media (max-width: 690px) {
    grid-template-columns: repeat(1, 1fr);
    li{
      justify-self: center
    }
    li:nth-child(2n){
      justify-self: center
    }
  }
`;

export const Card= styled.li`
  max-width: 320px;
  width: 100%;
  height:50vw;
  max-height: 220px;
    
  background-image:${(props) => `url(${props.BgImg})`};
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;


  animation: mymove 1s infinite;

  @keyframes mymove {
    from { background-color: rgba(0,0,0,0.3);}
    to {background-color: rgba(0,0,0,0.2);}
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: opacity 0.5s;

    width: 100%;
    height: 100%;

    color: whitesmoke;
    h1{
      font-size: 2rem;
    }
    p{
      font-size: 1rem;
      margin-top: 5px;
    }
    span{
      margin-top: 15px;
      svg+svg{
        margin-left: 5px;
      }
    }
    &:hover{
      opacity: 1;
      background: rgba(0,0,0,0.60);
    }
  }
`
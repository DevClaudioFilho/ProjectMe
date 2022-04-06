import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px ;
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

  section{
    border-bottom: 3px solid #c8c8c8;
    padding: 40px 0 ;
    position: relative;

    
    border-bottom: 3px solid #c8c8c8;
    padding: 40px 0 ;
    position: relative;
    ::after{
      content: "";
      position: absolute;
      width: 0; 
      height: 0; 
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 20px solid #c8c8c8;
      bottom: -20px;
    }
  }
  section:last-of-type{
    border-bottom: none;
    ::after{
      display: none;
    }
  }
`;

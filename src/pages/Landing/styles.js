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


  section{
    border-bottom: 3px solid #c8c8c8;
    padding: 40px 0 ;
    position: relative;
    max-height: ${(props)=>`${props.y}px`};
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

import React from 'react';

import { Body,Title } from './styles';

function TypingEfect(props) {
  console.log(props.delay)
  return (
    props.title?
      ( 
        <Title lineHeight={props.lineHeight} bgColor={props.bgColor} delay={props.delay}>
          {props.children}
        </Title> 
      ):
      ( 
        <Body lineHeight={props.lineHeight} bgColor={props.bgColor} delay={props.delay}>
          {props.children}
        </Body> 
      )
  );
}

export default TypingEfect;
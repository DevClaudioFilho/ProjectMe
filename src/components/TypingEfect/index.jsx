import React from 'react';

import { Body,Title } from './styles';

function TypingEfect(props) {
  return (
    props.title?
      ( 
        <Title lineHeight={props.lineHeight} maxLineHeight={props.maxLineHeight} bgColor={props.bgColor} delay={props.delay}>
          {props.children}
        </Title> 
      ):
      ( 
        <Body lineHeight={props.lineHeight} maxLineHeight={props.maxLineHeight} bgColor={props.bgColor} delay={props.delay}>
          {props.children}
        </Body> 
      )
  );
}

export default TypingEfect;
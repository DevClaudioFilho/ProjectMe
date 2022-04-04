import styled from 'styled-components';

export const Body = styled.p`
  --bgColor: ${(props)=>props.bgColor};
  --lines: 50;
  --lineHeight: ${(props)=>props.lineHeight};
  --timePerLine: 1s;
  --widthCh: 100%;
  --width: calc(var(--widthCh) * 1ch);
  --time: calc(var(--lines) * var(--timePerLine));
  --delay: ${(props)=>props.delay};

  @media screen and (min-width: 800px){
    --lineHeight: calc(${(props)=>props.lineHeight});
  }

  animation: grow var(--time) steps(var(--lines));
  animation-fill-mode: forwards;
  animation-delay:var(--delay);
  background: var(--bgColor);  
  line-height: var(--lineHeight);
  max-height: var(--lineHeight);
  overflow: hidden;
  position: relative;
  width: var(--width);


  ::before {
    content: "";
    animation: 
      type var(--timePerLine) var(--lines) forwards, 
      carriageReturn var(--time) steps(var(--lines)) var(--lines);
    animation-delay:var(--delay);
    background: var(--bgColor);
    bottom: 0;
    height: var(--lineHeight);
    position: absolute;
    right: 0;
    width: 100%;
  }

  @keyframes grow {
    0% { max-height: var(--lineHeight); }
    100% { max-height: calc(var(--lineHeight) * var(--lines)); }
  }

  @keyframes carriageReturn {
    0% { top: 0; }
    100% { top: calc(var(--lineHeight) * var(--lines)); }
  }

  @keyframes type {
    0% { width: 100%; }
    100% { width: 0%; }
  }
`;

export const Title = styled.h1`
  --bgColor: ${(props)=>props.bgColor};
  --lines: 50;
  --lineHeight: ${(props)=>props.lineHeight};
  --timePerLine: 1s;
  --widthCh: 100%;
  --width: calc(var(--widthCh) * 1ch);
  --time: calc(var(--lines) * var(--timePerLine));
  --delay: ${(props)=>props.delay};

  
  @media screen and (min-width: 800px){
    --lineHeight: calc(${(props)=>props.lineHeight}*1.5);
  }

  animation: grow var(--time) steps(var(--lines));
  animation-fill-mode: forwards;
  animation-delay:var(--delay);
  background: var(--bgColor);  
  line-height: var(--lineHeight);
  max-height: var(--lineHeight);
  overflow: hidden;
  position: relative;
  width: var(--width);
  padding-bottom: 10px;



::before {
  content: "";
  animation: 
    type var(--timePerLine) var(--lines) forwards, 
    carriageReturn var(--time) steps(var(--lines)) var(--lines);
  animation-delay:var(--delay);
  background: var(--bgColor);
  bottom: 0;
  height: var(--lineHeight);
  position: absolute;
  right: 0;
  width: 100%;
}

@keyframes grow {
  0% { max-height: var(--lineHeight); }
  100% { max-height: calc(var(--lineHeight) * var(--lines)); }
}

@keyframes carriageReturn {
  0% { top: 0; }
  100% { top: calc(var(--lineHeight) * var(--lines)); }
}

@keyframes type {
  0% { width: 100%; }
  100% { width: 0%; }
}

`;

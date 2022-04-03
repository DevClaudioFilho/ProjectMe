import styled from 'styled-components';

export const Body = styled.p`

  --bgColor: ${(props)=>props.bgColor};
  --lines: 500;
  --lineHeight: ${(props)=>props.lineHeight};
  --timePerLine: 1s;
  --widthCh: 100%;
  --width: calc(var(--widthCh) * 1ch);
  --time: calc(var(--lines) * var(--timePerLine));
  --delay: ${(props)=>props.delay};

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
    type var(--timePerLine) linear infinite, 
    carriageReturn var(--time) steps(var(--lines)) var(--lines),
    caret 0.5s steps(2) infinite;
  animation-delay:var(--delay);
  background: var(--bgColor);
  border-left: 2px solid;
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

@keyframes caret {
  0% { color: var(--bgColor); }
  100% { color: #fff; }
}
`;

export const Title = styled.h1`
  --bgColor: ${(props)=>props.bgColor};
  --lines: 500;
  --lineHeight: ${(props)=>props.lineHeight};
  --timePerLine: 1s;
  --widthCh: 100%;
  --width: calc(var(--widthCh) * 1ch);
  --time: calc(var(--lines) * var(--timePerLine));
  --delay: ${(props)=>props.delay};

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
    type var(--timePerLine) linear infinite, 
    carriageReturn var(--time) steps(var(--lines)) var(--lines),
    caret 0.5s steps(2) infinite;
  animation-delay:var(--delay);
  background: var(--bgColor);
  border-left: 2px solid;
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

@keyframes caret {
  0% { color: var(--bgColor); }
  100% { color: var(--bgColor);; }
}
`;

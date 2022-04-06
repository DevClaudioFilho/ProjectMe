import React from 'react';

import { 
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin, 
  AiOutlineFacebook,
} from "react-icons/ai";

import {SocialMedias} from './styles';


function SocialMedia() {
  return(
    <SocialMedias>
          <li className='github'>
            <a  href="https://github.com/DevClaudioFilho" target={'_blank'} rel="noreferrer" aria-label='Github'>
              <AiOutlineGithub />
            </a>
          </li>
          <li className='linkedin'>
            <a href="https://www.linkedin.com/in/claudio-martins-de-pinho-filho-99a6a1192/" target={'_blank'} rel="noreferrer" aria-label="Linkedin">
              <AiOutlineLinkedin/>
            </a>
          </li>
          <li className='instagram'>
            <a href="https://www.instagram.com/claudio_martinss/" target={'_blank'} rel="noreferrer" aria-label="Instagram">
              <AiOutlineInstagram/>
            </a>
          </li>
          <li className='facebook'>
            <a href="https://www.facebook.com/claudio.martins.39" target={'_blank'} rel="noreferrer" aria-label="Facebook">
              <AiOutlineFacebook/>
            </a>
          </li>
    </SocialMedias>
  );
}

export default SocialMedia;
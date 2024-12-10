import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css"

export default function Footer() {
  return (
    <footer>   
      <p >&copy; {new Date().getFullYear()} All rights reserved.</p>
      
      <p >
        Built with <span>♥</span> by Sameer
      </p>
      
      <div>
        <a 
          href="https://github.com/sameermoyal" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        
        <a 
          href="https://www.linkedin.com/in/mohammad-sameer-220a91176/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      
        <a 
          href="mailto:@sameerab827gmail.com" 
          aria-label="Email"
        >
  
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>
      
    </footer>
  );
}
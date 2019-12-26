import React from 'react';
import Mac from '../../images/laptop.svg';

export const Header = () => {
    return (
        <header className="header-content">
          <nav class="navbar navbar-expand-lg navbar-inverse">
            <a class="navbar-brand" href="http://pratikkumar.cf">
              <i aria-hidden="true" /> pratikkumar.cf
                </a>
          </nav>
          <div className="header-container">
          
          <pre className="header-text">
          <h2 className="header">Welcome to my website</h2>
            <p>
            I am a Web Developer with extensive experience of around 5 years. My expertise is to create<br/>
            websites and its components with Javascript.
            </p>
          </pre>
          <img src={Mac} className="mac-image"></img>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,245.3C840,277,960,299,1080,277.3C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
          </header>
    )
};

export default Header;
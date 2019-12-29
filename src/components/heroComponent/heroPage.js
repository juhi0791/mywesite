import React from 'react';
import Profile from '../../images/profile.jpg';


export default ({user, description}) => {
  return (
    <>
      <div className="content">
        <h1>
          {user.map( user => user.firstName)} <span className="secondary-name">{user.map(user => user.lastName)}!</span>
        </h1>
        <h2 className="sm-heading low-margin">About Me ...</h2>
        <div className="about-content">
            <img src={Profile} alt="" className="bio-image" />
          <div className="bio">
            <h2>Bio</h2>
            <p>
              {description.desc}
            </p>
          </div>
        </div>
        <div className="hero-icons">
          <a href="/">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="https://www.linkedin.com/in/pratik-kumar-b2314898/">
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="https://github.com/Pratik521992">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,245.3C840,277,960,299,1080,277.3C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </>
  );
};

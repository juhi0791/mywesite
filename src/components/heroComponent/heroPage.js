import React from 'react';
import Profile from '../../images/Pratik.png';


export default ({user, description}) => {
  return (
    <>
      <div className="content">
        <h1>
          {user.map( user => user.firstName)} <span className="secondary-name">{user.map(user => user.lastName)}!</span>
        </h1>
        <h2 className="sm-heading low-margin">About Me ...</h2>
        <div className="about-content">
          <div>
            <img src={Profile} alt="" className="bio-image" />
          </div>
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
    </>
  );
};

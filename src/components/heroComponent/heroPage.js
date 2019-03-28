import React from 'react';

export default () => {
  return (
    <>
      <div className="content">
        <h1>
          John <span className="secondary-name">Doe!</span>
        </h1>
        <h2 className="sm-heading low-margin">About Me ...</h2>
        <div className="about-content">
          <div className="profile-image">
            <img src="/dist/img/portrait.jpg" alt="" className="bio-image" />
          </div>
          <div className="bio">
            <h2>Bio</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, corporis nesciunt. At
              cum fugiat eaque amet mollitia aperiam porro eligendi debitis distinctio! Hic
              repudiandae quaerat harum, reiciendis ratione sint magni.{' '}
            </p>
          </div>
        </div>
        <div className="hero-icons">
          <a href="/">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="/">
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="/">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </div>
    </>
  );
};

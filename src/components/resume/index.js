import React from 'react';
import Resume from '../../images/Resume _pratik.doc';

export default () => {
  return (
    <>
      <div className="resume-wrapper ">
        <div className="resume-content ">
          <h1 data-aos="fade-left">Here is my resume </h1>
          <a href={Resume} className="btn btn-block text-uppercase footer-button" download="resume">Download</a>
        </div>
      </div>
    </>
  );
};

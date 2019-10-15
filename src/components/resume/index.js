import React from 'react';
import Resume from '../../images/pratik_kumar.pdf';

export default () => {
  return (
    <>
      <div className="resume-wrapper ">
        <div className="resume-content ">
          <h1 data-aos="fade-left">Here is my resume </h1>
          <a href={Resume} className="btn btn-block text-uppercase footer-button" download="pratik_kumar.pdf">Download</a>
        </div>
      </div>
    </>
  );
};

import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default () => {
  return (
    <>
      <div className="resume-wrapper ">
        <div className="resume-content ">
          <h1 data-aos="fade-left">Here is my resume </h1>
         
        </div>
      </div>
      <ProgressBar variant="warning" now={60} />
    </>
  );
};

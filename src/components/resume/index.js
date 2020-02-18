import React from 'react';
import Resume from '../../images/Juhi_CV.pdf';
import ResumeIMG from '../../images/CV.jpg';

export default () => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#0099ff" fill-opacity="1" d="M0,128L24,112C48,96,96,64,144,48C192,32,240,32,288,69.3C336,107,384,181,432,213.3C480,245,528,235,576,208C624,181,672,139,720,138.7C768,139,816,181,864,181.3C912,181,960,139,1008,106.7C1056,75,1104,53,1152,42.7C1200,32,1248,32,1296,74.7C1344,117,1392,203,1416,245.3L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.7" d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,218.7C672,203,768,149,864,138.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>  
      <div id="my-resume" className="resume-wrapper ">        
        <div className="resume-content ">
          <h2>My Resume </h2>
          <a href={Resume} className="btn btn-dark" download="Juhi_CV.pdf">Download</a>
        </div>
        <div className="resume-image">
          <img src={ResumeIMG} alt="CV" height="1000"/>
        </div>
      </div>
    </>
  );
};

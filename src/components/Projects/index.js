import React from 'react';

export default () => {
  const fill = 'rgb(243, 243, 51)';
  const skills = [
  {
    name: 'React',
    width: '90%',
    background: fill,
  },
  {
    name: 'Javascript',
    width: '80%',
    background: fill,
  },
  {
    name: 'HTML5',
    width: '80%',
    background: fill,
  },
  {
    name: 'CSS 3',
    width: '70%',
    background: fill,
  },
  {
    name: 'SASS',
    width: '70%',
    background: fill,
  },
  {
    name: 'Node JS',
    width: '60%',
    background: fill,
  },
]
  return (
    <>
      <div className="project-wrapper vertical-timeline-element--work">
        <div className="project-content ">
          <h1 data-aos="fade-out">My Skills </h1>
        </div>
        <div className="progress-content">
          <div>
            <div
              data-aos="flip-left"
              className="col-sm-12 col-md-2 text-center ml-3 mb-3 mb-md-0">
              <i className="fab fa-react fa-2x" aria-hidden="true" />
              <p>ReactJS</p>
            </div>
            <div className="progress">
              <div className="progress-bar" style={skills[0]}></div>
            </div>
          </div>
          <div>
            <div
              data-aos="flip-left"
              data-aos-delay="400"
              className="col-sm-12 col-md-2 text-center ml-3 mb-3 mb-md-0">
              <i class="fab fa-js-square fa-2x"></i>
              <p>JavaScript</p>
            </div>
            <div className="progress blue">
              <div className="progress-bar" style={skills[1]}></div>
            </div>
          </div>
          <div>
            <div
              data-aos="flip-left"
              data-aos-delay="800"
              className="col-sm-12 col-md-2 text-center ml-3 mb-3 mb-md-0">
              <i class="fab fa-html5 fa-2x"></i>
              <p>HTML 5</p>
            </div>
            <div className="progress yellow">
              <div className="progress-bar" style={skills[2]}></div>
            </div>
          </div>
          <div>
            <div
              data-aos="flip-left"
              data-aos-delay="400"
              className="col-sm-12 col-md-2 text-center ml-3 mb-3 mb-md-0">
              <i class="fab fa-css3-alt fa-2x"></i>
              <p>CSS3</p>
            </div>
            <div className="progress">
              <div className="progress-bar" style={skills[3]}></div>
            </div>
          </div>
          <div>
            <div data-aos="flip-left" className="col-sm-12 col-md-2 text-center ml-3 mb-3 mb-md-0">
              <i className="fab fa-sass fa-2x" aria-hidden="true" />
              <p>SASS</p>
            </div>
            <div className="progress red">
              <div className="progress-bar" style={skills[4]}></div>
            </div>
          </div>
          <div>
            <div
              data-aos="flip-left"
              data-aos-delay="800"
              className="col-sm-12 col-md-2 text-center ml-3 mb-3 mb-md-0">
              <i class="fab fa-node fa-2x"></i>
              <p>NodeJS</p>
            </div>
            <div className="progress red">
              <div className="progress-bar" style={skills[5]}></div>
            </div>
          </div>

        </div>
       </div>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L24,218.7C48,213,96,203,144,197.3C192,192,240,192,288,160C336,128,384,64,432,42.7C480,21,528,43,576,53.3C624,64,672,64,720,69.3C768,75,816,85,864,106.7C912,128,960,160,1008,154.7C1056,149,1104,107,1152,90.7C1200,75,1248,85,1296,128C1344,171,1392,245,1416,282.7L1440,320L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
    </>
  );
};

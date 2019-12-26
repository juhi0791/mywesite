import React from 'react';

export default () => {
  const style = {
    width: '50%',
    background: '#111',
  }
  return (
    <>
      <div className="project-wrapper vertical-timeline-element--work">
        <div className="project-content ">
          <h1 data-aos="fade-right">Projects </h1>
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
              <div className="progress-bar" style={style}></div>
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
              <div className="progress-bar" style={{ width: '20%' }}></div>
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
              <div className="progress-bar" style={{ width: '80%' }}></div>
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
              <div className="progress-bar" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div>
            <div data-aos="flip-left"  className="col-sm-12 col-md-2 text-center ml-3 mb-3 mb-md-0">
              <i className="fab fa-sass fa-2x" aria-hidden="true" />
              <p>SASS</p>
            </div>
            <div className="progress red">
              <div className="progress-bar" style={{ width: '30%' }}></div>
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
              <div className="progress-bar" style={{ width: '70%' }}></div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

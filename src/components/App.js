import React, { useEffect, useState } from 'react';
import '../sass/app.scss';
import HeroContent from './heroComponent/heroPage';
import Footer from './footer/footer';
import Project from './Projects';
import Projects from './Projects/projects';
import Resume from './resume';
import 'react-vertical-timeline-component/style.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = props => {

  const [userName] = useState([
    {firstName: "Pratik", lastName: "Kumar"},
  ]);

  const [description] = useState({
    desc: 'A Professionl | A Problem Solver | Coder | Front-End Developer @ ValueLabs'})

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  })

    return (
      <>
        <div className="full-background">
        <div className="full-content">
          <div className="container-fluid ">
            <div className="row">
              <nav class="navbar navbar-expand-lg navbar-inverse">
                <a class="navbar-brand" href="http://pratikkumar.cf">
                  <i aria-hidden="true" /> pratikkumar.cf
                </a>
              </nav>
            </div>
          </div>
          <HeroContent user={userName} description={description}/>
          <div className="middle-content pt-5 pb-5 mt-3">
            <div className="container">
              <div className="row">
                <div data-aos="flip-left" className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                  <i className="fab fa-react fa-2x" aria-hidden="true" />
                  <p>ReactJS</p>
                </div>
                <div data-aos="flip-left" className="col-sm-12 col-md-3 text-center">
                <i className="fab fa-sass fa-2x" aria-hidden="true" />
                  <p>SASS</p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-delay="400"
                  className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                  <i class="fab fa-css3-alt fa-2x"></i>
                  <p>CSS3</p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-delay="400"
                  className="col-sm-12 col-md-3 text-center">
                 <i class="fab fa-js-square fa-2x"></i>
                  <p>JavaScript</p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-delay="800"
                  className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                  <i class="fab fa-node fa-2x"></i>
                  <p>NodeJS</p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-delay="800"
                  className="col-sm-12 col-md-3 text-center">
                  <i class="fab fa-html5 fa-2x"></i>
                  <p>HTML 5</p>
                </div>
              </div>
            </div>
          </div>
          <Project data-aos="fade-up" />
          <Projects />
          <Resume />
          <Footer />
          </div>
        </div>
      </>
    );
}

export default App;

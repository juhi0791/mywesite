import React, { Component } from 'react';
import '../sass/app.scss';
import HeroContent from './heroComponent/heroPage';
import Footer from './footer/footer';
import Project from './Projects';
import Projects from './Projects/projects';
import Resume from './resume';
import 'react-vertical-timeline-component/style.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    return (
      <>
        <div className="full-content">
          <div className="container-fluid ">
            <div className="row">
              <nav class="navbar navbar-expand-lg navbar-inverse">
                <a class="navbar-brand" href="#">
                  <i aria-hidden="true" /> Brand
                </a>

                <button
                  class="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <i class="fa fa-angle-double-down" />
                </button>

                <div
                  class="navbar-collapse collapse justify-content-end"
                  id="navbarSupportedContent">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a href="#" class="nav-link ">
                        Sign In
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link ">
                        Register
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link ">
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <HeroContent />
          <div className="middle-content pt-5 pb-5 mt-3">
            <div className="container">
              <div className="row">
                <div data-aos="flip-left" className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                  <i className="fa fa-gamepad fa-2x" aria-hidden="true" />
                </div>
                <div data-aos="flip-left" className="col-sm-12 col-md-3 text-center">
                  <p>Branded Item 1</p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-delay="400"
                  className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                  <i className="fa fa-sitemap fa-2x" aria-hidden="true" />
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-delay="400"
                  className="col-sm-12 col-md-3 text-center">
                  <p>Branded Item 2</p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-delay="800"
                  className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                  <i className="fa fa-university fa-2x" aria-hidden="true" />
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-delay="800"
                  className="col-sm-12 col-md-3 text-center">
                  <p>Branded Item 3</p>
                </div>
              </div>
            </div>
          </div>
          <Project data-aos="fade-up" />
          <Projects />
          <Resume />
          <Footer />
        </div>
      </>
    );
  }
}
export default App;

import React, { useEffect, useState } from 'react';
import '../sass/app.scss';
import Header from './Header/header';
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
    { firstName: "Pratik", lastName: "Kumar" },
  ]);

  const [description] = useState({
    desc: 'A Professionl | A Problem Solver | Coder | Front-End Developer @ ValueLabs'
  })

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, [])

  return (
    <>
      <div className="full-background">
        <div className="full-content">
          <Header />
          <div>
          </div>
          <HeroContent user={userName} description={description} />
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

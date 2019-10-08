import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">Senior Software Developer
        <span>
        <i className="fab fa-react fa-2x" aria-hidden="true"  style={{marginLeft: 20}} />
        </span>
        </h3>
        
        <h4 className="vertical-timeline-element-subtitle">ValueLabs</h4>
        <p>
          Client - WebMD
        </p>
        <p>
          Project - Health coaching( 2019 - present)
        </p>
        <p>Front-End web developement | ReactJS development | Material UI desigining |Problem Solving | Agile SDLC</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">Senior Software Developer
        <span>
        <i className="fab fa-react fa-2x" aria-hidden="true"  style={{marginLeft: 20}} />
        </span>
        
        </h3>
        <h4 className="vertical-timeline-element-subtitle">ValueLabs</h4>
        <p>
          Client - WebMD
        </p>
        <p>
          Project - StepBattle( 2018 -2019)
        </p>
        <p>Front-End web developement | ReactJS development | Problem Solving | Agile SDLC</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">Project Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Wipro Technologies</h4>
        <p>
          Client - National Grid UK
        </p>
        <p>
          Project - ServiceNow Automation (2017 - 2018)
        </p>
        <p>Automation | Client meetings/calls | Innovation | App developement</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: 'rgb(233, 30, 99)',textAlign: "center", color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">
          Project Engineer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Wipro Technologies</h4>
        <p>
          Client - National Grid UK
        </p>
        <p>
          Project - Smart Metering portal(2016 - 2017)
        </p>
        <p className="vertical-timeline-element-subtitle">SAP Portal</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

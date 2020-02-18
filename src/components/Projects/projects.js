import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default () => {

  return (
    <>
    <h2 className="project-header">Projects Worked on</h2>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">Senior Associate Consultant
        <span>
        <i className="fab fa-react fa-2x" aria-hidden="true"  style={{marginLeft: 20}} />
        </span>
        </h3>
        
        <h4 className="vertical-timeline-element-subtitle">Infosys ltd</h4>
        <p>
          Client - Novartis
        </p>
        <p>
        NEO-DARWIN (IMPACT-RAVEX) INTEGRATION
        </p>
        <p>Developed Interfaces which involved updating of Study sites data from Impact to Ravex for all active studies set up in Ravex.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">Senior Associate Consultant
        
        <span>
        <i className="fab fa-react fa-2x" aria-hidden="true"  style={{marginLeft: 20}} />
        </span>
        
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Infosys ltd</h4>
        <p>
          Client - Novartis
        </p>
        <p>
        ASRF-PSP Integration
        </p>
        <p>Developed Real time project which sends data from NVS SalesForce to McKesson and vice-versa</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">Senior Associate Consultant</h3>
        <h4 className="vertical-timeline-element-subtitle">Infosys ltd</h4>
        <p>
        Client - Novartis
        </p>
        <p>
        IRMA and multiple Vendors Integration
        </p>
        <p>Developed various processes which involved integration of multiple vendors and IRMA based on the Feed Key Name</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: 'rgb(233, 30, 99)',textAlign: "center", color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">
        Senior Associate Consultant
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Infosys ltd</h4>
        <p>
        Client - Novartis
        </p>
        <p>
        PharmaCM to Horizon Integration
        </p>
        <p className="vertical-timeline-element-subtitle">Developed Interfaces  which involved data to be received by Boomi from PharmaCM and sent To Datahub and Horizon respectively</p>
      </VerticalTimelineElement>



      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: 'rgb(233, 30, 99)',textAlign: "center", color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">
        Senior Associate Consultant
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Infosys ltd</h4>
        <p>
        Client - Novartis
        </p>
        <p>
        Sandoz Version upgrade 7.3.1 to 7.5
        </p>
        <p className="vertical-timeline-element-subtitle"></p>
      </VerticalTimelineElement> 
      
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: 'rgb(233, 30, 99)',textAlign: "center", color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">
         Associate Consultant
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Wipro Technologies</h4>
        <p>
        Client - National Grid UK
        </p>
        <p>
        Jcaps to PI migration
        </p>
        <p className="vertical-timeline-element-subtitle"></p>
      </VerticalTimelineElement> 
      
      
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: 'rgb(233, 30, 99)',textAlign: "center", color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">
         Associate Consultant
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Wipro Technologies</h4>
        <p>
        Client - National Grid UK
        </p>
        <p>
        Picadilly
        </p>
        <p className="vertical-timeline-element-subtitle">Involved in interface level changes to enable seamless divestment of GD business from NationalGrid Portfolio</p>
      </VerticalTimelineElement> 
      
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: 'rgb(233, 30, 99)',textAlign: "center", color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">
         Associate Consultant
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Wipro Technologies</h4>
        <p>
        Client - National Grid UK
        </p>
        <p>
        Wami off-shore and Automation Projects
        </p>
        <p className="vertical-timeline-element-subtitle"></p>
      </VerticalTimelineElement>     </VerticalTimeline>
    </>
  );
};

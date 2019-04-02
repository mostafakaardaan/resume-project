import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import PropTypes from 'prop-types';
import './AboutSection.css';
import DownIcon from "../components/Downicon";
import { Link, Element } from "react-scroll";


/* class AboutSection extends Component {
  render() {
    
    return (
      <div className="divsecond">
      <Fullpage className="second">
        <h3>{data.sections[0].title}</h3>

        <div >
          {data.sections[0].items.map(p => {
            return <p>{p.content}</p>;
          })}
        </div>
      </Fullpage>
      <Link
          activeClass="active"
          to="third"
          spy={true}
          smooth={true}
          offset={50}
          duration={800}
          delay={0}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
      </div>
      
    );
  }
}

export default AboutSection; */

const AboutSection = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;
    
    return (
      <div className="divsecond"  style={{ backgroundColor: bgPrimary }}>
       <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <Fullpage className="second">
        <h3 style={{ color: colorPrimary }}>{data.sections[0].title}</h3>

        <div style={{ color: textPrimary,colorPrimary }}>
          {data.sections[0].items.map(p => {
            return <p>{p.content}</p>;
          })}
        </div>
      </Fullpage>
      <Link
          activeClass="active"
          to="third"
          spy={true}
          smooth={true}
          offset={50}
          duration={800}
          delay={0}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
      </div>
      
    );
  }
  AboutSection.contextTypes = {
    theme: PropTypes.any
  };

export default AboutSection;

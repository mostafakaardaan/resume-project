import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import Skillcard from "../components/Skillcard";
import './SkillSection.css';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import PropTypes from 'prop-types';
import UpIcon from "../components/Upicon";

/* class SkillSection extends Component {
 
  scrollToTop = () => {
    scroll.scrollToTop();
  };
 
  render() {
    return (
      <div className="divthird">
      <Fullpage className="third">
        <h3>{data.sections[1].title}</h3>

        <div className="cards-wrapper">
          {data.sections[1].items.map(eachskill => {
            return <Skillcard skill={eachskill} />;
          })}
        </div>
      </Fullpage>
             <a onClick={this.scrollToTop}><UpIcon icon={data.icons.up} /></a>
      </div>
    );
  }
}

export default SkillSection; */


const SkillSection = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;
  
    
  

    return (
      
      <div className="divthird" style={{ backgroundColor: bgPrimary }}>
      <Fullpage className="third">
        <h3 style={{ color: colorPrimary }}>{data.sections[1].title}</h3>

        <div className="cards-wrapper">
        <style jsx="true">
            {`
              .card {
                background-color: ${colorPrimary};
                color: ${textAlternate};
              }
              .card a {
                color: ${textAlternate};
              }
                        `}
          </style>
          {data.sections[1].items.map(eachskill => {
            return <Skillcard skill={eachskill} />;
          })}
        </div>
      </Fullpage>
             <a onClick={scroll.scrollToTop}><UpIcon icon={data.icons.up} /></a>
      </div>
    );
  }
  SkillSection.contextTypes = {
    theme: PropTypes.any
  };

export default SkillSection;

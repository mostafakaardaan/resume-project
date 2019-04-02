import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import PropTypes from 'prop-types';
import { SocialIcon } from "react-social-icons";
import "./TitlesAndIcons.css";
import DownIcon from "../components/Downicon";
import { Link, Element } from "react-scroll";

/* class TitlesAndIcons extends Component {


  render() {
    return (
     
      <div className="divfirst">
         
        <Fullpage className="first">
      

          <h1>
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>

          <div className="icons-wrapper">
            {Object.keys(data.links).map(keys => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[keys]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="second"
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

export default TitlesAndIcons;
 */

const TitlesAndIcons = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;
  /*  state = {
     color: "white"
   };
 
   changeColor = () => {
     this.setState({
       color: this.state.color === "white" ? "yellow" : "white"
     });
   }; */
 
 
     return (
      
       <div className="divfirst" style={{ backgroundColor: bgPrimary }}>
          
         <Fullpage className="first" >
           {/* <h1
             className="title"
             style={{
               color: this.state.color
             }}
             onMouseOver={() => {
               this.changeColor();
             }}
             onMouseLeave={() => {
               this.changeColor();
             }}
           > */}
 
           <h1 style={{ color: colorPrimary }}>
             {data.title}
           </h1>
           <div style={{ color: colorPrimary }}>
             <h2>{data.subtitle}</h2>
           </div>
 
           <div className="icons-wrapper" >
             {Object.keys(data.links).map(keys => {
               return (
                 <div className="icon">
                   <SocialIcon  url={data.links[keys]} target="_blank" rel="noopener noreferrer"  />
                 </div>
               );
             })}
           </div>
         </Fullpage>
         <Link
           activeClass="active"
           to="second"
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
 
   TitlesAndIcons.contextTypes = {
    theme: PropTypes.any
  };
 export default TitlesAndIcons;
 
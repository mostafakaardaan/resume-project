import React, { Component } from "react";
import "./Navbar.css";
import data from "../data.json";
import PropTypes from 'prop-types';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ColorIcon from "../components/Coloricon";


class NavBar extends Component {
 
  constructor(props) {
    super(props);
    
    this.state = {
      isSticky: false
    };
  }

  

   
  
  render() {
    const {
      theme: { colorPrimary, bgPrimary, navAlpha },
      switchTheme
    } = this.context;

    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky
      ? { backgroundColor: navAlpha, color: colorPrimary }
      : { backgroundColor: bgPrimary, color: colorPrimary };

    return (
      
        <nav id="NavBar" >
        <ul class="NavUl" >
          <li >
            <Link style={{ color: colorPrimary }}
              activeClass="active"
              to="divsecond"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
              delay={0}
            >
              About
            </Link>
          </li>
          <li>
            <Link style={{ color: colorPrimary }}
              activeClass="active"
              to="divthird"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
              delay={0}
            >
              Skills
            </Link>
          </li>

          <li>
          
            
            
            <a onClick={(e) => switchTheme()}><ColorIcon icon={data.icons.color}/></a>
              
            
          </li>
        </ul>
      </nav>
    );
  } }
  

  NavBar.contextTypes = {
    theme: PropTypes.any,
    switchTheme: PropTypes.func
  };
 
export default NavBar; 



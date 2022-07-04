import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Welcome.css'
import './Neon.css';

class Welcome extends React.Component {
  
    render(): React.ReactNode {
      return (
        <div className='Slide'>
          <div className="WelcomeSlide__bg-container">
          <div className='WelcomeSlide__Intro'>
            <div><NeonWelcome/></div>
            <div className='about'>
              Nazywam sie Kacper Borys i jestem aspirującym Front-End Web Developerem.
              <div className="WelcomeSlide__SVG">
              <a href="https://github.com/fxgrdn"><FontAwesomeIcon icon={faGithub} size='2x' color="white"/></a>
              <a href="https://www.linkedin.com/in/fxgrdn/"><FontAwesomeIcon icon={faLinkedin} size='2x' color="white"/></a>
              </div>
            </div>
            </div>
          </div>
        </div>
      )
    } 
  }
  
  class NeonWelcome extends React.Component {

    componentDidMount(){
    }
    randomFlick(ele: EventTarget){
      const ms = Math.floor(Math.random() * (2000) + 2000);
      if(ele instanceof HTMLDivElement){
        ele.style.setProperty('--interval', `${ms}ms`)
      }
    }

    render(): React.ReactNode {
      return (
        <div className='neon' onAnimationIteration={(e) => {this.randomFlick(e.target)}}>
         WELCOME!
        </div>
      )
    }
  }


export default Welcome
import React from "react";
import './WelcomeSlide.css'
import './Neon.css';

class WelcomeSlide extends React.Component {
  
    render(): React.ReactNode {
      return (
        <div className='WelcomeSlide'>
          <div className="WelcomeSlide__bg-container">
          <div className='WelcomeSlide__Intro'>
            <div><NeonWelcome/></div>
            <div className='about'>
              Nazywam sie Kacper Borys i jestem aspirującym Front-End Web Developerem.
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


export default WelcomeSlide
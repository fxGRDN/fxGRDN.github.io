import React from 'react';
import './App.css';
import WelcomeSlide from './Components/Slides/WelcomeSlide';

class App extends React.Component {
  constructor(props: React.Component){
    super(props)
    this.state = {
      scrollValue: 0
    }
  }
  render() {
    return (
      <div className='App'>
        <WelcomeSlide/>
        </div>
    )
  }

}



export default App;
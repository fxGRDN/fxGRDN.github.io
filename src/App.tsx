import React from 'react';
import './App.css';
import Welcome from './Components/Slides/Welcome';
import Portfolio from './Components/Slides/Portfolio'
import './Components/Slides/Slides.css'


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
        <Welcome/>
        <Portfolio/>
        </div>
    )
  }

}



export default App;
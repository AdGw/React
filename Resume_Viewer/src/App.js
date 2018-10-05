import React, { Component } from 'react';
import Header from './components/header'
import Contact from './components/contact'
import Footer from './components/footer'
import Portfolio from './components/portfolio'
import About from './components/about'
import Resume from './components/resume'
import Testimonials from './components/testimonials'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;

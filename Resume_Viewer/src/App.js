import React, { Component } from 'react';
import $ from 'jquery';
import Header from './components/header'
import Contact from './components/contact'
import Footer from './components/footer'
import Portfolio from './components/portfolio'
import About from './components/about'
import Resume from './components/resume'
import Testimonials from './components/testimonials'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      resumeData:{}
    }
  }

  getResumeData(){
    $.ajax({
      url: 'http://localhost:3000/resumeData.json',
      dataType: 'json', 
      cache: false,
      success: function(data){
        this.setState({
          resumeData: data
        })
      }.bind(this),
      error: function(xhr,status,err){
        console.log(err);
      } 
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumeData)
    return (
      <div className="App">
        <Header data = {this.state.resumeData.main}/>
        <About data = {this.state.resumeData.main}/>
        <Resume data = {this.state.resumeData.resume}/>
        <Portfolio data = {this.state.resumeData.portfolio}/>
        <Testimonials data = {this.state.resumeData.testemonials}/>
        <Contact data = {this.state.resumeData.main}/>
        <Footer/>
      </div>
    );
  }
}

export default App;

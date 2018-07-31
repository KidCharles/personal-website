import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css'
import '../reset.css';
import github from '../assets/github-transparent.png';
import linkedin from '../assets/Linkedin-transparent.png';
import r from '../assets/R.png';
import rd from '../assets/RD.png';
import pg from '../assets/PG.png';
import node from '../assets/nodejs-512.png';
import js from '../assets/JS.png';
import html from '../assets/HTML.png';
import css from '../assets/CSS.png';
import pic from '../assets/pic.jpg';

class Home extends Component {
  constructor() {
    super();
    
  }
  handleScrollToElement(e) {
    const tesNode = ReactDOM.findDOMNode(this.refs[e])
    window.scrollTo({ top: tesNode.offsetTop, behavior: 'smooth' });


  }
  
  render() {
    return (
      <div className="App">
        <nav className='nav'>
          <p className='nav-option text' onClick={() => this.handleScrollToElement('home')}>Home</p>
          <p className='nav-option text' onClick={() => this.handleScrollToElement('skills')}>Skills</p>
          <p className='nav-option text' onClick={() => this.handleScrollToElement('projects') }>Projects</p>
          <p className='nav-option text' onClick={() => this.handleScrollToElement('contact')}>Contact</p>
        </nav>


        <div className='section' id='home' ref='home'>
          <h1 className='label text'>NATHAN <br />STONE.</h1>
          <p className='title text' >WEB DEVELOPER</p>
          <div className='intro'>
            <p className='text about'>Hi! I'm a Web Developer specializing in React and Node. I am passionate about solving problems, learning new technologies, and improving myself every day! If I'm not working behind a computer, you can find me discovering new food, relaxing with my wife, or playing my guitar.</p>
          </div>
        </div>
        <div className='section' id='skills' ref='skills'>
          <h1 className='label text skills'>Skills</h1>
          <div className='image-container'>
            <img src={html} alt='' className='skill-icon' />
            <img src={css} alt='' className='skill-icon' />
            <img src={js} alt='' className='skill-icon' />
            <img src={r} alt='' className='skill-icon' />
            <img src={rd} alt='' className='skill-icon' />
            <img src={node} alt='' className='skill-icon' />
            <img src={pg} alt='' className='skill-icon' />

            <p className='text skillz'>HTML   |  CSS   |  JAVASCRIPT   |  REACT   |  REDUX   |  NODEJS   |  POSTGRESQL</p>

          </div>
        </div>
        <div className='section' id='projects' ref='projects'>
        <h1 className='label text'>Projects</h1>
        <nav className='project-container'>
            <Link to='/studio'>
            <div className='project text'>Studio Supplier</div> 
            </Link>
            <Link to='/kwizz'>
            <div className='project text'>Kwizz!</div> 
            </Link>
        </nav> 
        </div> 

        <div className='section' id='contact' ref='contact'>
          <h1 className='label text'>Contact</h1>
         
          <div className='contact-info'>

            <a className='contact-link' href='https://www.linkedin.com/in/nathanstone96/' target='_blank' rel="noopener noreferrer">
              <img className='footer-img' src={linkedin} alt='Linkedin' height='45px' />
            </a>

            <a className='contact-link' href='https://github.com/nastone' target='_blank' rel="noopener noreferrer">
              <img className='footer-img' src={github} alt='Github' height='45px' />
            </a>
            <p className='text' id='email'>nathanstone3000@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
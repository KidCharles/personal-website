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
import charles from '../assets/ch-sign-round.png';

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
          <h1 className='label text' id='ch'>ch.</h1>
          <p className='text charles' >CHARLES HATCH</p>
          <p className='title text' >WEB DEVELOPER | GRAPHIC DESIGNER</p>
          <div className='intro'>
            <p className='text about'>Hi, My name is Charles Hatch. I'm a Web Developer with a love for Design. I'm passionate about learning how to create things. I believe in always improving form and function.
            <br/>
            <br/>
             I fell in love with Web Development after years of a career in Graphic Design. It felt natural to move from designing a brand for a company to builing a brand for a company.  When I'm not coding, I enjoy travelling, filming, photography, Djing music, drawing, painting, and telling stories. I love to create. 
             <br/>
            <br/>
             I'm always looking for another project to throw myself into and would love to work and learn with you. </p>
          </div>
        </div>
        <div className='section' id='skills' ref='skills'>
          <h1 className='label text skills'>skills</h1>
          <div className='image-container'>
            <img src={html} alt='' className='skill-icon' />
            <img src={css} alt='' className='skill-icon' />
            <img src={js} alt='' className='skill-icon' />
            <img src={r} alt='' className='skill-icon' />
            <img src={rd} alt='' className='skill-icon' />
            <img src={node} alt='' className='skill-icon' />
            <img src={pg} alt='' className='skill-icon' />
            <img src='https://cdn.iconscout.com/public/images/icon/free/png-512/adobe-photoshop-logo-3cdb488df09734a8-512x512.png' alt='' className='skill-icon' />
            <img src='https://cdn.iconscout.com/public/images/icon/free/png-512/adobe-illustrator-cc-creative-cloud-3db20cd73026f13f-512x512.png' alt='' className='skill-icon' />

            <p className='text skillz'>HTML   |  CSS   |  JAVASCRIPT   |  REACT   |  REDUX   |  NODEJS   |  POSTGRESQL  |  PHOTOSHOP  |  ILLUSTRATOR</p>
          </div>

        </div>
        <div className='section' id='projects' ref='projects'>
        <h1 className='label text'>projects</h1>
        <nav className='project-container'>
            <Link to='/studio'>
            <div className='project text'>Wayfaring World</div> 
            </Link>
            <Link to='/kwizz'>
            <div className='project text'>Kwizz!</div> 
            </Link>
        </nav> 
        </div> 

        <div className='section' id='contact' ref='contact'>
          <h1 className='label text' id='contact-word'>contact</h1>
          <img className='pic-me' src={charles} alt='charles'/>

          <div className='contact-info'>

            <a className='contact-link' href='https://www.linkedin.com/in/charlesghatch' target='_blank' rel="noopener noreferrer">
              <img className='footer-img' src={linkedin} alt='Linkedin' height='45px' />
            </a>

            <a className='contact-link' href='https://github.com/KidCharles' target='_blank' rel="noopener noreferrer">
              <img className='footer-img' src={github} alt='Github' height='45px' />
            </a>
            <p className='text' id='email'>charlesghatch@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
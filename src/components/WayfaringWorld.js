import React, { Component } from 'react';
// import homePage from '../assets/HomePage.png';
import {Link} from 'react-router-dom';

export default class  extends Component {
    render() {
        return (
            <div className='App'>
                <div className='projects-container'>
                <h1 className='label text'>Wayfaring World.</h1>
                <p className='text about' id='project-info'> <br/> <br/><a href='https://github.com/KidCharles/ww-personal-project'>Github Repo</a></p>
                   {/* <img className='project-preview' src={} alt='home page' /> */}
                   <p className='text about' >Technologies Used: React, Redux, Node, Express, Chart.js, Stripe.</p>
                    <a className='text' id='margin-link' href='https://www.wayfaringworld.net/'target='_blank' rel="noopener noreferrer">Click here to see the site!</a>
                    <Link to='/' className='text'>Home</Link>
                </div> 
            </div> 
        )
    }
}
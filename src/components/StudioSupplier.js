import React, { Component } from 'react';
import homePage from '../assets/HomePage.png'

export default class  extends Component {
    render() {
        return (
            <div className='App'>
                <div className='projects-container'>
                <h1 className='label text'>Studio Supplier.</h1>
                <p className='text about' id='project-info'>Throughout my time at Visa, I helped people become successful e-commerce merchants. So, for my first project at DevMountain, I decided to make my own e-commerce website from scratch. I wanted to challenge myself to learn how to integrate to an unfamiliar payment gateway and learn two new technologies on top of that</p>
                   <img className='project-preview' src={homePage} alt='home page' />
                   <p className='text about' >Technologies Used: React, Redux, Node, Express, Chart.js, Stripe, and Nodemailer.</p>
                    <a className='text' id='margin-link' href='https://personal.natestone.info'target='_blank' rel="noopener noreferrer">Click here to see the site!</a>
                </div> 
            </div> 
        )
    }
}
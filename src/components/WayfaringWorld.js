import React, { Component } from 'react';
import ww1 from '../assets/ww1.png';
import ww2 from '../assets/ww2.png';
import {Link} from 'react-router-dom';

export default class  extends Component {
    render() {
        return (
            <div className='App'>
                <div className='projects-container'>
                <h1 className='label text'>Wayfaring World.</h1>
                <p className='text about' id='project-info'>WayfaringWorld.net - Personally Developed 
                <br/><br/>
REACT | REDUX | NODE | JAVASCRIPT | POSTGRESQL | HTML | CSS |  AUTH0 | STRIPE | CLOUDINARY | ADOBE SUITE
<br/><br/>
I worked with a social media influencer who wanted a website to take his business to the next level. The main objective was to make an e-commerce sight where they could sell their merchandise.

I designed all brand assets, logos and video content in Adobe Illustrator, Photoshop, Adobe Premiere and Adobe After Effects. 

I utilized React to create the front-end framework of WayfaringWorld. With the use of React, Redux, and Javascript I was able to create a fully functional e-commerce sight, where people could login, add products from a store to a cart, and purchase those items. 

Through the implementation of Node.js and Express on the back-end for handling all of the RESTful API requests and connecting to cloud-based PostgresSql databases so that product, and user information could be stored. 

WayfaringWorld also offered Admin view and access to certain pages of the site. This was done by using the Auth0 plan and Private routing. Through the use of Private routes, if a logged in user was an admin, they could update, change or add products for purchase to the store.

By accessing the Instagram API, we were able to get and display up to date photos from the WayfaringWorld instagram 

User experience is as high priority as functionality for me while designing a website. The design and look of the website was accomplished through the HTML, CSS, and the ADOBE SUITE. I wanted the branding to feel thought out and complete which was accomplished with the ability to edit and create my own button, and icons in ADOBE ILLUSTRATOR. The little touches and over all sleek and easy to navigate appearance of the site was also offered on mobile devices with the the use of media queries.

                <br/><br/><a href='https://github.com/KidCharles/ww-personal-project'>Github Repo</a>
                <br/><br/><a href='https://Wafaringworld.net/'>Wayfaring World life site</a></p>
                <p className='text about' id='project-info'> <br/> <br/><a href='https://github.com/KidCharles/ww-personal-project'>Github Repo</a></p>
                   <img className='project-preview' src={ww1} alt='home page' />
                   <img className='project-preview' src={ww2} alt='home page' />
                   <p className='text about' >Technologies Used: React, Redux, Node, Express, Stripe.</p>
                    <a className='text' id='margin-link' href='https://www.wayfaringworld.net/'target='_blank' rel="noopener noreferrer">Click here to see the site!</a>
                    <Link to='/' className='text'>Home</Link>
                </div> 
            </div> 
        )
    }
}
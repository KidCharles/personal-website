import React, { Component } from 'react';
import homePage from '../assets/KWIZZ.png'

export default class  extends Component {
    render() {
        return (
            <div className='App'>
                <div className='projects-container'>
                <h1 className='label text'>Kwizz!</h1>
                <p className='text about' id='project-info'>Currently working on a Kahoot.it clone. Users will be able to log in, create quiz games and host them live. I wanted to challenge myself to learn how to use websockets so multiple people can play a game and their results are shared on a single screen. It will be live August 3rd!</p>
                   <img className='project-preview' src={homePage} alt='home page' />
                   <p className='text about' >Technologies used: React, Redux, Node, Express, Chart.js, Socket.io, Auth0</p>
                    
                </div> 
            </div> 
        )
    }
}
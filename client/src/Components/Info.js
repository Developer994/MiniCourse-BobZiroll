import React from 'react';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

export default function Info() {
  return (
    <div className='infoContainer'>
      <h1 className='h1Tag'></h1>
      <h2 className='personInfo'>
        <ol>
          <li className='name'>User 1955</li>
          <li className='occupation'>Full-Stack Developer</li>
          <li className='email'>user_1955@gmail.com</li>
        </ol>
      </h2>
      <div className='buttons'>
        <button type='button' className='btn1'>
          <div className='btn1Div'>
            <i class='fa-solid fa-envelope'></i>
            <span className='emailText'> Email</span>
          </div>
        </button>
        <button className='btn2'>
          <div className='btn2Div'>
            <i class='fa-brands fa-linkedin'></i>
            <span className='linkedinText'>LinkedIn</span>
          </div>
        </button>
      </div>{' '}
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

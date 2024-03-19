import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './howtowatch.css';
import {Link} from 'react-router-dom';



export default function Howtowatch() {
  return (

    <>
      <div className='container-T'>
        <video className='video-background' autoPlay loop muted>
          <source src={process.env.PUBLIC_URL + `/video-background.mp4`} type="video/mp4" />
        </video>
        <div className='image-jon'>
          <img src={process.env.PUBLIC_URL + `/img-jones.png`} alt="jon jones" />
        </div>
        <div className='text-random'>
          <p>Unleash the fury of every champion, feel the intensity of every submission, and revel in the electrifying knockouts! <br /> <br />

            Ignite your combat sports passion with our unrivaled 24/7 platform, showcasing the absolute best of Jon "Bones" Jones, and an avalanche of MORE action-packed content. <br /><br />

            Dive into Fight Night main cards at your command, and immerse yourself in exclusive original series and shows. </p>
          <input type="button" value="Sign up today" className='signup-btn' />
        </div>
      </div>
      <div className='container-two'>
        <h2 className='title-plan' >Choose your plan now </h2>
        <div className='Cards'>
          <div className='monthly-card'>
            <h2>MONTHLY PASS</h2>
            <h1>9,99$</h1>
            <p>Access to UFC events, the entire UFC Fight Library, <br /> live martial arts events from around the world and exclusive original series and shows <br /></p>
            <ul>
              <li>Over 1,000 hours of live combat sports action from around the globe </li>
              <li>Monthly subscription, cancel anytime</li>
              <li>early access to tickets</li>
            </ul>
            <Link to='/PaymentPage'>
            <input type="button" value="select" className='select-btn' />
            </Link>
          </div>
          <div className='Annual-card'>
            <h2>ANNUAL PASS</h2>
            <h1>95,99$</h1>
            <p>Access to UFC events, the entire UFC Fight Library, <br /> live martial arts events from around the world and exclusive original series and shows <br /></p>
            <ul>
              <li>Over 1,000 hours of live combat sports action from around the globe </li>
              <li>Save 20% when compared to the monthly subscription. Recurring payment <br /> of $95.88 every year</li>
            </ul>
            <Link to='/PaymentPage'>
            <input type="button" value="select" className='select-btn' />
            </Link>
          </div>
        </div>
        <div className='container-three'>
          <div className='container-text-1'>
            <h3>LIVE EVENTS</h3>
            <p>Every week is fight week with UFC Fight Pass! <br /> Watch the best and most exciting combat sports <br /> events from around the world from Lethwei to MMA.</p>
          </div>
          <div className='container-text-2'>
            <h3>ORIGINALS</h3>
            <p>Best-in-class original programming providing <br /> the most compelling storytelling and memorable <br /> moments across all of combat sports.</p>
          </div>
          <div className='container-text-3'>
            <h3>FIGHT LIBRARY</h3>
            <p>Exclusive access to the world's largest MMA  <br />library, including legendary fights and events <br />from UFC, PRIDE, Invicta FC, Strikeforce, and WEC.</p>
          </div>
        </div>
        <div className='container-four'>

        </div>




      </div>
    </>





  )
}

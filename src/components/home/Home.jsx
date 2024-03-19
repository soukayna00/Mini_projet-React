import React, { useState, useEffect } from 'react';
import "./home.css"
import UfcData from './Test'
import Results from './Results'
import LatestEv from './LatestEv'
import VideoPlayer from './VideoPlayer';




export default function Home() {
    const [date, setDate] = useState(new Date());
   
    useEffect(() => {
       const timer = setInterval(() => {
         setDate(new Date());
       }, 1000);
   
       return () => {
         clearInterval(timer);
       };
    }, []);
   
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  return (
    <div>
       <section className='home'>
        <div className='seContainer container'>

          <div className='homeText'>
            <h2 className='subTitles'>Fight Night: Song VS Gutierrez </h2>
            <h1 className='title'>
              Main Event Spotlight
            </h1>
            
            <h3 className='subTitle'>
              
              Take A Closer Look At The Bantamweight Main Event Happening This Saturday
            </h3>

            <button className='btn'>
              <a href="#">Read more</a>
            </button>
            <button className='btn'>
              <a href="#">Buy Tickets</a>
            </button>
          </div>
          <div className="homeCard grid">
            <div className='magic'>
              <a href=""></a>
            </div>
            <div className="digital-clock">
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
    </div>
          </div>
        </div>
       </section>
       <br />
       <section className='popular section container'>
        <div className='secContainer'>
          <div className="secHeader">
            <div className="textDiv">
              <h2 className='secTitle'>
                TRENDING NOW
                
              </h2>
                <br />
                <UfcData/>
                <br />
                <br />
                <VideoPlayer/>
                <br />
                <br />
              <h2 className='secTitle'>
                BEST EVENTS
              </h2>
                <br />
                <LatestEv/>
            </div>
          </div>
        </div>
       </section>
    </div>
  )
}

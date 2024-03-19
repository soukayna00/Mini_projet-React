import React from 'react'
import Moments from '../Assets/Moments.mp4'
import './LatestEv.css'

export default function LatestEv() {
  return (
    <div>
      <div className='videoCard container'>
        <div className='cardContent grid'>
            <div className='cardText'>
                <h2>No Time To Waste </h2>
                <p>Song Yadong Hopes A big Performance Puts Him closer to boxing Gold</p>
            </div>
            <div className='cardVideo'>
                <video src={Moments} autoPlay loop muted type='video/mp4'></video>
            </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import './Profile.css'
import im from '../Assets/alexandre.png'
import cv from '../Assets/cv.PNG'
import cvv from '../Assets/cvv.PNG'
import cvvv from '../Assets/cvvv.PNG'
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function ProfileAthletes() {
  const percentage = 20;
  return (
    <div>
      <div class="con">
        <div class="text">
          <h1>ALEXANDRE PANTOJA</h1>
          <h3>Lightweight Division</h3>
          <p>26-5-0 (W-L-D)</p>
        </div>
        <div class="image">
          <img src={im} alt="Nariman Abbassov" />
        </div>
      </div>
      <div className='bare'></div>
      <div className='st'>
        <h2>STATS</h2>
        <div className='state' >
          <div className='ath'>
            <img src={cv} alt="#" />
          </div>
          <div className='ath'>
            <img src={cvv} alt="#" />
          </div>
          <div className='ath'>
            <img src={cvvv} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

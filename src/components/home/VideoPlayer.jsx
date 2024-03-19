import React from 'react'
import ml from '../Assets/Getty.jpg'
import mn from '../Assets/yes.webp'
import gl from '../Assets/gl.jpg'
import './VideoPlayer.css'

export default function MyVideoPlayer() {
    
    
  return (
    <div className='vid'>
      <div className='cont'>
        <img src={ml} alt="#" className='imgg'/>
        <strong>ALEXANDRE PANTOJA'S FIVE FAVORITE FIGHTS</strong>
        <p>Flyweight Champion Alexandre Pantoja Talks About His Favorite</p>
        <button className='watch'><a href="https://www.youtube.com/watch?v=yIzB05SC4QY">Watch the video</a></button>
      </div>
      <div className='cont'>
        <img src={mn} alt="#" className='imgg'/>
        <strong>Khamzat Chimaev vs Paulo Costa (CPUvsCPU) Full Fight</strong>
        <p>Le samedi 21 octobre au «Etihad Arena» au Abu Dhabi, Emirats Arabes Unis </p>
        <button className='watch'><a href="https://www.youtube.com/watch?v=En43T37ED-w">Watch the video</a></button>
      </div>
      <div className='cont'>
        <img src={gl} alt="#" className='imgg'/>
        <strong>Endy Semeleer vs. Murthel Groenhart (Welterweight Title Bout) - Full Fight</strong>
        <p>Flyweight Champion Alexandre Pantoja Talks About His Favorite</p>
        <button className=' watch'><a href="https://www.youtube.com/watch?v=T_cmcF8WD-0">Watch the video</a></button>
      </div>
    </div>
  )
}

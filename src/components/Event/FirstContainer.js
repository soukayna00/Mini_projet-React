import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FirstConatiner.css'
import { Link } from 'react-router-dom';

export default function FirstContainer() {
  return (
    <div className='Container'>
        <div className='container-ttwo'>
          <h1 className='hh'>Battle of the Titans: <br /> Song <br /> vs <br />  Gutierrez  <br />Set to Ignite the Octagon!  <br /><span className='sp'>Sun, Dec 10 / 4:00 AM 10/12/2023 UTC+1
              UFC APEX, Las Vegas United States</span></h1>
             <Link to='/howtowatch'>
            <input type="button" className='Howtowatch' value="How to watch" />
            </Link>
          </div>
           
    </div>
  )
}

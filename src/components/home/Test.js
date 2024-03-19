import React, { useState, useEffect } from 'react';
import { BsArrowRightShort } from "react-icons/bs";
import './Test.css'
import axios from 'axios';
import { Link } from 'react-router-dom'

const UfcData = () => {
    const [scrapedData, setScrapedData] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
                const response = await axios.get('/scrapedData.json');
                console.log('Données JSON reçues :', response.data);
                setScrapedData(response.data);
              } catch (error) {
                console.error('Erreur lors de la récupération des données JSON :', error);
              }
            };
      
          fetchData();
        }, []); 


    return (
        <div>
            <div>
            <ul style={{listStyle: 'none', padding: '0'
                    , display: 'flex', flexWrap: 'wrap'
                    , justifyContent: 'space-around' 
                }}>
                {scrapedData.map((item, index) => (
                    <li key={index} className='card' 
                        style={{border: '1px solid #ddd', padding: '10px'
                            , margin: '15px', width: '320px',height: '250px'
                            , borderRadius: '0.5rem',
                            background: `url(${item.thumbnailSrc.startsWith('/') ? `https://www.ufc.com${item.thumbnailSrc}` : item.thumbnailSrc})`,
                            backgroundSize: 'cover', backgroundPosition: 'centre'
                            ,backgroundRepeat: 'no-repeat', color: 'white',
                            }}>
                        <strong  className='svg'>{item.headline}</strong>
                        <div className='content ' >
                        <strong>{item.headline}</strong>
                        <p>Category: {item.category}</p>
                        <p>Hours Ago: {item.hoursAgo}</p>
                        <BsArrowRightShort className='icon'/>
                        </div>
                        
                        
                    </li>
                ))}
            </ul>
            <button className='btnl' >
                <Link to="/UfcDatatwo">View More</Link>
              </button>
        </div>
        </div>
    );
};

export default UfcData;

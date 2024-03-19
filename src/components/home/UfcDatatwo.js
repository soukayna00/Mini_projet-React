import React, { useState, useEffect } from 'react';
import './UfcDatatwo.css'
import axios from 'axios';


const UfcDatatwo = () => {
    const [scrapedDatatwo, setScrapedDatatwo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/scrapedData.json');
                console.log('Données JSON reçues :', response.data);
                setScrapedDatatwo(response.data);
              } catch (error) {
                console.error('Erreur lors de la récupération des données JSON :', error);
              }
            };

        fetchData(); 

    }, []); 

    return (
        <div className='ufc'>
            <section  className='homem'>
            <div className='seContainer container'>

          <div className='homeText'>
            <h2 className='subTitles'>Boxing Fight Night:  </h2>
            <h1 className='title'>
            Regali VS Pena
            </h1>
            
            <h3 className='subTitle'>
              
              Take A Closer Look At The Bantamweight Main Event Happening This Saturday
            </h3>
            </div>
            </div>
            </section>

            <h1 className='secondh1'>UFC Trending Data</h1>
            <ul className="scraped-list" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '1rem 0', borderRadius: '1rem' }}>
            {scrapedDatatwo.map((item, index) => (
    <li key={index} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', width: '300px', borderRadius: '0.5rem' }} className="scraped-item">
        <strong>{item.headline}</strong>
        <p>Category: {item.category}</p>
        <p>Hours Ago: {item.hoursAgo}</p>
        {item.thumbnailSrc && (
            <img src={item.thumbnailSrc.startsWith('/') ? `https://www.ufc.com${item.thumbnailSrc}` : item.thumbnailSrc}/>
        )}
    </li>
))}
            </ul>
        </div>
    );
};

export default UfcDatatwo;

// CardHolder.js
import React, { useState, useEffect } from 'react';
import CardEvent from './CardEvent';
import FirstContainer from './FirstContainer';
import './CardHolder.css';
import './CardEvent.css'
import axios from 'axios';

const CardHolder = () => {
    const [scrapedData, setScrapedData] = useState([]);
    const [eventDateChecker, setEventChecker] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/scrapedDataUfc.json');
                console.log('Données JSON reçues :', response.data);
                setScrapedData(response.data);
              } catch (error) {
                console.error('Erreur lors de la récupération des données JSON :', error);
              }
            };
        fetchData();
    }, []);

    const handleEventSwitch = (isUpcoming) => {
        setEventChecker(isUpcoming);
    };

  

    const filteredEvents = eventDateChecker ? scrapedData.filter(item => new Date(item.time) > new Date()) : scrapedData.filter(item => new Date(item.time) <= new Date());

    return (
        <div>
            <FirstContainer />
            <div className='buttons'>
                <button className='UP' onClick={() => handleEventSwitch(true)}>Upcoming</button>
                <button className='past' onClick={() => handleEventSwitch(false)}>Past</button>
            </div>
            {filteredEvents.map((item, index) => (
                <CardEvent
                    key={index}
                    id={item.id}
                    eventName={item.eventName}
                    time={item.time}
                    location={item.location}
                    pictures={item.pictures}
                    cardType={item.cardType}
                    index={item.index}
                 
                />
            ))}
        </div>
    );
};

export default CardHolder;



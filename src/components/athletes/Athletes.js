import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Athletes.css';
import { Link } from 'react-router-dom';

const YourComponent = () => {
  const [fighters, setFighters] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/scrapedDataAtheletes.json');
        console.log('Données JSON reçues :', response.data);
        setFighters(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données JSON :', error);
      }
    };
  
    fetchData();
  }, []);// Le tableau de dépendances vide garantit que useEffect s'exécute uniquement une fois lorsque le composant est monté

  return (
    <div className='altroul'>
      <div className='space'></div>
      <div className='choises'>
        <a href="#" className='choiseone'>ALL</a>
        <a href="#">WOMEN</a>
        <a href="#">MEN</a>
      </div>
      <ul className='fighters-list'>
        {fighters.map((fighter, index) => (
          <li key={index}   className='fighter-item'>
            <div class="cardy">
              <div class="card-inner">
                  <div class="card-front">
                    <img src={fighter.picture} alt="#" style={{width: '50%'}} className='fighter-image'/>
                    
                      <strong>{fighter.name}</strong>
                      <p>{fighter.nickname}</p>
                      <p>Poids: {fighter.weight}</p>
                    
                  </div>
                  <div class="card-back">
                  
                    <strong> {fighter.name}</strong>
                    <p>Nickname: {fighter.nickname}</p>
                    <p>Combat: {fighter.fightName}</p>
                    <p>Histoire des combats: {fighter.fighthistorywld}</p>
                    <p>Catégorie de poids: {fighter.weightClass}</p>
                    <p>Poids: {fighter.weight}</p>
                    <button className='iconn'>
                    <Link to='/ProfileAthletes' >Profile Athletes</Link>
                    </button>
                  
                  </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button className='iconm' >
        <a href="#">View More</a>
      </button>
      
    </div>
    
  );
};

export default YourComponent;

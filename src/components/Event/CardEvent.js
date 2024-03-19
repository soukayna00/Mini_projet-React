// CardEvent.js
import React, { useState, useEffect } from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './CardEvent.css'

const CardEvent = ({ eventName, time, location, pictures, cardType, index,id }) => {
    console.log('eventName:', eventName);
    console.log('time:',time);
    const [isEventUpcoming, setEventUpcoming] = useState(true);

    useEffect(() => {
        const currentDate = new Date();
        setEventUpcoming(new Date(time) > currentDate);
    }, [time]);

    const linkTicket = `/Ticket/${id}`;
    const linkSold = '/Sold-out';
    const linkexplore = '/Explore';
    const linkRecap = './Recap';

    return (
        <Card className={isEventUpcoming ? 'v1' : 'v2'} key={index} style={{ width: '30rem', margin: '5rem', padding: '5px', border: isEventUpcoming ? '2px solid red' : '2px solid orange' }}>
            <Carousel className="carousel-container">
                {[...Array(Math.ceil(pictures.length / 2))].map((_, picIndex) => (
                    <Carousel.Item key={picIndex} interval={4000} className="carousel-visible">
                        <div className="d-flex">
                            {pictures.slice(picIndex * 2, picIndex * 2 + 2).map((pic, innerIndex) => (
                                <img
                                    key={innerIndex}
                                    className="w-50"
                                    src={pic}
                                    alt={`Slide ${picIndex}-${innerIndex}`}
                                />
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Card.Body>
                <Card.Title className='Card-title'>{eventName}</Card.Title>
                <Card.Text>
                    {time} 
                    {location} {cardType}
                </Card.Text>
                <Link to={isEventUpcoming ? linkexplore : linkRecap}>
                    <Button variant={isEventUpcoming ? "danger" : "warning"} >
                        {isEventUpcoming ? "Explore" : "Recap"}
                    </Button>
                </Link>

                <Link to={isEventUpcoming ? linkTicket : linkSold}>
                    <Button style={{ margin: '10px' }} variant={isEventUpcoming ? "secondary" : "light"} >
                        {isEventUpcoming ? "Ticket" : "Sold Out"}
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default CardEvent;
CardEvent.js

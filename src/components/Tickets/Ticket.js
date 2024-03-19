import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { paySeats } from '../../Redux/actions/billetaction';
import './Ticket.css';

// Update the path to your actions
// import { chooseBlock, incrementSeats, decrementSeats } from 'path-to-your-actions';

const chooseBlock = (blockId) => ({
  type: 'choose',
  payload: blockId,
});

const incrementSeats = () => ({
  type: 'incrementSeats',
});

const decrementSeats = () => ({
  type: 'decrementSeats',
});

const Ticket = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const listblock = useSelector((state) => state.blocks) || [];
  const selectedBlock = useSelector((state) => state.selectedBlock) || {};
  const numberOfSeats = useSelector((state) => state.numberOfSeats) || 0; // Add this line
  const availableSeats = useSelector((state) => {
    if (selectedBlock && selectedBlock.block_id) {
      const block = state.blocks.find((b) => b.block_id === selectedBlock.block_id);
      return block ? block.available_seats : 0;
    }
    return 0;
  });


  const [scrapedData, setScrapedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/scrapedDataUfc.json');
        const data = await response.json();
        setScrapedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Clean up code (if needed)
    };
  }, []);

  if (!scrapedData) {
    return <div>Loading...</div>;
  }

  const selectedEvent = scrapedData.find((event) => String(event.id) === id);

  if (!selectedEvent) {
    return <div>Event not found</div>;
  }

  const { eventName, location, pictures, time } = selectedEvent;

  const selectBlock = (blockId) => {
    // Dispatch the 'choose' action with the blockId
    dispatch(chooseBlock(blockId));
  };

  const handlePay = () => {
    // Assuming you have the blockId and numberOfSeats available
    dispatch(paySeats(selectedBlock.block_id, numberOfSeats));
  };

  return (
    <div className="ticket-Main-container">
      <div className="ticket-container">
        <div className="pictures-container">
          {pictures.slice(0, 2).map((pictureUrl, index) => (
            <img key={index} src={pictureUrl} alt={`photos ${index + 1}`} />
          ))}
        </div>
        <div className="ticket-Details">
          <h2>Event Detail</h2>
          <p>Main Card: {eventName}</p>
          <p>Location: {location}</p>
          <p>Time: {time}</p>
          <h2>Pick your seat</h2>
          <div className='ticket-seat'>
            <select
              name="block_id"
              id=""
              onChange={(e) => selectBlock(e.target.value)}
            >
              <option disabled value="">
                Select a block
              </option>
              {listblock.map((elm) => (
                <option key={elm.block_id} value={elm.block_id}>
                  {elm.block_id}
                </option>
              ))}
            </select>
            {selectedBlock && selectedBlock.prices && selectedBlock.prices.length > 0 ? (
              <p>
                Price: {selectedBlock.prices.join(', ')}$
              </p>
            ) : (
              <p>Select a block to see prices</p>
            )}

            <input type="button" value="+" onClick={() => dispatch(incrementSeats())} />
            <input type="text" value={numberOfSeats} readOnly />
            <input type="button" value='-' onClick={() => dispatch(decrementSeats())} />
            {selectedBlock.prices && selectedBlock.prices.length > 0 ? (
              <p>Total Price: {selectedBlock.prices[0] * numberOfSeats}$</p>

            ) : null}
          </div>
          <div>
            Available Seats: {availableSeats}
          </div>
          <div className='detail-payement'>
            <h2>Payment details</h2>
            <form>
              <input type="text" placeholder='enter your personal name' />
              <input type="text" placeholder='card number' /><br />
              <label htmlFor="ccv">CCV</label>
              <input type="text" placeholder='expl 331' name='ccv' />
              <label htmlFor="expiration">Expiration</label>
              <input name='expiration' placeholder='MM' type="text" />
              <input type="text" placeholder='YYYY' />
              <input className='btn-pay' type="button" value='Pay' onClick={handlePay} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
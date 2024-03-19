import Carousel from 'react-bootstrap/Carousel';
import one from '../Assets/one.jpg'
import two from '../Assets/two.jpg'
import three from '../Assets/three.jpg'
import four from '../Assets/four.jpg'
import five from '../Assets/five.jpg'


function Results() {
 
  return (
    <div style={{backgroundColor: 'transparent',boxShadow: '0 2px 8px 4px rgba(178,178,178,0.45)'}} className='tout'>
    <Carousel data-bs-theme="dark" style={{ maxWidth: '400px', margin: 'auto' }}>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src={one}
          alt=""
          style={{maxHeight: '200px',width: '100%'}}
          />
      </Carousel.Item>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src={two}
          alt=""
          style={{maxHeight: '200px',width: '100%'}}
          />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={three}
          alt=""
          style={{maxHeight: '200px',width: '100%'}}
          />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={four}
          alt=""
          style={{maxHeight: '200px',width: '100%'}}
          />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={five}
          alt=""
          style={{maxHeight: '200px',width: '100%'}}
          />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Results;
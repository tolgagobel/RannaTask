import React from 'react';
import images_1 from '../images/tourist_1.png'
import images_2 from '../images/tourist_2.png'
import images_3 from '../images/tourist_3.png'
import images_4 from '../images/tourist_4.png'
import images_5 from '../images/tourist_5.png'
import images_6 from '../images/tourist_6.png'

const Tourist = () => {
    return (
        <div className="dining-container">
        <h3>Tourist Attractions</h3>
      <div className="card-row">
        <div className="card">
          <img src={images_1} alt="Tourist 1" className="card-image" />
          <div className="restaurant-name">Attraction 1</div>
        </div>
        <div className="card">
          <img src={images_2} alt="Tourist 2" className="card-image" />
          <div className="restaurant-name">Attraction 2</div>
        </div>
      </div>
      <div className="card-row">
        <div className="card">
          <img src={images_3} alt="Tourist 3" className="card-image" />
          <div className="restaurant-name">Attraction 3</div>
        </div>
        <div className="card">
          <img src={images_4} alt="Tourist 4" className="card-image" />
          <div className="restaurant-name">Attraction 4</div>
        </div>
      </div>
      <div className="card-row">
        <div className="card">
          <img src={images_5} alt="Tourist 5" className="card-image" />
          <div className="restaurant-name">Attraction 5</div>
        </div>
        <div className="card">
          <img src={images_6} alt="Tourist 6" className="card-image" />
          <div className="restaurant-name">Attraction 6</div>
        </div>
      </div>
        <span>See All</span>
    </div>
    );
}

export default Tourist;

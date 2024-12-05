import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSlidersH } from "react-icons/fa";
import dining1 from '../images/dining1.png'

const Dining = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRestaurants = async () => {
        try {
            const authResponse = await axios.post('https://localhost:7181/api/Authentication', {
                'Username': "admin",
                'Password': "admin"
            });

            const jwtToken = authResponse.data;
            const restaurantResponse = await axios.get('https://localhost:7181/api/Restaurant/GetAll', {
                headers: { Authorization: `Bearer ${jwtToken}` }
            });

            setData(restaurantResponse.data);
            setLoading(false);
        } catch (error) {
            console.error('Veri çekilirken bir hata oluştu:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    if (loading) {
        return <p>Yükleniyor...</p>;
    }

    return (
        <div className="dining-container">
            <div className="settings-icon">
                <FaSlidersH />
            </div>
            <h3>Dining</h3>
            <div className="card-row">
        <div className="card">
          <img src={dining1} alt="Tourist 1" className="card-image" />
          <div className="restaurant-name">Attraction 1</div>
        </div>
        <div className="card">
          <img src={dining1} alt="Tourist 2" className="card-image" />
          <div className="restaurant-name">Attraction 2</div>
        </div>
      </div>
      <div className="card-row">
        <div className="card">
          <img src={dining1} alt="Tourist 3" className="card-image" />
          <div className="restaurant-name">Attraction 3</div>
        </div>
        <div className="card">
          <img src={dining1} alt="Tourist 4" className="card-image" />
          <div className="restaurant-name">Attraction 4</div>
        </div>
      </div>
      <div className="card-row">
        <div className="card">
          <img src={dining1} alt="Tourist 5" className="card-image" />
          <div className="restaurant-name">Attraction 5</div>
        </div>
        <div className="card">
          <img src={dining1} alt="Tourist 6" className="card-image" />
          <div className="restaurant-name">Attraction 6</div>
        </div>
      </div>
            <span style={{ marginTop: '40px' }}>See All</span>
        </div>
    );
};

export default Dining;
import React, { useState } from "react";
import { FaUserPlus, FaKey, FaCompass, FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import logo from '../../images/Group.png';
import { Link } from "react-router-dom";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    gender: "",
    ageRange: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form başarıyla gönderildi!');
  };

  return (
    <div className="form-container">
        <img className="login_logo" src={logo} alt="" />
      <h2 style={{textAlign:'center'}}>Become a Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name, Surname:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Re - Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="ageRange">Age Range:</label>
          <select
            id="ageRange"
            name="ageRange"
            value={formData.ageRange}
            onChange={handleChange}
            required
          >
            <option value="18to24">18-24</option>
            <option value="25to34">25-34</option>
            <option value="35to44">35-44</option>
            <option value="45to54">45-54</option>
            <option value="55to64">55-64</option>
            <option value="65plus">65+</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="germany">Germany</option>
            <option value="turkey">Turkey</option>
            <option value="other">Other</option>
          </select>
        <Link to='/'><button className='welcome_buttonbody_green'>Continue</button></Link>

        </div>

      </form>

      <div className='login_down_body' style={{marginTop:'20px'}}>
                <span>You can also connect with:</span>
                <div className='login_down_body_icons'>
                    <FaFacebook className='login_icons' />
                    <FaGoogle className='login_icons' />
                    <FaApple className='login_icons' />
                </div>
                <span style={{ fontSize: '14px', padding: '10px',marginBottom:'20px' }}>
                Already a member?
                <a href="#" style={{ color: '#00A69D', textDecoration: 'none' }}>
                <span> </span>Click to Login.
                </a>
            </span>

        </div>

    </div>
  );
};

export default UserForm;

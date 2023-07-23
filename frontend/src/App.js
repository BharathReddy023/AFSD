import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    e_balance : ``,

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      await axios.post('/api/register', formData);
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed. Please try again later.');
    }
  };

  return (
    <div class="container">
      <h1> Rupee(e₹) Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br /><br></br>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br /><br></br>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br /><br></br>
        <label>
        Rupee(e₹) balance 
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </label><br></br><br></br>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;

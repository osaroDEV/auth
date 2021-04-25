import React, { useState, useEffect } from "react";
import { FiCheckCircle } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero({ handleLogout }) {

    return (
      <section className='center'>
        <div className="check">
          <FiCheckCircle />
        </div>
        <div className="main">
          <div className="main-heading logo">
            <h1 className='underline'>Portal</h1>
          </div>
          <h1>Congratulations!</h1>
          <h3>You are now successfully authenticated.</h3>
          <h3>You can visit your dashboard.</h3>
          <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
        
      </section>
    );
}


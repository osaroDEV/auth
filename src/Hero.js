import React, { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
// import { Link } from 'react-router-dom';
import styled from "styled-components";
import "./Hero.css";

export default function Hero({ handleLogout }) {
  const Main = styled.h1`
    color: #f0f;
    margin-bottom: 2em;
  `;
  return (
    <section className="center">
      <div className="check">
        <FiCheckCircle />
      </div>
      <div className="main">
        <div className="main-heading logo">
          <h1 className="underline">Portal</h1>
        </div>
        <Main>Congratulations!</Main>
        <h3>You are now successfully authenticated.</h3>
        <h3>You can visit your dashboard.</h3>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </section>
  );
}

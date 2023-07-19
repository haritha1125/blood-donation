// App.js

import React from 'react';
import './home.css';
import {Link} from "react-router-dom";
function Home() {
  return (
    <div className="App">
      <header  className="App-header">
        <h1  className="App-header">Blood Links</h1>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h2 className='headhome'>Donate Blood, Save Lives</h2>
            <p>
              Your donation can make a huge difference. Join us in our mission
              to help those in need.
            </p>
            <button className="donate-button" ><Link className='route-link1' to="/login">Login/Register</Link></button>
          </div>
        </section>
      </main>
    
    </div>
  );
}

export default Home;

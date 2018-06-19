import React from 'react';
import classes from './LandingPage.css';

import KitchenVideo from '../../assets/video/Kitchen.mp4'

const landingPage = () => {
  return (
    <div className={classes.LandingPage}>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
          </ul>
        </nav>
      </header>
      <video autoPlay muted loop>
        <source src={KitchenVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default landingPage;

import React from 'react';
import classes from './LandingPage.css';

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
    <h1 className={classes.LandingPage}>THIS IS LANDING PAGE</h1>
    </div>
  )
}


export default landingPage;

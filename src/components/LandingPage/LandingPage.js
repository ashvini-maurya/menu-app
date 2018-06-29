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

      <div>
        <h4>Our Trending Items</h4>

        <div className={classes.TrendingItems}>
          <div className={classes.CardContainer}>
            <div className={classes.Card}>
              <img src="http://placekitten.com/500/287" className={classes.TrendingItem} />
              <main className={classes.CardDescription}>
                Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun
              </main>
              <a href="" className={classes.Button}>Buy</a>
            </div>

            <div className={classes.Card}>
              <img src="http://placekitten.com/500/287" className={classes.TrendingItem} />
              <main className={classes.CardDescription}>
                Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun
              </main>
              <a href="" className={classes.Button}>Buy</a>
            </div>

            <div className={classes.Card}>
              <img src="http://placekitten.com/500/287" className={classes.TrendingItem} />
              <main className={classes.CardDescription}>
                Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun
              </main>
              <a href="" className={classes.Button}>Buy</a>
            </div>

            <div className={classes.Card}>
              <img src="http://placekitten.com/500/287" className={classes.TrendingItem} />
              <main className={classes.CardDescription}>
                Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun
              </main>
              <a href="" className={classes.Button}>Buy</a>
            </div>

            <div className={classes.Card}>
              <img src="http://placekitten.com/500/287" className={classes.TrendingItem} />
              <main className={classes.CardDescription}>
                Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun
              </main>
              <a href="" className={classes.Button}>Buy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default landingPage;

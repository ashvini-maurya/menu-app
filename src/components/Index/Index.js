import React from 'react';

import { Route } from 'react-router-dom'


import Aux from '../../hoc/Aux/Aux';
import LandingPage from '../LandingPage/LandingPage';
import Menu from '../../containers/Menu/Menu';

const index = () => {
  return (
    <Aux>
      <Route path="/" exact component={LandingPage} />
      <Route path="/menu" component={Menu} />
    </Aux>
  )
}

export default index;

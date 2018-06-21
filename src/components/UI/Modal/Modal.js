import React from 'react';

import classes from './Modal.css';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      <div className={classes.ModalHeader}>
        <h6>Header</h6>
        <h6 onClick={props.modalClosed}>X</h6>
      </div>
      {props.children}
    </div>
  </Aux>
);

export default modal;

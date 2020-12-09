import React from 'react';
import PropTypes from 'prop-types';

export const Checkout = ({itemCount, itemPrice, checkout=false, onClickCheckout}) => (
      <div className="container mr-2">
        <div className="row justify-content-end">
         <span className="text-md-center">
          
          {itemCount > 0 ?
          <button type="button" className="btn btn-primary ml-2" onClick={onClickCheckout} >
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-cart" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
            <span className="badge badge-light ml-2">{itemCount}</span> 
          </button>
          :
          <button type="button" className="btn btn-secondary ml-2 disabled">
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-cart" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
            <span className="badge badge-light ml-2">0</span> 
          </button>
          }
          </span>
        </div>
      </div>
);

Checkout.propTypes = {
  itemCount: PropTypes.number.isRequired,
  itemPrice: PropTypes.number.isRequired,
  onClickCheckout: PropTypes.func.isRequired
}
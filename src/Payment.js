import React from 'react';
import PropTypes from 'prop-types';

export const Payment = ({itemPrice, onClickPay}) => (
    <div className="container-fluid text-left justify-content-top">
      <div className="form-group row">
        <div className="col-sm">
          <div className="row input-group">
            <span className="text">Card Holder Name</span>
          </div>
          <div className="row input-group mr-2 mt-2">
            <input type="text" className="form-control" />
          </div>
          <div className="row input-group mr-2 mt-2">
            <span className="text">Card Number</span>
          </div>
          <div className="row input-group mr-2 mt-2">
            <input type="text" className="form-control" maxLength="16"/>
          </div>
          <div className="row input-group">
            <div className="col-sm">
              <div className="row  mr-2 mt-2 mb-2">
                  <span className="text">Expiry</span>
              </div>
              <div className="row">
                <div className="input-group">
                	<input type="text" placeholder="MM" className="form-control" maxLength="2"/>
                  <input type="text" placeholder="YYYY" className="form-control" maxLength="4" />
              	</div>
              </div>
            </div>
            <div className="col-sm">
              <div className="row  mr-2 mt-2 mb-2">
                  <span className="text">CVC</span>
              </div>
              <div className="row">
                <div className="input-group">
                  <input type="text" className="form-control" maxLength="3"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row mr-3 mt-4 justify-content-center">
            <button type="button" className="btn btn-info w-100">Total Amount: ${itemPrice}</button>
          </div>
          <div className="row mr-3 mt-2 justify-content-center"> 
            {itemPrice > 0 ?
              <button type="button" className="btn btn-primary w-100" onClick={onClickPay}>Pay >></button>
              :
              <button type="button" className="btn btn-muted w-100">Pay >> </button>
            }
          </div>
        </div>
      </div>
    </div>
);

Payment.propTypes = {
  itemPrice: PropTypes.number.isRequired,
  onClickPay: PropTypes.func.isRequired
}
import React from "react";
import PropTypes from 'prop-types';

import {AssetCategory} from "./AssetCategory"
import {GoBack} from "./GoBack";
import {ItemCard} from "./ItemCard";
import {Checkout} from "./Checkout";
import {Payment} from "./Payment";

export const BuyerView = ({state, toggleItemAddition, onClickCheckout, removeCheckoutItem, onClickPay}) => (
    
    <div>   
    { (!state.checkout) ? 
      /* Section displays Items in Catalog  */
      <div className="container">
      	<div className="row">
	     		<AssetCategory />
	     	</div>
        <div className="row mb-2">
          <Checkout itemCount={state.itemCount} itemPrice={state.totalPrice} onClickCheckout={onClickCheckout} />
        </div>

        <div className="row">
          {
            state.buyerItems.map((item, index) =>
                <ItemCard
                    key = {item.id}
                    item = {item}
                    toggleItem = {() => toggleItemAddition(index)}
                />
            )
          }
        </div>
        <div className="row my-2">
          <Checkout itemCount={state.itemCount} itemPrice={state.totalPrice} onClickCheckout={onClickCheckout} />
        </div>
      </div>

      :
       /* Section Post Item Checkout  */
        <div className="container">
          <div className="row">
            <div className="col-lg mt-0">
              <GoBack />
            </div>
          </div> 
          <div className="row">
            <div className="col-6">
              <h4 className="text-top text-muted">Items Purchased</h4>
              <div className="row">
                {
                  state.addedItems.map((item, index) =>
                      <ItemCard
                          key = {item.id}
                          index = {index}
                          item = {item}
                          toggleItem = {() => toggleItemAddition(index)}
                          removeItem = {() => {removeCheckoutItem(index)}}
                      />
                  )
                }
              </div>
            </div>
            <div className="col">
              <h4 className="text-top text-muted">Payment Details</h4>
              <Payment itemPrice={state.totalPrice} onClickPay={onClickPay} />
            </div>
          </div>
        </div>
    }  
  </div>
);

BuyerView.propTypes = {
  state: PropTypes.object.isRequired,
  toggleItemAddition: PropTypes.func.isRequired,
  onClickCheckout: PropTypes.func.isRequired,
  removeCheckoutItem: PropTypes.func.isRequired,
  onClickPay: PropTypes.func.isRequired
};

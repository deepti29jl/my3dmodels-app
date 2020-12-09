import React from 'react';
import PropTypes from 'prop-types';

import {AddItem} from "./AddItem";
import {ItemCard} from "./ItemCard";

export const SellerView = ({state, addItem, onChangeItem, editItem, submitItem, editable}) => (
  <div>
    <div className="container">
      <div className="row justify-content-left">
        <div className="col-sm text-dark">
          <p><h4>My Creation</h4></p>
        </div>
      </div>
      <div className="row m-2">
        <AddItem 
          state={state}
          onChangeItem={onChangeItem}
          toggleButton={addItem}
          onSubmit={submitItem}
        />
      </div>
      <div className="row">
          {
            state.sellerItems.map((item, index) =>
                <ItemCard
                    key = {item.id}
                    item = {item}
                    toggleItem = {() => addItem(index)}
                    editItem = {() => editItem(index)}
                />
            )
          }
        </div>
    </div>
  </div>
);

SellerView.propTypes = {
  state: PropTypes.shape({
    displayAddItem: PropTypes.bool.isRequired
  }),
 
  addItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  submitItem: PropTypes.func.isRequired
};
import React from 'react';
import PropTypes from 'prop-types';

import {AssetCategory} from "./AssetCategory"

export const AddItem = ({state, toggleButton, onChangeItem, onSubmit, handleFileCount}) => (
  <div className="container">
    <div className="row justify-content-end">
     
      {state.displayAddItem?
        <div className="container pt-2 border border-light-2">
          <div className="row justify-content-end"><button type="button" className="btn btn-primary ml-2 mr-2 pl-3 pr-3" onClick={toggleButton}>-</button></div>
          <h3 className="text-muted">{state.itemEdited == null? "New": "Update"}</h3>
          <form className="form-group">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Model Name</span>
              </div>
              {state.itemEdited=== null
                ?
                  <input type="text" className="input-item form-control" aria-label="Name" placeholder="Name" />
                :  
                  <input type="text" className="input-item form-control" aria-label="Name" placeholder={state.itemEdited.name} onChange={onChangeItem}/>
              }
              
            </div>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Description</span>
              </div>
              {state.itemEdited=== null
                ?
                  <input type="text" className="input-item form-control" aria-label="Description" placeholder="Model Description" />
                :  
                  <input type="text" className="input-item form-control" aria-label="Description" placeholder={state.itemEdited.name} onChange={onChangeItem}/>
              }
            </div>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Price $</span>
              </div>
              {state.itemEdited=== null
                ?
                  <input type="text" className="input-item form-control" aria-label="Price" placeholder="00.00" />
                :  
                  <input type="text" className="input-item form-control" aria-label="Price" placeholder={state.itemEdited.price} onChange={onChangeItem}/>
              }
            </div>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
               <span className="input-group-text">Image(s)</span>
              </div>
              <div className="custom-file">
                <input type="file" className="custom-file-input" />
                <label className="custom-file-label">.png or .jpg </label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text">Upload</span>
              </div>
              <button className="btn btn-info">+</button>
            </div>

            <div className="input-group mb-2">
              <div className="input-group-prepend">
               <span className="input-group-text">Model</span>
              </div>
              <div className="custom-file">
                <input type="file" className="custom-file-input" />
                <label className="custom-file-label" >.FBX</label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text">Upload</span>
              </div>
            </div>
              <div className="input-group-prepend">
                <span className="input-group-text pt-1 pb-2 mb-3">Asset Category </span>
                <span className="ml-0 pl-0"><AssetCategory /></span>
              </div>
            <div className="row justify-content-end mr-1">
              <button type="button" className="btn btn-primary ml-2  align-self-end" onSubmit={onSubmit}>Save</button>
              <button type="button" className="btn btn-primary ml-2  align-self-end" onClick={toggleButton}>Cancel</button>
            </div>
          </form>
        </div>
      : <button type="button" className="btn btn-primary ml-2 mr-2 pl-3 pr-3 align-self-end" onClick={toggleButton}>+</button>
      }
      
    </div> 
  </div>
);

AddItem.propTypes = {
  state: PropTypes.shape({
    displayAddItem: PropTypes.bool.isRequired
  }),
  toggleButton: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
import React from 'react';
import PropTypes from 'prop-types';

export const ItemCard = ({item, toggleItem=null, editItem=null, removeItem=null}) => (
  <div className="col-md-6 col-lg-3">
    <div className="card mb-3">
    	<a className="nav-item nav-link" href={item.id}>
      	<img className="border border-light card-img-top" src={require ('./images/' + item.images[0])} alt={item.images[0]} />
      </a>
      <div className="card-body">
        <div>
          <h5 className="card-title text-center">{item.name}</h5>
          <div className="row justify-content-center mb-2">
            <p className="card-text">
              <span className="badge badge-secondary py-2 mr-2">Price</span>
              <span>${item.price}</span>
            </p>
          </div>
        </div>
        {(toggleItem !== null)?
        <div className="row justify-content-end">
          <div>
          { editItem !== null ? 
            <a className="mr-2" href="#"><img src={require ('./images/edit.png')} onClick={editItem} className={item.editFlag===false?"bg-white":"bg-warning"} /></a>
          :(removeItem === null)?
              (item.isAdded) ?
               <button type="button" className="btn btn-info m-2" onClick={toggleItem} >-</button>
               :<button type="button"className="btn btn-primary m-2" onClick={toggleItem} >+</button>
            :<a className="nav-item nav-link" href="#"><img className="border border-light"  onClick={removeItem} src={require ('./images/delete.png')} /></a>
          }
          </div>
        </div>
        :""}
      </div>
    </div>
  </div>
);

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired
  }),
  toggleItem: PropTypes.func.isRequired
};
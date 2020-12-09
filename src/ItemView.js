import React from 'react';
import PropTypes from 'prop-types';

import {GoBack} from "./GoBack";
import {Payment} from "./Payment";

export const ItemView = ({item, toggleBuy, onClickBuy, onClickPay }) => (
  <div className="container">
    <div className="row">
      <div className="col-lg">
        <GoBack />
      </div>
    </div> 
    <div className="row justify-content-center">
      <div className="col-sm mr-4">
        <div id="carousel" className="carousel slide" data-ride="carousel">
          {item.images.length === 1 ? 
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
          : <ol className="carousel-indicators"> {
            item.images.map((img_path, index) => 
              <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index===0?"active":""}></li>
            )}</ol>
          } 
          {item.images.length === 1 ? 
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={require ('./images/' + item.images[0])} alt={item.images[0]} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={require ('./images/' + item.images[0])} alt={item.images[0]} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={require ('./images/' + item.images[0])} alt={item.images[0]} />
              </div>
            </div>
            :
            <div className="carousel-inner"> {
              item.images.map((img_path, index) => 
                <div  key={index}  className={index===0?"carousel-item active":"carousel-item"}>
                  <img className="d-block w-100" src={require ('./images/' + img_path)} alt={img_path}/>
                </div>
              )
            } </div>
            }
          <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="col-sm">
        <div className="row">
          <div className="d-none d-md-block">
            <div className="row"><h3>{item.name}</h3>
              <h5><span class="badge badge-secondary m-2">Price ${item.price}</span></h5>
            </div>
            <div className="row"><p>Created by<a className="text-info" href="/content"> John Doe </a></p></div>
            <div className="row">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed.</p>
            </div>
            <div className="row justify-content-left">
              <span className="badge badge-pill badge-secondary m-2 p-2">Polygonal</span>
              <span className="badge badge-pill badge-secondary m-2 p-2">Photorealistic</span>
              <span className="badge badge-pill badge-secondary m-2 p-2">Textured</span>
              <span className="badge badge-pill badge-secondary m-2 p-2">21.7 MB </span>
            </div>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
        {(!toggleBuy)?
          <button type="button" className="btn btn-primary" onClick={onClickBuy}>Buy Now</button>
          :
          <button type="button" className="btn btn-primary" onClick={onClickBuy}>Cancel</button>
        }
        </div>
      </div>
      <div className="col-sm">
      { 
        toggleBuy?<div>
            <h4 className="text-top text-muted"> Payment Details </h4>
            <Payment itemPrice={item.price} onClickPay={onClickPay} />
        </div>
        : ""
      }
      </div>
    </div>
  </div>  
);

ItemView.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired
  }),
  onClickBuy: PropTypes.func.isRequired,
  onClickPay: PropTypes.func.isRequired
};
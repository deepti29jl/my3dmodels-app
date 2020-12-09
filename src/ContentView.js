import React from 'react';
import PropTypes from 'prop-types';

import {GoBack} from "./GoBack";
import {ItemCard} from "./ItemCard";

export const ContentView = ({state}) => (
  <div>
    <div className="container">
    {(window.location.pathname === "/")?
      <div className="row justify-content-left">
        <div className="col-sm text-dark">
          <p><h4>My Collection</h4></p>
        </div>
      </div>
    :
      <div className="row">
        <div className="col-sm">
          <GoBack />
        </div>
        <div className="col-sm text-muted">
          <p><h4>Collection by<a className="text-info" href="/content"> John Doe </a></h4></p>
        </div>
        <div className="col-sm-4"></div>
      </div>
    }
      <div className="row mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#" className="text-dark">Home Decor</a></li>
            <li className="breadcrumb-item"><a href="#" className="text-dark">Living Room</a></li>
            <li className="breadcrumb-item active text-dark" aria-current="page">Chairs</li>
          </ol>
        </nav>
      </div>
      <div className="row">
          {
            state.sellerItems.reverse().map((item, index) =>
                <ItemCard
                    key = {item.id}
                    item = {item}
                />
            )
          }
        </div>
    </div>
  </div>
);

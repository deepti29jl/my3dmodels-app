import React from 'react';

export const Header = () => (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/"><img className="card-img-top" src={require ('./images/logo.png')} alt="" /></a>
        </div>
      
      {(window.location.pathname === "/buyer")?
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/buyer">Buy<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/seller">Sell</a>
          </li>
          <li className="nav-item placeholder">
            <div className="col-sm-4"></div>
          </li>
        </ul>
      :(window.location.pathname === "/seller")?
        <ul className="navbar-nav mr-auto">
         <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/buyer">Buy</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/seller">Sell<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item placeholder">
            <div className="col-sm-4"></div>
          </li>
        </ul>
        :
        <ul className="navbar-nav mr-auto">
         <li className="nav-item active">
            <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/buyer">Buy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/seller">Sell</a>
          </li>
          <li className="nav-item placeholder">
            <div className="col-sm-4"></div>
          </li>
        </ul>
      }
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
      </form>
      <div className="navbar-nav">
        <ul className="navbar-nav mr-auto">
           <li className="nav-item nav-link"><a className="nav-item nav-link" href="/">LOGIN</a></li>
        </ul> 
      </div>
    </div>
    </nav>
);

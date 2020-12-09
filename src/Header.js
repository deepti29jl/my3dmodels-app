import React from 'react';
import MetaTags from 'react-meta-tags';

export const Header = () => (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <MetaTags>
          <title>Kirigami Platform</title>
          <meta name="description" content="Integrated Platform for AR Enablement" />
          <meta property="og:title" content="Kirigami 3D Store" />
      </MetaTags>
      <div className="container">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/"><img className="card-img-top" src={require ('./images/logo.png')} alt="" /></a>
        </div>
        <ul className="navbar-nav mr-auto">
          <li className={(window.location.pathname === "/")?"nav-item active":"nav-item"} >
            <a className="nav-link" href="/">Buy<span className="sr-only">(current)</span></a>
          </li>
          <li className={(window.location.pathname === "/seller")?"nav-item active":"nav-item"} >
            <a className="nav-link" href="/seller">Sell<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item placeholder">
            <div className="col-sm-4"></div>
          </li>
        </ul>
        <form className="form-inline my-1 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-light my-sm-0 " type="submit">Search</button>
        </form>
        <div className="navbar-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><a className="nav-link" href="/profile">Profile</a></li>
            <li className="nav-item"><a className="nav-link" href="/">Logout</a></li>
          </ul> 
        </div>
      </div>
    </nav>
);

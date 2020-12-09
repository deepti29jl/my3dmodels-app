import React from 'react';

export const AssetCategory = () => (
  <nav aria-label="breadcrumb">
  <ol className="breadcrumb bg-white">
    <li className="breadcrumb-item">
      <span className="dropdown">
        <button className="btn dropdown-toggle bg-secondary text-white" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Home Decor
        </button>
        <div className="dropdown-menu" aria-labelledby="categoryL1MenuButton">
          <a className="dropdown-item" href="#">Home Decor</a>
          <a className="dropdown-item" href="#">Event Design</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Animals</a>
          <a className="dropdown-item" href="#">Cars</a>
          <a className="dropdown-item" href="#">Persons</a>
        </div>
      </span>
    </li>
    <li className="breadcrumb-item">
      <span className="dropdown">
        <button className="btn dropdown-toggle bg-secondary text-white" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Living Room
        </button>
        <div className="dropdown-menu" aria-labelledby="categoryL2MenuButton">
          <a className="dropdown-item" href="#">Living Room</a>
          <a className="dropdown-item" href="#">Bedroom</a>
          <a className="dropdown-item" href="#">Kitchen</a>
          <a className="dropdown-item" href="#">Outdoor</a>
        </div>
      </span>
    </li>
    <li className="breadcrumb-item active" aria-current="page">
      <span className="dropdown">
        <button className="btn dropdown-toggle bg-secondary text-white" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Chairs
        </button>
        <div className="dropdown-menu" aria-labelledby="categoryL3MenuButton">
          <a className="dropdown-item" href="#">Chairs</a>
          <a className="dropdown-item" href="#">Table</a>
          <a className="dropdown-item" href="#">Couch</a>
          <a className="dropdown-item" href="#">Decor</a>
        </div>
      </span>
    </li>
  </ol>
</nav>

);


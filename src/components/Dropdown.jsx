import React from "react";
import './Dropdown.css'

export function Dropdown() {
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Select your news
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" href="#">
            <img className="dropdown__item-logo" src={require('../assets/angular.png')}/>
            Angular
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <img className="dropdown__item-logo" src={require('../assets/react.png')}/>
            ReactJS
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
          <img className="dropdown__item-logo" src={require('../assets/vue.png')}/>
            VueJS
          </a>
        </li>
      </ul>
    </div>
  );
}

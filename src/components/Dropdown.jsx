import React, { useState } from "react";
import './Dropdown.css'

export function Dropdown(props) {
  const {handleChoice} = props
  const [isActive, setActive] = useState(false);

  const handleDropdownShow = () => {
    setActive(!isActive);
  }

  return (
    <div className="dropdown">
      <button
        className={`btn dropdown-toggle`}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded={isActive ? "true" : "false"}
        onClick={handleDropdownShow}
      >
        Select your news
      </button>
      <ul className={`dropdown-menu ${isActive ? "show" : ""}`} data-popper-placement={isActive ? "bottom-start" : ""} aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" onClick={handleChoice} value='angular'>
            <img className="dropdown__item-logo" src={require('../assets/angular.png')} />
            Angular
          </a>
        </li>
        <li>
          <a className={`dropdown-item` } onClick={handleChoice}>
            <img className="dropdown__item-logo" src={require('../assets/react.png')} />
            ReactJS
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={handleChoice}>
            <img className="dropdown__item-logo" src={require('../assets/vue.png')} />
            VueJS
          </a>
        </li>
      </ul>
    </div>
  );
}

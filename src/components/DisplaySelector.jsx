import React, {useState} from "react";
import './DisplaySelector.css'

export function DisplaySelector() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  }
  return (
    <div className="displaySelector">
      <button onClick={handleToggle} className={`displaySelector__btn ${isActive ? "" : "displaySelector__btn--active"}`}>All</button>
      <button onClick={handleToggle} className={`displaySelector__btn ${isActive ? "displaySelector__btn--active" : ""}`}>My faves</button>
    </div>
  );
}

import React, {useState} from "react";
import './DisplaySelector.css'

export function DisplaySelector(props) {
  const [isActive, setActive] = useState(false);
  const {displaySelector} = props;

  const handleToggle = (choice) => {
    setActive(!isActive);
    displaySelector(choice)

  }
  return (
    <div className="displaySelector">
      <button onClick={handleToggle} className={`displaySelector__btn ${isActive ? "" : "displaySelector__btn--active"}`} value={'all'}>All</button>
      <button onClick={handleToggle} className={`displaySelector__btn ${isActive ? "displaySelector__btn--active" : ""}`} value={'faves'}>My faves</button>
    </div>
  );
}

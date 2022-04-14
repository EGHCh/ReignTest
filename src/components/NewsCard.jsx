import React, {useState} from 'react'
import './NewsCard.css'

export function NewsCard() {
  const [isActive, setActive] = useState(false);

  const handleFavToggle = () => {
    setActive(!isActive)
  }

  return (
    <div className="card">
      <div className="card__body">
        <p className=""><img src={require('../assets/clock.png')}/>Tiempo de publicación</p>
        <h2>Event-driven state management in React using Storeon</h2>
      </div>
      <div className="card__fav">
        <a onClick={handleFavToggle}><img src={require(isActive ? "../assets/fav.png" : "../assets/unfav.png")}/></a>
      </div>
    </div>
  )
}

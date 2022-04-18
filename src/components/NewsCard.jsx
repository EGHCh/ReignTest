import React, {useState,} from 'react'
import './NewsCard.css'

export function NewsCard({date = 'esto es date', headline = ' esto es headline', source = 'esto es source'}) {
  const [isActive, setActive] = useState(false);

  const handleFavToggle = () => {
    setActive(!isActive)
  }

  return (
    <div className="card">
      <div className="card__body">
        <p className="" href={source}><img src={require('../assets/clock.png')}/>{date}</p>
        <h2>{headline}</h2>
      </div>
      <div className="card__fav">
        <a onClick={handleFavToggle}><img src={require(isActive ? "../assets/fav.png" : "../assets/unfav.png")}/></a>
      </div>
    </div>
  )
}

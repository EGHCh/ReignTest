import React, { useState, } from 'react'
import Moment from 'react-moment';
import './NewsCard.css'


export function NewsCard({ date, headline, author, source, onClickFav }) {
  const [isActive, setActive] = useState(false);

  const handleFavToggle = () => {
    setActive(!isActive)
  }

  return (
    <div className="card col col-xs-2 m-auto mt-3">
      <div className="card__body" >
        <p className=""><img src={require('../assets/clock.png')} />Posted <Moment fromNow>{date}</Moment> by {author}</p>

        <a target="_blank" href={source}><h2>{headline}</h2></a>
      </div>
      <div className="card__fav">
        <a onClick={onClickFav}><img onClick={() => {
          handleFavToggle()
        }} src={require(isActive ? "../assets/fav.png" : "../assets/unfav.png")} /></a>
      </div>
    </div>
  )
}

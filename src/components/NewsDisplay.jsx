import React, { useState, useEffect, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { NewsCard } from "./NewsCard";
import { Dropdown } from "./Dropdown";
import { DisplaySelector } from "./DisplaySelector"
import './NewsDisplay.css'
import axios from "axios";


export function NewsDisplay() {
  const loadRef = useRef();
  const baseURL = "https://hn.algolia.com/api/v1/search_by_date?"

  const [favsState, setFavsState] = useState(false)
  const [lastSearch, setLastSearch] = useLocalStorage('last_search', '')
  const [faves, setFaves] = useLocalStorage('faves', [])
  const [search, setSearch] = useState(lastSearch)
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(false)
  const [page, setPage] = useState(0)

  let filteredFav = []
  let choiceToDisplay = ''
  let [isFavsDisplayed, setIsFavsDisplayed] = useState(false);

  let scrollFunction = () => {
    if (document.body.scrollHeight - window.scrollY <= window.innerHeight + 200 && !isFavsDisplayed) {
      if (!loadingData) {
        setPage(page + 1)

      }
    }
  }
  const getData = () => {
    setLoadingData(true)
    axios.get(`${baseURL}query=${search}&page=${page}`)
      .then(response => {
        setData(data.concat(response.data.hits))
      })
      .catch()
      .finally(() => {
        setLoadingData(false)
        setLastSearch(search)
      })
  }
  const displaySelector = (choice) => {
    console.log(choice.target.value)
    choiceToDisplay = choice.target.value
    if (choiceToDisplay === 'faves') {
      setIsFavsDisplayed(true)
    } else {
      setIsFavsDisplayed(false)
    }
  }
  useEffect(getData, [search, page, isFavsDisplayed])
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction)

    return () => {
      window.removeEventListener("scroll", scrollFunction)
    }
  })
  const handleChoice = (frameworkName) => {
    setSearch(frameworkName.target.text)
    setPage(0)
    setData([])
  }

  const comprobaciion = (post) => {
    let objectID = post.objectID
    filteredFav = faves.filter(fav => fav.objectID === objectID || fav.story_title === post.story_title)
    console.log('esto es filteredfav al comienzo' + filteredFav)
    console.log(filteredFav)
    if (filteredFav.length === 0) {
      setFaves([...faves, post])
      console.log('if')
    }
    else if (faves.length > 0 && filteredFav.length > 0) {
      filteredFav = faves.filter(fav => fav.objectID !== objectID || fav.story_title !== post.story_title)
      console.log('esto es filteredfav en el else' + { filteredFav })
      setFaves(filteredFav)
    }


    // setFaves([...faves, post])

    // lastFavs = faves.filter(fav => {
    //   fav.story_id = post.story_id
    // })
    // console.log(lastFavs)
    // if (lastFavs.length != 0) {
    //   console.log('if')
    //   console.log({faves})
    // } else {
    //   console.log('else')
    //   setFaves([...faves, post])
    // }
  }
  const holi = () => {
    console.log('holi')
  }
  const addOpacity = (card) => {
    console.log({card})
  }
  return (
    <div>
      <DisplaySelector displaySelector={displaySelector} />
      <Dropdown handleChoice={handleChoice} />
      <div className="container-fluid">
        <div className="container-fluid row row-cols-lg-2
        row-cols-1 gx-0">
          {
            !isFavsDisplayed ?
              data.map((post, index) => (
                <NewsCard key={index} onClickFav={() => {
                  comprobaciion(post)
                }} date={post.created_at} author={post.author} source={post.story_url ? post.story_url : post.url} headline={post.story_title ? post.story_title : post.title} />
              )) :
              faves.map((post, index) => (
                <NewsCard key={index} onClickFav={() => {
                  comprobaciion(post)
                }} date={post.created_at} author={post.author} source={post.story_url ? post.story_url : post.url} headline={post.story_title ? post.story_title : post.title} />
              ))
          }
          {loadingData && <h1>CARGANDO...</h1>}
        </div>
      </div>
    </div>
  )
}

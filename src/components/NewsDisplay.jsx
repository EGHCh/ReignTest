import React, { useState, useEffect } from "react";
import { NewsCard } from "./NewsCard";
import { Dropdown } from "./Dropdown";
import axios from "axios";


export function NewsDisplay() {
  const baseURL = "https://hn.algolia.com/api/v1/search_by_date?"
  const [search, setSearch] = useState(`${baseURL}query=$`)
  const [data, setData] = useState();
  const [loadState, setLoadState] = useState(false)

  const handleSearch = (newSearch = '') => {
    setSearch(`${baseURL}query=${newSearch}`)
  }
  let searchNews = (frameworkName) => {
    handleSearch(frameworkName.target.text)
  }
  useEffect(() => {
    const postToShow = axios.get(search)
      .then(response => {
        setData(response.data)
        console.log(data)
        console.log(data)
        setLoadState(true)
      })
      .catch()
  }, []
  )

  if(!loadState) {return <div>Cargando...</div>}
  return (
    <div>
      NewsDisplay
      <Dropdown handleChoice={(frameworkName) => searchNews(frameworkName)} />
      {
        data.hits.map(post => (
          <NewsCard key={post.id} date={post.created_at} headline={JSON.stringify(post)}/>
        ))
      }
      <NewsCard date="nueva fecha" request={search} />
    </div>
  )
}

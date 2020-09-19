import React, { useState, useEffect } from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetFavorites } from '../container/GetFavorites'

export const Favs = () => {
  const { data, loading, error } = useGetFavorites()
  const [favs, setFavs] = useState([])

  useEffect(() => {
    if (data) setFavs(data.favs)
  }, [data])

  return (
    <>
      <h1>Favs</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error!</p>}
      {favs.length &&
        favs.map(fav => <PhotoCard key={fav.id} {...fav} />)}
    </>
  )
}

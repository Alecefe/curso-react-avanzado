import React, { useState, useEffect } from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetFavorites } from '../container/GetFavorites'
import { Layout } from '../components/Layout'
import PropTypes from 'prop-types'

export default () => {
  const { data, loading, error } = useGetFavorites()
  const [favs, setFavs] = useState([])

  useEffect(() => {
    if (data) setFavs(data.favs)
  }, [data])

  return (
    <Layout title='Tus favoritos' subtitle='Aquí tus favoritos de Petgram'>
      {loading && <p>Cargando...</p>}
      {error && <p>Error!</p>}
      {favs.length &&
        favs.map(fav => <PhotoCard key={fav.id} {...fav} />)}
    </Layout>
  )
}

// ListOfFavs.propTypes = {
//   favs: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       src: PropTypes.string.isRequired
//     })
//   )
//   children: PropTypes.node.isRequired //Cualquier cosa que react pueda renderizar
// }

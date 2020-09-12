import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

export const PhotoCardWithQuery = (data, loading, error) => {
  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error...</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

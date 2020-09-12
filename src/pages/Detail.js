import React from 'react'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export const Detail = ({ detailId }) => {
  const { data, loading, error } = useGetSinglePhoto(detailId)
  return PhotoCardWithQuery(data, loading, error)
}

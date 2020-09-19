import React from 'react'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = ({ detailId }) => {
  const { data, loading, error } = useGetSinglePhoto(detailId)
  return (
    <Layout title={`Fotografía ${detailId}`}>
      {
        PhotoCardWithQuery(data, loading, error)
      }
    </Layout>
  )
}

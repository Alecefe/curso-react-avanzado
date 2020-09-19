import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = (path) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='En petgram puedes encontrar fotos de animales domésticos bien bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={path.id} />
    </Layout>

  )
}

// export const Home = React.memo(HomePage, (prevProps, props) => {
//   return prevProps.path === props.path
// })

import React, { useState, useEffect } from 'react'
import { Category, CategorySkeleton } from '../Category/index'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // Con async y await
    // const fetchCategories = async () => {
    //   const response = await window.fetch('https://petgram-server-alecefe-9ul0jzgri.vercel.app/categories')
    //   const data = await response.json()
    //   setCategories(data)
    // }
    // fetchCategories()

    // Con promises
    window.fetch('https://petgram-server-alecefe-9ul0jzgri.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
      .catch(err => {
        console.err(err, 'Ha ocurrido un error')
        setLoading(false)
      })
    setLoading(false)
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed &&
      setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <CategorySkeleton />
          : categories.map(category =>
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          )
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)

import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await window.fetch('https://petgram-server-alecefe-9ul0jzgri.vercel.app/categories')
      const data = await response.json()
      setCategories(data)
    }
    fetchCategories()
  }, [])

  return (
    <List>
      {
        categories.map(
          category =>
            <Item key={category.id}>
              <Category {...category} />
            </Item>
        )

      }
    </List>
  )
}

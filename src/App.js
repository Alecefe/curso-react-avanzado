import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <Logo />
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)

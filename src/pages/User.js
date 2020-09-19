import React from 'react'
import { useStateValue } from '../Context'

export const User = () => {
  const [{}, dispatch] = useStateValue()
  const removeAuth = e => {
    e.preventDefault()
    dispatch({
      type: 'LOGOUT'
    })
  }
  return (
    <>
      <h1>User</h1>
      <button onClick={removeAuth}>Cerrar sesion</button>
    </>
  )
}

import React from 'react'
import { useStateValue } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue()
  const register = useRegisterMutation()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'LOGIN'
    })
  }

  return (
    <>
      <UserForm title='Regístrate' onSubmit={handleSubmit} />
      <UserForm title='Iniciar sesión' onSubmit={handleSubmit} />
    </>
  )
}

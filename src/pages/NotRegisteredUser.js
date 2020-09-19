import React from 'react'

import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../container/RegisterMutation'
import { useLoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const register = useRegisterMutation()
  const login = useLoginMutation()

  return (
    <>
      <UserForm title='Regístrate' {...register} />
      <UserForm title='Iniciar sesión' {...login} />
    </>
  )
}

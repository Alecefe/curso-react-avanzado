import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Button, Title } from './styles'
import { useStateValue } from '../../Context'

export const UserForm = ({ title, mutation, data, loading, error }) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue()
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(email.value, password.value)
    mutation(email.value, password.value)
      .then(() => {
        console.log(data, loading, error)
        if (data.signup) {
          const { signup } = data
          dispatch({
            type: 'LOGIN',
            payload: signup
          })
        }
        if (data.login) {
          const { login } = data
          dispatch({
            type: 'LOGIN',
            payload: login
          })
        }
      })
      .catch(error => {
        console.error(`Error en ${title} `, error)
      })
  }

  const regErrorMsg = 'El usuario ya existe o hay un problema'
  const logErrorMsh = 'Contraseña o usuario incorrectos, intente nuevamente'

  return (
    <>
      <Form disabled={loading} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={loading} placeholder='Email' {...email} />
        <Input disabled={loading} placeholder='Password' type='password' {...password} />
        <Button disabled={loading}>{title}</Button>
        {error && <Error>{(title === 'Regístrate') ? regErrorMsg : logErrorMsh}</Error>}
      </Form>
    </>
  )
}

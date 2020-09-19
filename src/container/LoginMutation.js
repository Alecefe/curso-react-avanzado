import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const LOGIN = gql`
mutation singin ($input: UserCredentials!){
  login(input: $input)
}
`

export const useLoginMutation = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN)
  const mutation = (email, password) =>
    login({
      variables: {
        input: { email, password }
      }
    })
  const loginMutation = { mutation, data, loading, error }
  return loginMutation
}

import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const REGISTER = gql`
mutation signup($input: UserCredentials!) {
  signup (input: $input)
}
`

export const useRegisterMutation = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER)
  const mutation = (email, password) =>
    register({
      variables: {
        input: { email, password }
      }
    })
  const registerMutation = { mutation, data, loading, error }
  return registerMutation
}

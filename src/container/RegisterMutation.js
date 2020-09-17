import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const REGISTER = gql`
mutation signup($input: UserCredentials!) {
  signup (input: $input)
}
`

export const useRegisterMutation = () => {
  const [register] = useMutation(REGISTER)
  return register
}

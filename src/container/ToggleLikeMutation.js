import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const LIKE_PHOTO = gql`
mutation likePhoto ($input: LikePhoto!) {
  likePhoto(input:$input) {
    id,
    liked,
    likes
  }
}
`
export const useToggleLikeMutation = id => {
  const [toggleLike] = useMutation(LIKE_PHOTO, { variables: { input: { id } } })
  return { toggleLike }
}

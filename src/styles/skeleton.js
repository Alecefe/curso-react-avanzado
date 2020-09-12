import { css, keyframes } from 'styled-components'

const skeletonBackground = light => (
  css`
    background: ${
      light
      ? css`linear-gradient(-90deg, #c1c1c1 0%, #f8f8f8 50%, #c1c1c1 100%)`
      : css`linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)`
    };
    background-size: 400% 400%;
    animation: ${skeletonLoading} 1.2s ease-in-out infinite;
  `
)

const skeletonLoading = keyframes`
  from: {
    background-position: 0% 0%;
  }

  to {
    background-position: -135% 0%;
  }
`

export const skeletonStyle = (light = true) => skeletonBackground(light)

import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0px);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

// const slideInKeyframes = keyframes`
//   from {
//     transform: translate3d(0, -100px, 0) scale(.5);
//   }
//   to {
//     transform: translate3d(0, 0px, 0) scale(.5);
//   }
// `
// export const slideIn = ({ time = '5s', type = 'ease' } = {}) => {
//   css`animation: ${time} ${slideInKeyframes} ${type} forwards;`
// }

const appearFromTopKeyframes = (from, to) => {
  return keyframes`
  from {
    top: ${from};
  }

  to {
    top:${to};
  }
  `
}

export const appearFromTop = ({
  time = '1s',
  easing = 'cubic-bezier(.18,.89,.32,1.28)',
  from,
  to
} = {}) =>
  css`animation: ${time} ${appearFromTopKeyframes(from, to)} ${easing}, ${time} ${fadeInKeyframes} ease;`

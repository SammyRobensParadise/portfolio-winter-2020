import React from 'react'
import styled from 'styled-components'
import anime from 'animejs/lib/anime.es.js'

const DiamondWrapper = styled.div`
  position: fixed;
  user-select: none;
  display: inline;
  background-size: cover;
  z-index: 0;
`

class DiamondOne extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      fillMountainOne: false,
    }
  }

  componentDidMount() {
    anime({
      targets: '.mountain',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 3000,
      delay(_e, i) {
        return i * 250
      },
      direction: 'forwards',
    })
    setTimeout(() => {
      this.setState({
        fillMountainOne: true,
      })
    }, 2000)
  }

  render() {
    const setWith = window.innerWidth
    const setHeight = setWith * (363 / 323)
    const { fillMountainOne } = this.state
    return (
      <DiamondWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={setWith}
          height={setHeight}
          viewBox="0 0 1938 2178"
        >
          <defs>
            <filter
              id="Union_2"
              x="0"
              y="0"
              width="1427"
              height="2178"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood floodOpacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter
              id="Union_1"
              x="270"
              y="0"
              width="1668"
              height="2178"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur-2" />
              <feFlood floodOpacity="0.161" />
              <feComposite operator="in" in2="blur-2" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Component_1_1" data-name="Component 1 – 1" transform="translate(9 6)">
            <g className="cls-4" transform="matrix(1, 0, 0, 1, -9, -6)">
              <path
                id="Union_2-2"
                data-name="Union 2"
                fill={fillMountainOne ? '#203f8f' : 'none'}
                stroke="#203f8f"
                strokeWidth="6px"
                d="M0,1080H1409L704.5,2160Zm0,0L704.5,0,1409,1080Z"
                transform="translate(9 6)"
                className="mountain"
              />
            </g>
            <g className="cls-3" transform="matrix(1, 0, 0, 1, -9, -6)">
              <path
                id="Union_1-2"
                data-name="Union 1"
                fill={fillMountainOne ? '#1c67a6' : 'none'}
                stroke="#1c67a6"
                strokeWidth="6px"
                d="M0,1080H1650L825,2160Zm0,0L825,0l825,1080Z"
                transform="translate(279 6)"
                className="mountain"
              />
            </g>
          </g>
        </svg>
      </DiamondWrapper>
    )
  }
}
export default DiamondOne

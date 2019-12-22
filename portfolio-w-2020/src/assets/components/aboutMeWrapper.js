import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AboutMeDetails from './aboutMeDetails'
import { ABOUT_ME_WRAPPER } from '../../App'
import { isInViewport } from '../../utils/url-handlers'
const AboutMeWrapperComp = styled.div`
  z-index: 89;
  position: relative;
  margin: 0 auto;
  padding-top: 100px;
`
class AboutMeWrapper extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
    }
  }
  render() {
    return (
      <div>
        <AboutMeWrapperComp id={ABOUT_ME_WRAPPER}>
          <AboutMeDetails />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 1565.999 907.001"
          >
            <defs>
              <filter
                id="Exclusion_21"
                x="0"
                y="0"
                width="1565.999"
                height="907.001"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodOpacity="0.161" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Exclusion_21)">
              <path
                id="Exclusion_21-2"
                data-name="Exclusion 21"
                d="M94.5,888H0V0H94.5V888ZM21.2,777.125v16.889l23.255,2.953-12.674,1.785c-4.063.554-7.623,1.081-10.581,1.569v16.765H71v-11.32H38.146L71,801v-8.029l-33.622-4.523H71v-11.32Zm0-26.793v21.595H71V749.471H61.033v9.5H50.081v-8.09H40.607v8.09H31.163v-8.644ZM1547,888H105.5V0H1547V888h0Z"
                transform="translate(9.5 6.5)"
                fill="#1d839c"
                stroke="#1f66a6"
                strokeWidth="1"
                filter="url(#Exclusion_21)"
              />
            </g>
          </svg>
        </AboutMeWrapperComp>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  ...state,
})
export default connect(mapStateToProps)(AboutMeWrapper)

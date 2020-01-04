import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { white, navGreen, deepBlue } from '../colors/common-colors'
import { AUTHOR_DETAILS } from '../common/constants'
import { generateUtm } from '../../utils/analytics'

const moveReveal = keyframes`
0%{
    transform: translateY(120px);
}
100%{
    transform: translateY(0px);
}`
const moveHide = keyframes`
0%{
    transform: translateY(0px);
}
100%{
    transform: translateY(120px);
}
`
const animRevealHide = (anim, time, delay) => css`
${anim} ${time} cubic-bezier(0.645, 0.045, 0.355, 1) ${delay} forwards;

`
const PromoteSection = styled.button`
transform: translateY(120px);
background: ${white};
background-color: ${white}
position: fixed;
height: 100px;
width: 100%;
bottom: 0px;
display: inline-block;
margin: 0 auto;
z-index: 1800 !important;
border-radius: 80% 80% 0px 0px;
animation: ${(p) =>
  p.shouldShowCookieBanner
    ? animRevealHide(moveReveal, `0.5s`, `0s`)
    : animRevealHide(moveHide, `0.5s`, `0s`)}
&:focus{
    outline: none;

}
`
class PromoteBanner extends React.PureComponent {
  propTypes = {
    shouldShowCookieBanner: PropTypes.bool.isRequired,
  }
  defaultProps = {
    shouldShowCookieBanner: false,
  }
  constructor(props) {
    super(props)
    this.state = { ...props }
  }
  render() {
    // no object destruction to ensure that a re-render is called
    const shouldShowCookieBanner = this.state.shoudShowCookieBanner
    return (
      <div>
        <PromoteSection shouldShowCookieBanner={shouldShowCookieBanner}></PromoteSection>
      </div>
    )
  }
}
export default PromoteBanner

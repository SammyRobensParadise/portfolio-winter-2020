import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { white, navGreen, deepBlue, darkBlue } from '../colors/common-colors'
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
font-family: montserrat, sans-serif;
font-weight: 200;
font-style: normal;
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
border: none;
animation: ${(p) =>
  p.shouldShowCookieBanner && !p.hideBanner
    ? animRevealHide(moveReveal, `0.5s`, `0s`)
    : animRevealHide(moveHide, `0.5s`, `0s`)}
&:focus{
    outline: none;

}
`
const PromoteSectionClose = styled.button`
  @import url('https://css.gg/close-o.css');
  transform: scale(1.3);
  width: 30px;
  z-index: 3001;
  height: 30px;
  border-radius: 15px;
  background: ${navGreen};
  position: relative;
  bottom: 18px;
  border: none;
  box-shadow: 0px 4px 20px 9px rgba(0, 0, 0, 0.2);

  &:focus,
  &:hover {
    outline: none;
    background: ${deepBlue};
  }
`
const PromoteSectionText = styled.p`
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  color: ${deepBlue};
  stroke: ${deepBlue};
  font-size: 20px;
  text-align: center;
  bottom: 15px;
  position: relative;
`
const IconStyleOverride = {
  color: white,
  stroke: white,
  marginLeft: '-3px',
  transform: `scale(1.4)`,
}
const ICON_NAMES = {
  closeIcon: 'gg-close-o',
}
const ReachOutButton = styled.a`
font-family: montserrat, sans-serif;
font-weight: 200;
font-style: normal;
text-decoration: none;
padding: 5px;
width: auto;
height: 30px;
font-size: 20px;
border-radius: 6px;
color: ${white}
background: ${navGreen}
border: none;
transition: background 0.2s;
&:focus,&:hover{
    outline: none;
    background: ${deepBlue};
    cursor: none;
}
`
const mailToString = `mailto:${
  AUTHOR_DETAILS.email
}?Subject=Portfolio 2020 Website%20Inquiry- ${new Date().toDateString()}`

const BannerText = () => {
  return (
    <text>
      Some
      <span role="img" aria-label="cookie">
        {`  🍪's `}
      </span>
      show that you've been here before,{' '}
      <ReachOutButton href={mailToString}>React Out</ReachOutButton>
    </text>
  )
}
class PromoteBanner extends React.PureComponent {
  propTypes = {
    shouldShowCookieBanner: PropTypes.bool.isRequired,
  }
  defaultProps = {
    shouldShowCookieBanner: false,
  }
  constructor(props) {
    super(props)
    this.state = { ...props, hideBanner: false }
  }
  closePromoteSection = () => {
    this.setState({
      hideBanner: true,
    })
  }
  render() {
    // no object destruction to ensure that a re-render is called
    const shouldShowCookieBanner = this.state.shoudShowCookieBanner
    const { hideBanner } = this.state
    return (
      <div>
        <PromoteSection shouldShowCookieBanner={shouldShowCookieBanner} hideBanner={hideBanner}>
          <PromoteSectionClose tabIndex="0" onClick={this.closePromoteSection}>
            <i className={ICON_NAMES.closeIcon} style={IconStyleOverride}></i>
          </PromoteSectionClose>
          <PromoteSectionText>
            <BannerText />
          </PromoteSectionText>
        </PromoteSection>
      </div>
    )
  }
}
export default PromoteBanner

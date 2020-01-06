import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withCookies } from 'react-cookie'
import { CookieHandler } from '../../utils/analytics'
import { COOKIES } from '../../assets/common/constants'
import { white, darkBlue } from '../colors/common-colors'
import { AUTHOR_DETAILS } from '../common/constants'

const MobileWarningModule = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: ${white};
  z-index: 1000000;
  text-align: center;
  display: block;
`
const UpsetFace = styled.div`
  font-family: montserrat, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12rem;
  user-select: none;
  color: ${darkBlue};
  margin: 0 auto;
  transform: rotate(90deg);
  margin-top: 20%;
`
const VisibleShockFace = styled.p`
  font-family: montserrat, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  user-select: none;
  color: ${darkBlue};
  right: 20%;
  margin-top: 10%;
  position: absolute;
`
const Info = styled.p`
  font-family: montserrat, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  user-select: none;
  width: 80%;
  color: ${darkBlue};
  margin: 0 auto;
  margin-bottom: 10%;
  padding-top: 20px;
`
const upsetFaceText = `:O`
const visibleShockText = `* Visible shock *`
const warningText = `Hi there! This portfolio is best experienced on a larger screen.`
const continueAnyway = `Continue anyway`
const visitWebsite = `Visit sammyrp.com`

const ContinueAnywayButton = styled.button`
  border: none;
  text-align: center;
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 2rem;
  width: 80%;
  height: 80px;
  color: ${white};
  line-height: 80px;
  background: #203f8f;
  transition: letter-spacing 0.5s;
  bottom: 100px;
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  &:hover,
  &:active,
  &:focus {
    cursor: none;
    background: white;
    color: #203f8f;
    letter-spacing: 3px;
  }
  &:focus {
    outline: none;
  }
`
const VisitWebsiteButton = styled.button`
  border: none;
  text-align: center;
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 2rem;
  width: 80%;
  height: 80px;
  color: ${white};
  line-height: 80px;
  background: #203f8f;
  transition: letter-spacing 0.5s;
  bottom: 10px;
  display: block;
  margin: 0 auto;
  &:hover,
  &:active,
  &:focus {
    cursor: none;
    background: white;
    color: #203f8f;
    letter-spacing: 3px;
  }
  &:focus {
    outline: none;
  }
`
class MobileWarning extends React.PureComponent {
  static defaultProps = {
    cookies: {},
  }
  static propTypes = {
    cookies: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      shouldShowMobileWarning: true,
      hasNoShowMobileWarningCookie: !!CookieHandler.getCookie(
        props.cookies,
        COOKIES.doesNotWantMobileWarn.name,
        null,
        false,
      ),
    }
  }
  hideModal = () => {
    this.setState({
      shouldShowMobileWarning: false,
    })
    const { cookies } = this.props
    let ExpireDate = new Date()
    ExpireDate.setMonth(ExpireDate.getMonth() + 1)
    CookieHandler.setCookie(cookies, COOKIES.doesNotWantMobileWarn.name, true, {
      path: '/',
      expires: ExpireDate,
      sameSite: 'lax',
    })
    return false
  }
  render() {
    const { shouldShowMobileWarning, hasNoShowMobileWarningCookie } = this.state
    return shouldShowMobileWarning && !hasNoShowMobileWarningCookie ? (
      <MobileWarningModule>
        <VisibleShockFace>{visibleShockText}</VisibleShockFace>
        <UpsetFace>{upsetFaceText}</UpsetFace>
        <Info>{warningText}</Info>
        <ContinueAnywayButton tabIndex="0" onClick={this.hideModal}>
          {continueAnyway}
        </ContinueAnywayButton>
        <VisitWebsiteButton
          onClick={() => window.open(AUTHOR_DETAILS.websiteLink, '_blank', 'noopener')}
        >
          {visitWebsite}
        </VisitWebsiteButton>
      </MobileWarningModule>
    ) : null
  }
}
export default withCookies(MobileWarning)

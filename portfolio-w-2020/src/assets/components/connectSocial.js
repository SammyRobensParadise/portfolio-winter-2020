import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { white, navGreen } from '../colors/common-colors'

const moveOpen = keyframes`
0%{
height: 60px;
}
100%{
height: 400px;
}
`
const moveClose = keyframes`
0%{
height: 400px;
}
100%{
height: 60px;
}
`
const animOpenContainer = (anim) => css`
  ${anim} 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s forwards;
`

const SocialConnectContainer = styled.div`
  @import url('https://css.gg/share.css');
  position: fixed;
  bottom: 30px;
  right: 60px;
  z-index: 2000;
`

const SocialConnectCircle = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: ${(p) => (p.showingShareIconbar ? navGreen : white)};
  background-color: ${(p) => (p.showingShareIconbar ? navGreen : white)};
  stroke: ${(p) => (p.showingShareIconbar ? navGreen : white)};
  border-color: ${(p) => (p.showingShareIconbar ? navGreen : white)};
  box-shadow: 2px 10px 70px -8px rgba(0, 0, 0, 0.88);
  &:focus {
    outline: none;
  }
`
const SocialConnectShare = styled.div`
  @import url('https://css.gg/share.css');
  transform: scale(1.3);
  padding-left: 13px;
  z-index: 2000 !important;
`
const ShareIcon = styled.div`
  @import url(${(p) => p.param});
  transform: scale(1.3);
  padding-left: ${(p) => (p.centerAdjust ? p.centerAdjust : '18px')};
  bottom: ${(p) => p.height};
  position: absolute;
  z-index: 2000 !important;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.6);
    padding-left: ${(p) => (p.centerAdjust ? '14px' : '16px')};
  }
`
const ShareIconListContainer = styled.div`
  background: ${navGreen};
  background-color: ${navGreen};
  stroke: ${navGreen};
  border-color: ${navGreen};
  width: 60px;
  height: 30px;
  border-radius: 30px;
  transform: translateY(60px);
  z-index: 100;
  display: ${(p) => (p.showingShareIconbar || p.isClosingShareIconBar ? 'flex' : 'none')};
  animation: ${(p) =>
    p.showingShareIconbar && !p.isClosingShareIconBar
      ? animOpenContainer(moveOpen)
      : !p.showingShareIconbar && p.isClosingShareIconBar
      ? animOpenContainer(moveClose)
      : 'none'};
`
const ICON_NAMES = {
  shareIcon: 'gg-share',
  mailIcon: 'gg-mail',
  profileIcon: 'gg-profile',
}
/**
 * @param {boolean} showingShareIconbar
 * @returns {JSX} JSX
 */
const ShareIconList = ({ showingShareIconbar, isClosingShareIconBar }) => {
  return (
    <ShareIconListContainer
      showingShareIconbar={showingShareIconbar}
      isClosingShareIconBar={isClosingShareIconBar}
    >
      <ShareIcon param={'https://css.gg/mail.css'} height={'100px'}>
        <i className={ICON_NAMES.mailIcon} />
      </ShareIcon>
      <ShareIcon param={'https://css.gg/profile.css'} height={'180px'} centerAdjust={'16px'}>
        <i className={ICON_NAMES.profileIcon} />
      </ShareIcon>
    </ShareIconListContainer>
  )
}

class ConnectSocial extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
      showingShareIconbar: false,
      isClosingShareIconBar: false,
    }
    document.addEventListener('click', (e) => {
      this.closeShareIconBar(e)
    })
  }
  /**
   * shows the share Icon bar
   * @param {null} null
   */
  ShowShareIconBar = () => {
    this.setState({
      showingShareIconbar: true,
      isClosingShareIconBar: false,
    })
  }

  /**
   * closes the shareIcon bar
   * @param {e} event
   */
  closeShareIconBar = (e) => {
    const { showingShareIconbar } = this.state
    let exception = document.getElementById('social-connect-container')
    const isException = this.isDecendant(exception, e.target) || e.target === exception
    if (showingShareIconbar && !isException) {
      this.setState({
        showingShareIconbar: false,
        isClosingShareIconBar: true,
      })
    }
    setTimeout(() => {
      this.setState({
        isClosingShareIconBar: false,
      })
    }, 500)
  }
  /**
   * detects if a node is a decendant of
   * another node
   * @param {parent} node
   * @param {child} node
   */
  isDecendant = (parent, child) => {
    var node = child.parentNode
    while (node !== null) {
      if (node === parent) {
        return true
      }
      node = node.parentNode
    }
    return false
  }

  render() {
    const { showingShareIconbar, isClosingShareIconBar } = this.state
    debugger
    return (
      <div>
        <SocialConnectContainer id={`social-connect-container`} onClick={this.ShowShareIconBar}>
          <ShareIconList
            showingShareIconbar={showingShareIconbar}
            isClosingShareIconBar={isClosingShareIconBar}
          />
          <SocialConnectCircle showingShareIconbar={showingShareIconbar}>
            <SocialConnectShare>
              <i className={ICON_NAMES.shareIcon} />
            </SocialConnectShare>
          </SocialConnectCircle>
        </SocialConnectContainer>
      </div>
    )
  }
}
export default ConnectSocial

import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { white, navGreen } from '../colors/common-colors'

// time in miliseconds
const OPEN_CLOSE_ANIM_TIME = 500

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
const fadeIn = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}`

const fadeOut = keyframes`
0%{
    opacity: 1;
}
100%{
    opacity: 0;
}`
/**
 *
 * @param {Object} anim
 * @param {string} time
 */
const animConnect = (anim, time, delay) => css`
  ${anim} ${time} cubic-bezier(0.645, 0.045, 0.355, 1) ${delay} forwards;
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
const ShareIcon = styled.a`
  @import url(${(p) => p.param});
  transform: scale(1.3);
  padding-left: ${(p) => (p.centerAdjust ? p.centerAdjust : '18px')};
  bottom: ${(p) => p.height};
  position: absolute;
  z-index: 2000 !important;
  transition: all 0.2s ease-in-out;
  animation: ${(p) =>
    p.showingShareIconbar && !p.isClosingShareIconBar
      ? animConnect(fadeIn, (p) => p.animTime, `0s`)
      : !p.showingShareIconbar && p.isClosingShareIconBar
      ? animConnect(fadeOut, (p) => p.animTime, `0s`)
      : 'none'};
  &:hover {
    transform: scale(1.6);
    padding-left: ${(p) => (p.centerAdjust ? p.animAdjust : '16px')};
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
  box-shadow: 2px 10px 50px -8px rgba(0, 0, 0, 0.1);
  display: ${(p) => (p.showingShareIconbar || p.isClosingShareIconBar ? 'flex' : 'none')};
  animation: ${(p) =>
    p.showingShareIconbar && !p.isClosingShareIconBar
      ? animConnect(moveOpen, '0.5s', '0s')
      : !p.showingShareIconbar && p.isClosingShareIconBar
      ? animConnect(moveClose, '0.5s', '0s')
      : 'none'};
`
const ICON_NAMES = {
  shareIcon: 'gg-share',
  mailIcon: 'gg-mail',
  profileIcon: 'gg-profile',
  codeSlash: 'gg-code-slash',
  dribbble: 'gg-dribbble',
}
const IconStyleOverride = {
  color: white,
  stroke: white,
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
      <ShareIcon
        param={'https://css.gg/mail.css'}
        height={'100px'}
        showingShareIconbar={showingShareIconbar}
        isClosingShareIconBar={isClosingShareIconBar}
        animTime={'0.4s'}
      >
        <i className={ICON_NAMES.mailIcon} style={IconStyleOverride} />
      </ShareIcon>
      <ShareIcon
        param={'https://css.gg/profile.css'}
        height={'180px'}
        centerAdjust={'16px'}
        animAdjust={'14px'}
        showingShareIconbar={showingShareIconbar}
        isClosingShareIconBar={isClosingShareIconBar}
        animTime={'0.3s'}
      >
        <i className={ICON_NAMES.profileIcon} style={IconStyleOverride} />
      </ShareIcon>
      <ShareIcon
        param={'https://css.gg/code-slash.css'}
        height={'260px'}
        centerAdjust={'24px'}
        animAdjust={'20px'}
        showingShareIconbar={showingShareIconbar}
        isClosingShareIconBar={isClosingShareIconBar}
        animTime={'0.2s'}
      >
        <i className={ICON_NAMES.codeSlash} style={IconStyleOverride} />
      </ShareIcon>
      <ShareIcon
        param={'https://css.gg/dribbble.css'}
        height={'320px'}
        centerAdjust={'16px'}
        animAdjust={'14px'}
        showingShareIconbar={showingShareIconbar}
        isClosingShareIconBar={isClosingShareIconBar}
        animTime={'0.2s'}
      >
        <i className={ICON_NAMES.dribbble} style={IconStyleOverride} />
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
    }, OPEN_CLOSE_ANIM_TIME)
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
    return (
      <div>
        <SocialConnectContainer id={`social-connect-container`} onClick={this.ShowShareIconBar}>
          <ShareIconList
            showingShareIconbar={showingShareIconbar}
            isClosingShareIconBar={isClosingShareIconBar}
          />
          <SocialConnectCircle showingShareIconbar={showingShareIconbar}>
            <SocialConnectShare>
              <i
                className={ICON_NAMES.shareIcon}
                style={showingShareIconbar ? IconStyleOverride : {}}
              />
            </SocialConnectShare>
          </SocialConnectCircle>
        </SocialConnectContainer>
      </div>
    )
  }
}
export default ConnectSocial

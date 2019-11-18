import React from 'react'
import styled from 'styled-components'
import { darkBlue } from '../colors/common-colors'
import { connect } from 'react-redux'
import { toggleCodeAnimation, toggleDribbbleAnimation } from '../../actions/action'

const pos = window.innerHeight + 2000
const DESIGN_WORK = 'DESIGN WORK'
const DEVELOPMENT_WORK = 'DEVELOPMENT WORK'
const DESIGN_TRIGGER_TEXT =
  'I design from the standpoint of both a passionate artist and a developer — mixing beauty with functionality and accessibility.'
const CODE_TRRIGGER_TEXT =
  'I code with UX and scalability at the center of my effort. I am constantly exploring new tech to bring the most game-changing experiences.'
const TRIGGER_TEXT =
  'Check out my design and code — see something that peaks your interest? Let me know!'

const DRIBBLE_LINK = 'https://dribbble.com/sammyrp'
const GH_LINK = 'https://github.com/SammyRobensParadise'

const DesignAndCodeDetailsText = styled.div`
  & {
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    text-align: left;
    z-index: ${p => (p.hide || p.hide === false ? '1' : '90')};
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    line-height: 100px;
    position: absolute;
    top: ${pos}px;
    left: 180px;
  }
`
const DesignAndCodeDetailsEl = styled.div`
  margin-top: ${p => (p.order === 'first' ? '25' : p.order === 'second' ? '315' : '0')}px;
  transition: letter-spacing 0.5s;
  &:hover {
    color: #fff;
    cursor: pointer;
    letter-spacing: 4px;
  }
`
const UnderlineStyle = styled.div`
  width: ${p => (p.order === 'first' ? '490' : p.order === 'second' ? '720' : '490')}px;
  height: 25px;
  margin-top: 20px;
  left: 180px;
  background: ${darkBlue};
`
const TriggerText = styled.div`
&{
    font-family: montserrat, sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 25px;
    width 700px;
    color: #fff
    line-height: 50px;
    -webkit-text-stroke-width: 0px;
    -webkit-text-stroke-color: none;
    position: absolute;
    margin-top: 80px;
    margin-left: 20px;
    text-shadow: 0px 2px 6px #2b2b2a;
}
`
class DesignCodeAndDetails extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
  }
  getTriggerText = () => {
    const { animateCode, animateDribbble } = this.props.Actions
    if (animateDribbble) {
      return DESIGN_TRIGGER_TEXT
    } else if (animateCode) {
      return CODE_TRRIGGER_TEXT
    } else {
      return TRIGGER_TEXT
    }
  }
  render() {
    const triggerText = this.getTriggerText()
    return (
      <DesignAndCodeDetailsText>
        <DesignAndCodeDetailsEl
          onMouseOver={() => this.props.dispatch(toggleDribbbleAnimation(true))}
          onMouseLeave={() => this.props.dispatch(toggleDribbbleAnimation(false))}
          onClick={() => window.open(DRIBBLE_LINK)}
          order={'first'}
        >
          {DESIGN_WORK}
        </DesignAndCodeDetailsEl>
        <UnderlineStyle order={'first'} />
        <TriggerText>{triggerText}</TriggerText>
        <DesignAndCodeDetailsEl
          onMouseOver={() => this.props.dispatch(toggleCodeAnimation(true))}
          onMouseLeave={() => this.props.dispatch(toggleCodeAnimation(false))}
          onClick={() => window.open(GH_LINK)}
          order={'second'}
        >
          {DEVELOPMENT_WORK}
        </DesignAndCodeDetailsEl>
        <UnderlineStyle order={'second'} />
      </DesignAndCodeDetailsText>
    )
  }
}
const mapStateToProps = state => {
  return {
    ...state
  }
}
export default connect(mapStateToProps)(DesignCodeAndDetails)

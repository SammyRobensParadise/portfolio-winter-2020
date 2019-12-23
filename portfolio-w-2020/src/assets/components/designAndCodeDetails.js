import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { darkBlue } from '../colors/common-colors'
import { toggleCodeAnimation, toggleDribbbleAnimation } from '../../actions/action'

const DESIGN_WORK = 'DESIGN WORK'
const DEVELOPMENT_WORK = 'DEVELOPMENT WORK'
const DESIGN_TRIGGER_TEXT = `I design from the standpoint of both a passionate artist and a developer — mixing beauty with functionality and accessibility.`
const CODE_TRRIGGER_TEXT = `I code with UX and scalability at the center of my effort. I am constantly exploring new tech to bring the most game-changing experiences.`
const TRIGGER_TEXT = `Check out my design and code — see something that peaks your interest? Let me know!`

const DRIBBLE_LINK = `https://dribbble.com/sammyrp/?utm_source=portfolio_2020`
const GH_LINK = `https://github.com/SammyRobensParadise/?utm_source=portfolio_2020`

const DesignAndCodeDetailsText = styled.div`
  & {
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    text-align: left;
    z-index: ${(p) => (p.hide || p.hide === false ? '1' : '90')};
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    line-height: 100px;
    position: absolute;
    padding-top: 10%;
    padding-left: 12%;
    @media screen and (max-width: 840px) {
      padding-top: 7%;
    }
  }
`
const DesignAndCodeDetailsEl = styled.div`
  margin-top: ${(p) => (p.order === 'first' ? '25' : p.order === 'second' ? '315' : '0')}px;
  transition: letter-spacing 0.5s;
  &:hover {
    color: #fff;
    cursor: none;
    letter-spacing: 4px;
  }
  @media screen and (max-width: 1380px) {
    margin-top: ${(p) => (p.order === 'first' ? '25' : p.order === 'second' ? '270' : '0')}px;
  }
  @media screen and (max-width: 1270px) {
    margin-top: ${(p) => (p.order === 'first' ? '25' : p.order === 'second' ? '240' : '0')}px;
  }
  @media screen and (max-width: 1220px) {
    font-size: 60px;
    line-height: 70px;
  }
  @media screen and (max-width: 972px) {
    margin-top: ${(p) => (p.order === 'first' ? '10' : p.order === 'second' ? '160' : '0')}px;
    -webkit-text-stroke-width: 1px;
  }
  @media screen and (max-width: 750px) {
    margin-top: ${(p) => (p.order === 'first' ? '10' : p.order === 'second' ? '120' : '0')}px;
    font-size: 50px;
  }
  @media screen and (max-width: 612px) {
    margin-top: ${(p) => (p.order === 'first' ? '5' : p.order === 'second' ? '100' : '0')}px;
    font-size: 35px;
    line-height: 65px;
  }
  @media screen and (max-width: 540px) {
    line-height: 50px;
  }
  @media screen and (max-width: 612px) {
    margin-top: ${(p) => (p.order === 'first' ? '5' : p.order === 'second' ? '80' : '0')}px;
  }
  @media screen and (min-width: 1600px) {
    margin-top: ${(p) => (p.order === 'first' ? '25' : p.order === 'second' ? '360' : '0')}px;
  }
`
const UnderlineStyle = styled.div`
  width: ${(p) => (p.order === 'first' ? '490' : p.order === 'second' ? '720' : '490')}px;
  height: 25px;
  margin-top: 20px;
  left: 180px;
  background: ${darkBlue};
  @media screen and (max-width: 1220px) {
    font-size: 60px;
    width: ${(p) => (p.order === 'first' ? '300' : p.order === 'second' ? '430' : '420')}px;
    margin-top: 10px;
  }
  @media screen and (max-width: 1080px) {
    margin-top: 5px;
  }
  @media screen and (max-width: 750px) {
    width: ${(p) => (p.order === 'first' ? '240' : p.order === 'second' ? '360' : '420')}px;
    margin-top: 2px;
    height: 10px;
  }
  @media screen and (max-width: 612px) {
    width: ${(p) => (p.order === 'first' ? '180' : p.order === 'second' ? '250' : '420')}px;
  }
`
const TriggerText = styled.div`
&{
    font-family: montserrat, sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 25px;
    width: 700px;
    color: #fff;
    line-height: 50px;
    -webkit-text-stroke-width: 0px;
    -webkit-text-stroke-color: none;
    position: absolute;
    margin-top: 80px;
    margin-left: 20px;
    text-shadow: 0px 2px 6px #2b2b2a;
    @media screen and (max-width: 1380px){
      width: 650px;
      margin-top: 60px;
    }
    @media screen and (max-width: 1220px){
      width: 550px;
      margin-top: 40px;
    }
    @media screen and (max-width: 1080px){
      font-size: 16px;
      width: 500px;
      line-height: 40px;
    }
    @media screen and (max-width: 972px){
      width: 420px;
    }
    @media screen and (max-width: 920px){
      line-height: 30px;
    }
    @media screen and (max-width: 820px){
      line-height:  25px;
      margin-top: 30px;
    }
    @media screen and (max-width: 800px){
      width: 360px;
    }
    @media screen and (max-width: 700px){
      width: 300px;
      font-size: 12px;
      line-height: 18px;
    }
    @media screen and (max-width: 600px){
      width: 260px;
    }
    @media screen and (max-width: 540px){
      width: 200px;
      margin-top: 15px;
    }
    @media screen and (max-width: 460px){
      font-size: 9px;
    }
    @media screen and (min-width: 1600px){
      margin-top: 120px;
    }
}
`
class DesignCodeAndDetails extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
    }
  }
  
/**
 * gets the triggering text for animations
 * @param {} none
 */
  getTriggerText = () => {
    const { Actions } = this.props
    const { animateCode, animateDribbble } = Actions
    if (animateDribbble) {
      return DESIGN_TRIGGER_TEXT
    }
    if (animateCode) {
      return CODE_TRRIGGER_TEXT
    }
    return TRIGGER_TEXT
  }

  render() {
    const triggerText = this.getTriggerText()
    const { dispatch } = this.props
    return (
      <DesignAndCodeDetailsText>
        <DesignAndCodeDetailsEl
          onMouseOver={() => dispatch(toggleDribbbleAnimation(true))}
          onFocus={() => dispatch(toggleDribbbleAnimation(true))}
          onMouseLeave={() => dispatch(toggleDribbbleAnimation(false))}
          onClick={() => window.open(DRIBBLE_LINK)}
          order="first"
        >
          {DESIGN_WORK}
        </DesignAndCodeDetailsEl>
        <UnderlineStyle order="first" />
        <TriggerText>{triggerText}</TriggerText>
        <DesignAndCodeDetailsEl
          onMouseOver={() => dispatch(toggleCodeAnimation(true))}
          onFocus={() => dispatch(toggleCodeAnimation(true))}
          onMouseLeave={() => dispatch(toggleCodeAnimation(false))}
          onClick={() => window.open(GH_LINK)}
          order="second"
        >
          {DEVELOPMENT_WORK}
        </DesignAndCodeDetailsEl>
        <UnderlineStyle order="second" />
      </DesignAndCodeDetailsText>
    )
  }
}
DesignCodeAndDetails.defaultProps = {
  Actions: () => {},
  dispatch: () => {},
}
DesignCodeAndDetails.propTypes = {
  Actions: PropTypes.func,
  dispatch: PropTypes.func,
}
const mapStateToProps = (state) => ({
  ...state,
})
export default connect(mapStateToProps)(DesignCodeAndDetails)

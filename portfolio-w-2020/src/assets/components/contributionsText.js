import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { keyframes, css } from 'styled-components'
import { white } from '../colors/common-colors'
import { toggleContributionText, toggleContributionAnimation } from '../../actions/action'

const ContributionsList = styled.div`
  font-family: impact-urw, sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 30%;
  text-align: left;
  z-index: ${(p) => (p.hide ? '-3' : '90')};
  color: ${(p) => (p.active ? white : 'transparent')};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${white};
  line-height: 50px;
  position: absolute;
  padding-left: 23%;
  padding-top: 130px;
  @media screen and (max-width: 1300px) {
    padding-top: 100px;
  }
  @media screen and (max-width: 1010px) {
    padding-top: 80px;
  }
  @media screen and (max-width: 800px) {
    padding-top: 60px;
  }
  @media screen and (max-width: 700px) {
    padding-top: 50px;
  }
  @media screen and (max-width: 450px) {
    padding-top: 30px;
  }
  @media screen and (min-width: 1500px) {
    padding-top: 170px;
  }
  @media screen and (min-width: 1700px) {
    padding-top: 200px;
  }
  @media screen and (min-width: 2000px) {
    padding-top: 260px;
  }
  @media screen and (min-width: 2300px) {
    padding-top: 300px;
  }
  @media screen and (min-width: 2600px) {
    padding-top: 360px;
  }
  @media screen and (min-width: 3000px) {
    padding-top: 360px;
  }
`
const move = keyframes`
  0%{
   transform: translateX(0px);
   opacity:  1;
  }
  33% {
   transform: translateX(2000px);
   opacity: 0;
  }
  66% {
    transform: translateX(2000px);
    opacity:  0px;
   }
   100% {
    transform: translateX(0px);
    opacity:  1px;
   }
`
/**
 *
 * @param {string} num
 */
const animation = (num) => css`
    ${move} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) ${num}s forwards;`

const ContribListEl = styled.h2`
  font-family: impact-urw, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 100px;
  width: 600px;
  text-align: left;
  z-index: ${(p) => (p.hide ? '-3' : '90')};
  color: ${(p) => (p.active ? white : 'transparent')};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${white};
  line-height: 30px;
  animation: ${(p) => (p.hide ? animation(p.num) : 'none')};
  &:hover {
    cursor: none;
  }
  &:focus {
    text-decoration: underline;
    outline: none;
  }
  @media screen and (max-width: 1300px) {
    font-size: 80px;
  }
  @media screen and (max-width: 1010px) {
    font-size: 60px;
  }
  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
  @media screen and (max-width: 680px) {
    font-size: 40px;
    -webkit-text-stroke-width: 1px;
    line-height: 20px;
  }
  @media screen and (max-width: 540px) {
    font-size: 30px;
    -webkit-text-stroke-width: 0.8px;
    line-height: 15px;
  }
  @media screen and (max-width: 450px) {
    font-size: 25px;
    -webkit-text-stroke-width: 0.5px;
    line-height: 12px;
  }
  @media screen and (min-width: 1500px) {
    font-size: 100px;
  }
  @media screen and (min-width: 1700px) {
    font-size: 100px;
  }
  @media screen and (min-width: 2000px) {
    font-size: 110px;
    width: 800px;
  }
  @media screen and (min-width: 2300px) {
    font-size: 120px;
    width: 800px;
  }
  @media screen and (min-width: 2600px) {
    font-size: 160px;
    width: 1000px;
  }
  @media screen and (min-width: 3000px) {
    font-size: 200px;
    width: 1000px;
  }
`

export const HOOTSUITE = 'HOOTSUITE'
export const FINGER_FOOD = 'FINGER FOOD'
export const ENV_CANADA = 'ENV. CANADA'
export const GRAPE = 'GRAPE'

class ContributionsText extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      contributonList: [HOOTSUITE, FINGER_FOOD, ENV_CANADA, GRAPE],
      hideEl: null,
    }
  }

  /**
   * handles the element in the list that was clicked
   * and it's animations
   * @param {clickedEl} element
   */
  reOrderList = (clickedEl) => {
    const { dispatch } = this.props
    const { contributonList } = this.state
    if (contributonList.indexOf(clickedEl) !== 0) {
      this.setState({
        hideEl: true,
      })
      dispatch(toggleContributionAnimation(true))
      const slideInSlideOutPromise = new Promise((resolve) => {
        const interm = contributonList
        setTimeout(() => {
          if (interm.includes(clickedEl) && interm.indexOf(clickedEl) !== 0) {
            interm.splice(interm.indexOf(clickedEl), 1)
            interm.unshift(clickedEl)
          }
          this.setState({
            contributonList: [...interm],
          })
          dispatch(toggleContributionText(clickedEl))
        }, 1000)
        setTimeout(() => {
          resolve()
        }, 2000)
      })
      slideInSlideOutPromise.then(() => {
        this.setState({
          hideEl: null,
        })
        dispatch(toggleContributionAnimation(null))
      })
    }
  }

  handleKeyboardEvent = (event, listElement) => {
    const { key } = event
    if (key === 'Enter') {
      this.reOrderList(listElement)
      return true
    }
    return false
  }

  render() {
    const { contributonList, hideEl } = this.state

    return (
      <ContributionsList hide={hideEl}>
        <ContribListEl
          role="button"
          aria-label={contributonList[0]}
          tabIndex="0"
          hide={hideEl}
          num={0.1}
          className="el-1"
          active
          onKeyPress={(e) => {
            this.handleKeyboardEvent(e, contributonList[0])
          }}
          onClick={() => this.reOrderList(contributonList[0])}
        >
          {contributonList[0]}
        </ContribListEl>
        <ContribListEl
          role="button"
          aria-label={contributonList[1]}
          tabIndex="0"
          hide={hideEl}
          num={0.2}
          className="el-2"
          onKeyPress={(e) => {
            this.handleKeyboardEvent(e, contributonList[1])
          }}
          onClick={() => this.reOrderList(contributonList[1])}
        >
          {contributonList[1]}
        </ContribListEl>
        <ContribListEl
          role="button"
          aria-label={contributonList[2]}
          tabIndex="0"
          hide={hideEl}
          num={0.3}
          className="el-3"
          onKeyPress={(e) => {
            this.handleKeyboardEvent(e, contributonList[2])
          }}
          onClick={() => this.reOrderList(contributonList[2])}
        >
          {contributonList[2]}
        </ContribListEl>
        <ContribListEl
          role="button"
          aria-label={contributonList[3]}
          tabIndex="0"
          hide={hideEl}
          num={0.4}
          className="el-4"
          onKeyPress={(e) => {
            this.handleKeyboardEvent(e, contributonList[3])
          }}
          onClick={() => this.reOrderList(contributonList[3])}
        >
          {contributonList[3]}
        </ContribListEl>
      </ContributionsList>
    )
  }
}
ContributionsText.defaultProps = {
  dispatch: () => {},
}
ContributionsText.propTypes = {
  dispatch: PropTypes.func,
}
const mapStateToProps = (state) => ({
  ...state,
})
export default connect(mapStateToProps)(ContributionsText)

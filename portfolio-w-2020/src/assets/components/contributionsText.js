import React from 'react'
import { connect } from 'react-redux'
import { toggleContributionText, toggleContributionAnimation } from '../../actions/action'

import styled, { keyframes, css } from 'styled-components'
const ContributionsList = styled.div`
&{
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    width 600px;
    text-align: left;
    z-index: ${p => (p.hide || p.hide === false ? '1' : '90')};
    color: ${p => (p.active ? '#fff' : 'transparent')};
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    line-height: 50px;
    position: absolute;
    top: ${p => p.pos}px;
    left: ${p => p.hpos}px;

  }
`
const move = keyframes`
  0%{
   transform: translateX(0px);
  }
  33% {
   transform: translateX(600px);
  }
  66% {
    transform: translateX(600px);
   }
   100%{
    transform: translateX(0px);
   }
`
const animation = num =>
  css`
    ${move} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) ${num}s forwards;
  `
const ContribListEl = styled.h2`
font-family: impact-urw, sans-serif;
font-weight: 400;
font-style: normal;
font-size: 100px;
width 600px;
text-align: left;
z-index: ${p => (p.hide || p.hide === false ? '1' : '90')};
color: ${p => (p.active ? '#fff' : 'transparent')};
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: #fff;
line-height: 30px;
animation: ${p => (p.hide ? animation(p.num) : 'none')}
&:hover{
    cursor: none;
}
@media screen and (min-width: 1730px){
  font-size: 140px;
}
@media screen and (min-with: 2200px){
  font-size: 190px;
}
@media screen and (min-width: 2500px){
  font-size: 220px;
}
@media screen and (min-width: 2800px){
}
`

export const HOOTSUITE = 'HOOTSUITE'
export const FINGER_FOOD = 'FINGER FOOD'
export const ENV_CANADA = 'ENV. CANADA'
export const GRAPE = 'GRAPE'
let position = 1030
let horizontalPosition = 330
if (window.innerWidth >= 1550) {
  position = (window.innerWidth - 1600) * 0.2 + position
  horizontalPosition = (window.innerWidth - 1500) * 0.2 + horizontalPosition
}
class ContributionsText extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      contributonList: [HOOTSUITE, FINGER_FOOD, ENV_CANADA, GRAPE],
      hideEl: null,
      currentContributionsText: HOOTSUITE,
      position: position,
      horizontalPosition: horizontalPosition
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1550) {
        this.setState({
          position: (window.innerWidth - 1600) * 0.2 + position,
          horizontalPosition: (window.innerWidth - 1900) * 0.2 + horizontalPosition
        })
        console.log(horizontalPosition)
      }
    })
  }
  reOrderList = clickedEl => {
    if (this.state.contributonList.indexOf(clickedEl) !== 0) {
      this.setState({
        hideEl: true
      })
      this.props.dispatch(toggleContributionAnimation(true))
      let slideInSlideOutPromise = new Promise(resolve => {
        let interm = this.state.contributonList
        setTimeout(() => {
          if (interm.includes(clickedEl) && interm.indexOf(clickedEl) !== 0) {
            interm.splice(interm.indexOf(clickedEl), 1)
            interm.unshift(clickedEl)
          }
          this.setState({
            contributonList: [...interm]
          })
          this.props.dispatch(toggleContributionText(clickedEl))
        }, 1000)
        setTimeout(() => {
          resolve()
        }, 2000)
      })
      slideInSlideOutPromise.then(() => {
        this.setState({
          hideEl: null
        })
        this.props.dispatch(toggleContributionAnimation(null))
      })
    }
  }
  render() {
    const { contributonList, hideEl, position, horizontalPosition } = this.state
    return (
      <ContributionsList hide={hideEl} hpos={horizontalPosition} pos={position}>
        <ContribListEl
          hide={hideEl}
          num={0.1}
          className='el-1'
          active
          onClick={() => this.reOrderList(contributonList[0])}
        >
          {this.state.contributonList[0]}
        </ContribListEl>
        <ContribListEl
          hide={hideEl}
          num={0.2}
          className='el-2'
          onClick={() => this.reOrderList(contributonList[1])}
        >
          {this.state.contributonList[1]}
        </ContribListEl>
        <ContribListEl
          hide={hideEl}
          num={0.3}
          className='el-3'
          onClick={() => this.reOrderList(contributonList[2])}
        >
          {this.state.contributonList[2]}
        </ContribListEl>
        <ContribListEl
          hide={hideEl}
          num={0.4}
          className='el-4'
          onClick={() => this.reOrderList(contributonList[3])}
        >
          {this.state.contributonList[3]}
        </ContribListEl>
      </ContributionsList>
    )
  }
}
const mapStateToProps = state => {
  return {
    ...state
  }
}
export default connect(mapStateToProps)(ContributionsText)

import React from 'react'
import { connect } from 'react-redux'
import { toggleContributionText } from '../../actions/action'

import styled, { keyframes, css } from 'styled-components'
const pos = window.innerHeight + 220
const ContributionsList = styled.div`
&{
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    width 600px;
    text-align: left;
    z-index: ${p => (p.hide || p.hide === false ? '1' : '90')};
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    line-height: 50px;
    position: absolute;
    top: ${pos}px;
    left: 330px;

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
color: transparent;
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: #fff;
line-height: 30px;
animation: ${p => (p.hide ? animation(p.num) : 'none')}
&:hover{
    cursor: pointer;
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
      currentContributionsText: HOOTSUITE
    }
  }
  reOrderList = clickedEl => {
    if (this.state.contributonList.indexOf(clickedEl) !== 0) {
      this.setState({
        hideEl: true
      })
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
      })
    }
  }
  render() {
    const { contributonList, hideEl } = this.state
    return (
      <ContributionsList hide={hideEl}>
        <ContribListEl
          hide={hideEl}
          num={0.1}
          className='el-1'
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

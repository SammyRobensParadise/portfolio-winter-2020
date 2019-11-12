import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isPureish } from '@babel/types'
const pos = window.innerHeight + 220
const ContributionsList = styled.div`
&{
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    width 600px;
    text-align: left;
    z-index: 90;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    line-height: 50px;
    position: absolute;
    top: ${pos}px;
    left: 330px;

  }
`
const ContribListEl = styled.h2`
font-family: impact-urw, sans-serif;
font-weight: 400;
font-style: normal;
font-size: 100px;
width 600px;
text-align: left;
z-index: 90;
color: transparent;
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: #fff;
line-height: 30px;
&:hover{
    cursor: pointer;
}
`
const HOOTSUITE = 'HOOTSUITE'
const FINGER_FOOD = 'FINGER FOOD'
const ENV_CANDADA = 'ENV. CANADA'
const GRAPE = 'GRAPE'
class ContributionsText extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      contributonList: [HOOTSUITE, FINGER_FOOD, ENV_CANDADA, GRAPE],
      clickedel: null
    }
  }
  reOrderList = clickedEl => {
    let interm = this.state.contributonList
    if (interm.includes(clickedEl) && interm.indexOf(clickedEl) !== 0) {
      interm.splice(interm.indexOf(clickedEl), 1)
      interm.unshift(clickedEl)
    }
    this.setState({
      contributonList: interm,
      clickedel: clickedEl
    })
  }
  render() {
    const { contributonList } = this.state
    return (
      <ContributionsList>
        <ContribListEl onClick={() => this.reOrderList(contributonList[0])}>
          {this.state.contributonList[0]}
        </ContribListEl>
        <ContribListEl onClick={() => this.reOrderList(contributonList[1])}>
          {this.state.contributonList[1]}
        </ContribListEl>
        <ContribListEl onClick={() => this.reOrderList(contributonList[2])}>
          {this.state.contributonList[2]}
        </ContribListEl>
        <ContribListEl onClick={() => this.reOrderList(contributonList[3])}>
          {this.state.contributonList[3]}
        </ContribListEl>
      </ContributionsList>
    )
  }
}
export default ContributionsText

import React from 'react'
import styled from 'styled-components'

const landingText = 'Designer, Developer, Student of UX'
const HeaderText = styled.h1`
  @import url('https://use.typekit.net/ucu5nmz.css');
  font-family: impact-urw, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 180px;
  width 600px;
  text-align: left;
  font: Regular 200px/244px Impact;
  letter-spacing: 0;
  z-index:  99;
  position: relative;
  left: 100px;
  margin-top: 60px;
  color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #fff;
  line-height: 185px;
`
const LandingText = () => {
  return <HeaderText>{landingText}</HeaderText>
}

export default LandingText

import React from 'react'
import styled from 'styled-components'

const landingText = 'Designer, Developer, Student of UX'
const HeaderText = styled.h1`
&&&{
  @import url('https://use.typekit.net/ucu5nmz.css');
  font-family: impact-urw, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 180px;
  width 600px;
  text-align: left;
  z-index:  99;
  position: absolute;
  left: 60px;
  top: 60px;
  color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #fff;
  line-height: 185px;
  margin-block-end: 0px !important ;
  margin-block-start: 0px !important ;
  margin: 0;
}
`
const LandingText = () => {
  return <HeaderText>{landingText}</HeaderText>
}

export default LandingText

import React from 'react'
import styled from 'styled-components'
import { white } from '../colors/common-colors'
const landingParagraph = (
  <div>
    I am <b>Sammy Robens-Paradise</b> from the University of Waterloo and I study the ways humans
    interface with technology.
  </div>
)
const landingParagraphTwo =
  'I have worked with companies like LEGO, Hootsuite,  Kroger, and Lululemon to create beautiful products and experiences.'
const ParaText = styled.p`
  &&&{
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 25px;
  width 600px;
  text-align: left;
  letter-spacing: 0;
  z-index:  99;
  position: relative;
  color: ${white};
  line-height: 60px;
  width: 500px;
  right: 60px;
  text-shadow: 0px 2px 6px #2b2b2a;
  }
`
const TextWrapper = styled.div`
  float: right;
  position: relative;
  top: 200px;

`
const LandingText = () => {
  return (
    <TextWrapper>
      <ParaText>{landingParagraph}</ParaText>
      <ParaText>{landingParagraphTwo}</ParaText>
    </TextWrapper>
  )
}

export default LandingText

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
const ParaText = styled.div`
  &&&{
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 25px;
  text-align: left;
  letter-spacing: 0;
  z-index:  99;
  position: relative;
  color: ${white};
  line-height: 60px;
  width: 500px;
  position: relative;
  margin: 0 auto;
  float: right;
  padding-right: 90%;
  margin-top: 20px;
  text-shadow: 0px 2px 6px #2b2b2a;
  @media screen and (max-width: 2600px){
    padding-right  60%;
  }
  @media screen and (max-width: 2200px){
    padding-right: 40%;
  }
  @media screen and (max-width: 2100px){
    padding-right: 20%;
  }
  }
`
const TextWrapper = styled.div`
  float: right;
  position: relative;
  top: 180px;
  width: 600px;

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

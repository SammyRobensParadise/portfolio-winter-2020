import React from 'react'
import styled, { css } from 'styled-components'

const ProjectDetailsContainer = styled.div`
  & {
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    text-align: center;
    z-index: 90;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    line-height: 100px;
    position: absolute;
    display: inline-grid;
    width: 100%;
    grid-template-columns: 50% 50%;
  }
`
const TL = css`
  padding-top: 40px;
  padding-left: 45%;
  padding-right: 50%;
  @media screen and (max-width: 1250px) {
    transform: scale(0.9);
    padding-left: 42%;
    margin-top: 50px;
  }
  @media screen and (max-width: 1100px){
    padding-left: 35%;
  }
`
const TR = css`
  padding-top: 40px;
  padding-left: 35%;
  padding-right: 50%;
  padding-top: 80px;
  @media screen and (max-width: 1250px) {
    transform: scale(0.9);
    padding-left: 33%;
    margin-top: 60px;
  }
  @media screen and (max-width: 1180px) {
    padding-left: 30%;
    margin-top: 50px;
  }
`
const BL = css`
  padding-top: 30px;
  padding-left: 45%;
  padding-right: 50%;
  @media screen and (max-width: 1390px) {
    padding-top: 10px;
    margin-top: 30px;
  }
  @media screen and (max-width: 1250px) {
    transform: scale(0.9);
    padding-left: 42%;
    margin-top: 20px;
  }
  @media screen and (max-width: 1140px) {
    transform: scale(0.9);
    padding-left: 40%;
    margin-top: 0px;
  }
  @media screen and (max-width: 1100px){
    padding-left: 35%;
  }
`
const BR = css`
  padding-top: 30px;
  padding-left: 35%;
  padding-right: 50%;
  padding-top: 80px;
  @media screen and (max-width: 1390px) {
    padding-top: 20px;
    margin-top: 40px;
  }
  @media screen and (max-width: 1250px) {
    transform: scale(0.9);
    padding-left: 33%;
    margin-top: 20px;
  }
  @media screen and (max-width: 1180px) {
    padding-left: 30%;
    margin-top: 20px;
  }
`

const ProjectDetailsEl = styled.h2`
&{
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    width 300px;
    text-align: center;
    z-index: 90;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    line-height: 100px;
    transition: letter-spacing 0.5s;
    align-items: center;
    &:hover{
      color: #fff;
      cursor: none;
      letter-spacing: 6px;
    }
    ${p => (p.local === 'tl' ? TL : p.local === 'tr' ? TR : p.local === 'bl' ? BL : BR)}
    @media screen and (max-width: 1100px){
      transform: scale(0.75)
    }
  }
`
const GLOBAL_WINERY = 'GLOBAL WINERY'
const GRAPE = 'GRAPE'
const BC_FERRIES = 'BC FERRIES'
const EB_WEB = 'EB WEB'

const GLOBAL_WINERY_EXTERNAL_LINK = 'https://sammyrp.com/global-winery/?utm_source=portfolio_2020'
const GRAPE_EXTERNAL_LINK = 'https://grape-promo.firebaseapp.com/?utm_source=portfolio_2020'
const BC_FERRIES_EXTERNAL_LINK = 'https://sammyrp.com/bc-ferries-redesign?utm_source=portfolio_2020'
const EB_WEB_EXTERNAL_LINK =
  'https://emilybandel.github.io/webpage-application/?utm_source=portfolio_2020'

class ProjectDetails extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
  }
  render() {
    return (
      <ProjectDetailsContainer>
        <ProjectDetailsEl onClick={() => window.open(GLOBAL_WINERY_EXTERNAL_LINK)} local={'tl'}>
          {GLOBAL_WINERY}
        </ProjectDetailsEl>
        <ProjectDetailsEl onClick={() => window.open(GRAPE_EXTERNAL_LINK)} local={'tr'}>
          {GRAPE}
        </ProjectDetailsEl>
        <ProjectDetailsEl onClick={() => window.open(BC_FERRIES_EXTERNAL_LINK)} local={'bl'}>
          {BC_FERRIES}
        </ProjectDetailsEl>
        <ProjectDetailsEl onClick={() => window.open(EB_WEB_EXTERNAL_LINK)} local={'br'}>
          {EB_WEB}
        </ProjectDetailsEl>
      </ProjectDetailsContainer>
    )
  }
}
export default ProjectDetails

import React from 'react'
import styled, { css } from 'styled-components'
import {white} from '../colors/common-colors'
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
    -webkit-text-stroke-color: ${white};
    line-height: 100px;
    position: absolute;
    display: inline-grid;
    width: 100%;
    grid-template-columns: 50% 50%;
    @media screen and (max-width: 1000px) {
      display: grid;
      grid-template-rows: 350px 0px 350px;
    }
    @media screen and (max-width: 925px) {
      transform: translateX(-30px);
      grid-template-rows: 320px 0px 350px;
    }
    @media screen and (max-width: 860px) {
      grid-template-rows: 300px 0px 350px;
      transform: translateX(-40px);
    }
    @media screen and (max-width: 780px) {
      grid-template-rows: 270px 0px 350px;
    }
    @media screen and (max-width: 740px) {
      grid-template-rows: 250px 0px 350px;
      transform: translateX(-55px);
    }
    @media screen and (max-width: 670px) {
      grid-template-rows: 220px 0px 350px;
      transform: translateX(-60px);
    }
    @media screen and (max-width: 620px) {
      grid-template-rows: 200px 0px 350px;
      transform: translateX(-70px);
    }
    @media screen and (max-width: 560px) {
      grid-template-rows: 180px 0px 350px;
      transform: translateX(-80px);
    }
    @media screen and (max-width: 500px) {
      grid-template-rows: 160px 0px 350px;
      transform: translateX(-90px);
    }
    @media screen and (max-width: 430px) {
      grid-template-rows: 140px 0px 350px;
      transform: translateX(-100px);
    }
    @media screen and (max-width: 390px) {
      grid-template-rows: 118px 0px 350px;
      transform: translateX(-100px);
    }
    @media screen and (min-width: 1500px) {
      grid-template-rows: 420px 0px 390px;
      transform: translateY(20px);
    }
    @media screen and (min-width: 1650px) {
      grid-template-rows: 460px 0px 390px;
      transform: translateY(40px);
    }
    @media screen and (min-width: 1780px) {
      grid-template-rows: 500px 0px 390px;
      transform: translateY(80px) translateX(40px);
    }
    @media screen and (min-width: 1980px) {
      grid-template-rows: 600px 0px 390px;
      transform: translateY(60px) translateX(40px);
    }
    @media screen and (min-width: 2200px) {
      padding-top: 100px;
      grid-template-rows: 600px 0px 390px;
      transform: translateY(60px) translateX(60px);
    }
    @media screen and (min-width: 2500px) {
      padding-top: 140px;
    }
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
  @media screen and (max-width: 1100px) {
    padding-left: 35%;
  }
  @media screen and (max-width: 1082px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 880px) {
    margin-top: 10px;
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
  @media screen and (max-width: 1082px) {
    padding-left: 20%;
  }
  @media screen and (max-width: 880px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 0px;
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
  @media screen and (max-width: 1100px) {
    padding-left: 35%;
  }
  @media screen and (max-width: 1044px) {
    padding-top: 0px;
    transform: translateY(-30px) scale(0.6);
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
  @media screen and (max-width: 1082px) {
    padding-left: 20%;
  }
  @media screen and (max-width: 1044px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 780px) {
    padding-top: 40px;
  }
`

const ProjectDetailsEl = styled.h2`
  & {
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    width: 300px;
    text-align: center;
    z-index: 90;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${white};
    line-height: 100px;
    transition: letter-spacing 0.5s;
    align-items: center;
    &:hover {
      color: ${white};
      cursor: none;
      letter-spacing: 6px;
    }
    ${(p) => (p.local === 'tl' ? TL : p.local === 'tr' ? TR : p.local === 'bl' ? BL : BR)}
    @media screen and (max-width: 1100px) {
      transform: scale(0.75);
    }
    @media screen and (max-width: 1044px) {
      transform: scale(0.6);
    }
    @media screen and (max-width: 870px) {
      transform: scale(0.5);
    }
    @media screen and (max-width: 620px) {
      transform: scale(0.4);
    }
    @media screen and (max-width: 470px) {
      transform: scale(0.3);
    }
  }
`
const GLOBAL_WINERY = 'GLOBAL WINERY'
const GRAPE = 'GRAPE'
const BC_FERRIES = 'BC FERRIES'
const EB_WEB = 'EB WEB'

const GLOBAL_WINERY_EXTERNAL_LINK = 'https://sammyrp.com/global-winery/?utm_source=portfolio_2020'
const GRAPE_EXTERNAL_LINK = 'https://grape-promo.firebaseapp.com/?utm_source=portfolio_2020'
const BC_FERRIES_EXTERNAL_LINK = 'https://sammyrp.com/bc-ferries-redesign.html?utm_source=portfolio_2020'
const EB_WEB_EXTERNAL_LINK = 'https://emilybandel.github.io/webpage-application/?utm_source=portfolio_2020'

class ProjectDetails extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
    }
  }

  render() {
    return (
      <ProjectDetailsContainer>
        <ProjectDetailsEl onClick={() => window.open(GLOBAL_WINERY_EXTERNAL_LINK)} local="tl">
          {GLOBAL_WINERY}
        </ProjectDetailsEl>
        <ProjectDetailsEl onClick={() => window.open(GRAPE_EXTERNAL_LINK)} local="tr">
          {GRAPE}
        </ProjectDetailsEl>
        <ProjectDetailsEl onClick={() => window.open(BC_FERRIES_EXTERNAL_LINK)} local="bl">
          {BC_FERRIES}
        </ProjectDetailsEl>
        <ProjectDetailsEl onClick={() => window.open(EB_WEB_EXTERNAL_LINK)} local="br">
          {EB_WEB}
        </ProjectDetailsEl>
      </ProjectDetailsContainer>
    )
  }
}
export default ProjectDetails

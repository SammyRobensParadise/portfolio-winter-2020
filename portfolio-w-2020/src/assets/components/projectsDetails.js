import React from 'react'
import styled from 'styled-components'

const pos = window.innerHeight + 1000
const ProjectDetailsContainer = styled.div`
  & {
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    text-align: center;
    z-index: ${p => (p.hide || p.hide === false ? '1' : '90')};
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    line-height: 100px;
    position: absolute;
    top: ${pos}px;
    left: 330px;
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
    z-index: ${p => (p.hide || p.hide === false ? '1' : '90')};
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    line-height: 100px;
    position: absolute;
    top: ${p =>
      p.local === 'tl'
        ? '20'
        : p.local === 'tr'
        ? '80'
        : p.local === 'bl'
        ? '400'
        : p.local === 'br'
        ? '450'
        : '100'}px;
    left: ${p =>
      p.local === 'tl'
        ? '0'
        : p.local === 'tr'
        ? '600'
        : p.local === 'bl'
        ? '0'
        : p.local === 'br'
        ? '600'
        : '0'}px;
        transition: letter-spacing 0.5s;
        &:hover{
            color: #fff;
            cursor: pointer;
            letter-spacing: 6px;
        }
  }
`
const GLOBAL_WINERY = 'GLOBAL WINERY'
const GRAPE = 'GRAPE'
const BC_FERRIES = 'BC FERRIES'
const EB_WEB = 'EB WEB'

const GLOBAL_WINERY_EXTERNAL_LINK = 'https://sammyrp.com/global-winery'
const GRAPE_EXTERNAL_LINK = 'https://grape-promo.firebaseapp.com/'
const BC_FERRIES_EXTERNAL_LINK = 'https://sammyrp.com/bc-ferries-redesign'
const EB_WEB_EXTERNAL_LINK = 'https://emilybandel.github.io/webpage-application/'

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

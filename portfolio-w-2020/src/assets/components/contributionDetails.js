import React from 'react'
import { connect } from 'react-redux'
import { HOOTSUITE, FINGER_FOOD, GRAPE, ENV_CANADA } from './contributionsText'
import styled, { keyframes, css } from 'styled-components'

const pos = window.innerHeight + 260

const HOOTSUITE_DETAILS_TEXT =
  'I write and deploy code to 16 million users on a daily basis, driving product growth and an unparalleled tool belt  to social media gurus. '
const FINGER_FOOD_DETAILS_TEXT =
  'I developed a system to quantify UX world class brands like LEGO, and led QA infrastructure development on bleeding edge mixed reality projects.'
const ENV_CANADA_DETAILS_TEXT =
  "working with Environment and Climate Change Canada's Transportation Division to develop software engineering solutions assisting regulatory administration."
const GRAPE_DETAILS_TEXT =
  'Working to build a platform that will change the way people learn code through interactive, tutorials by humans, for humans'
const HOOTSUITE_JOB_TITLE = 'Software Developer'
const FINGER_FOOD_JOB_TITLE = 'QA Lead'
const ENV_CANADA_JOB_TITLE = 'Software Engineer'
const GRAPE_JOB_TITLE = 'Product designer & Developer'
const HOOTSUITE_EXTERNAL_LINK = 'https://hootsuite.com/'
const FINGER_FOOD_EXTERNAL_LINK = 'https://sammyrp.com/finger-food-atg-projects.html'
const ENV_CANADA_EXTERNAL_LINK =
  'https://www.canada.ca/en/environment-climate-change/corporate/mandate.html'
const GRAPE_EXTERNAL_LINK = 'https://grape-promo.firebaseapp.com/'
const ContributionDetailsContainer = styled.div`
&{
    font-family: montserrat, sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 25px;
    width 300px;
    z-index: ${p => (p.hide || p.hide === false ? '1' : '90')};
    color: #fff
    line-height: 50px;
    position: absolute;
    top: ${pos}px;
    right: 180px;

  }
`
const ContributionDetailsHeader = styled.h2`
top: 0px;
font-family: montserrat, sans-serif;
font-weight: 200;
font-style: normal;
font-size: 25px;
width 350px;
text-align: left;
letter-spacing: 0;
text-decoration: underline;
`
const ContributionDetailsText = styled.p`
top: 0px;
font-family: montserrat, sans-serif;
font-weight: 200;
font-style: normal;
font-size: 25px;
width 350px;
text-align: left;
letter-spacing: 0;
`
const ContributionDetailsButton = styled.div`
text-align: center;
font-family: montserrat, sans-serif;
font-weight: 200;
font-style: normal;
font-size: 25px;
width 350px;
height: 100px;
z-index: ${p => (p.hide || p.hide === false ? '1' : '90')};
color: #fff
line-height: 100px;
position: absolute;
background: #203F8F;
transition: letter-spacing 0.5s;
&:hover,&:active {
    cursor: pointer;
    background: white;
    color: #203F8F;
    letter-spacing: 6px;
}
`
class ContributionDetails extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
    debugger
  }
  getExternalJobAction = p => {
    switch (p) {
      case HOOTSUITE: {
        return HOOTSUITE_EXTERNAL_LINK
      }
      case FINGER_FOOD: {
        return FINGER_FOOD_EXTERNAL_LINK
      }
      case ENV_CANADA: {
        return ENV_CANADA_EXTERNAL_LINK
      }
      case GRAPE: {
        return GRAPE_EXTERNAL_LINK
      }
      default: {
        return HOOTSUITE_EXTERNAL_LINK
      }
    }
  }

  getJobTitle = p => {
    switch (p) {
      case HOOTSUITE: {
        return HOOTSUITE_JOB_TITLE
      }
      case FINGER_FOOD: {
        return FINGER_FOOD_JOB_TITLE
      }
      case ENV_CANADA: {
        return ENV_CANADA_JOB_TITLE
      }
      case GRAPE: {
        return GRAPE_JOB_TITLE
      }
      default: {
        return HOOTSUITE_JOB_TITLE
      }
    }
  }
  getCurrentContributionDetails = p => {
    switch (p) {
      case HOOTSUITE: {
        return HOOTSUITE_DETAILS_TEXT
      }
      case FINGER_FOOD: {
        return FINGER_FOOD_DETAILS_TEXT
      }
      case ENV_CANADA: {
        return ENV_CANADA_DETAILS_TEXT
      }
      case GRAPE: {
        return GRAPE_DETAILS_TEXT
      }
      default: {
        return HOOTSUITE_DETAILS_TEXT
      }
    }
  }
  render() {
    const { curentContributionText } = this.props.Actions
    const titleText = this.getJobTitle(curentContributionText)
    const detailsText = this.getCurrentContributionDetails(curentContributionText)
    return (
      <ContributionDetailsContainer>
        <ContributionDetailsHeader>{titleText}</ContributionDetailsHeader>
        <ContributionDetailsText>{detailsText}</ContributionDetailsText>
        <ContributionDetailsButton
          onClick={() => window.open(this.getExternalJobAction(curentContributionText))}
        >
          More —
        </ContributionDetailsButton>
      </ContributionDetailsContainer>
    )
  }
}
const mapStateToProps = state => {
  return {
    ...state
  }
}
export default connect(mapStateToProps)(ContributionDetails)

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import styled, { keyframes, css } from 'styled-components'
// eslint-disable-next-line object-curly-newline
import { HOOTSUITE, FINGER_FOOD, GRAPE, ENV_CANADA } from './contributionsText'

const HOOTSUITE_DETAILS_TEXT = `I write and deploy code to 16 million users on a daily basis, driving product growth and an unparalleled tool belt  to social media gurus. `
const FINGER_FOOD_DETAILS_TEXT = `I developed a system to quantify UX world class brands like LEGO, and led QA infrastructure development on bleeding edge mixed reality projects.`
const ENV_CANADA_DETAILS_TEXT = `Worked with the transportation division to develop software engineering solutions assisting regulatory administration.`
const GRAPE_DETAILS_TEXT = `Working to build a platform that will change the way people learn code through interactive, tutorials by humans, for humans`
const HOOTSUITE_JOB_TITLE = 'Software Developer'
const FINGER_FOOD_JOB_TITLE = 'QA Lead'
const ENV_CANADA_JOB_TITLE = 'Software Engineer'
const GRAPE_JOB_TITLE = 'Product designer & Developer'
const HOOTSUITE_EXTERNAL_LINK = 'https://hootsuite.com/'
const FINGER_FOOD_EXTERNAL_LINK = 'https://sammyrp.com/finger-food-atg-projects.html'
const ENV_CANADA_EXTERNAL_LINK = `https://www.canada.ca/en/environment-climate-change/corporate/mandate.html`
const GRAPE_EXTERNAL_LINK = 'https://grape-promo.firebaseapp.com/'

const fadeInOut = keyframes`
0%{
    opacity: 1;
}
33%{
    opacity: 0;
}
66%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`
const detailsAnim = css`
  ${fadeInOut} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s forwards;
`
const ContributionDetailsContainer = styled.div`
  & {
    font-family: montserrat, sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 25px;
    width: 300px;
    z-index: ${(p) => (p.hide || p.hide === false ? '-1' : '90')};
    color: #fff;
    line-height: 50px;
    position: absolute;
    right: 180px;
    padding-top: 100px;
    @media screen and (max-width: 1400px) {
      right: 10%;
    }
    @media screen and (max-width: 1200px) {
      right: 7%;
      padding-top: 70px;
    }
    @media screen and (max-width: 1000px) {
      transform: scale(0.8);
      padding-top: 40px;
    }
    @media screen and (max-width: 880px) {
      padding-top: 0px;
      right: 2%;
      transform: scale(0.7);
    }
    @media screen and (max-width: 740px) {
      transform: scale(0.5);
      top: 60px;
    }
    @media screen and (max-width: 630px) {
      right: 0px;
    }
    @media screen and (max-width: 590px) {
      transform: scale(0.35) translateX(40px) translateY(-30px);
      padding-right: 0px;
    }
    @media screen and (max-width: 500px) {
      transform: scale(0.35) translateX(130px) translateY(-50px);
    }
    @media screen and (max-width: 440px) {
      transform: scale(0.35) translateX(160px) translateY(-170px);
    }
    @media screen and (min-width: 1600px) {
      padding-top: 180px;
      transform: scale(1.4);
      padding-right: 5%;
    }
    @media screen and (min-width: 2000px) {
      padding-top: 240px;
      transform: scale(1.5);
    }
  }
`
const ContributionDetailsHeader = styled.h2`
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 25px;
  width: 350px;
  text-align: left;
  letter-spacing: 0;
  text-decoration: underline;
  text-shadow: 0px 2px 6px #2b2b2a;
  animation: ${(p) => (p.show ? detailsAnim : 'none')};
`
const ContributionDetailsText = styled.p`
  top: 0px;
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 25px;
  width: 350px;
  text-align: left;
  letter-spacing: 0;
  text-shadow: 0px 2px 6px #2b2b2a;
  animation: ${(p) => (p.show ? detailsAnim : 'none')};
`
const ContributionDetailsButton = styled.div`
  text-align: center;
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 25px;
  width: 350px;
  height: 100px;
  z-index: ${(p) => (p.hide || p.hide === false ? '-1' : '90')};
  color: #fff;
  line-height: 100px;
  position: absolute;
  background: #203f8f;
  transition: letter-spacing 0.5s;
  animation: ${(p) => (p.show ? detailsAnim : 'none')};
  &:hover,
  &:active {
    cursor: none;
    background: white;
    color: #203f8f;
    letter-spacing: 6px;
  }
`
class ContributionDetails extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
    }
  }

  getExternalJobAction = (p) => {
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

  getJobTitle = (p) => {
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

  getCurrentContributionDetails = (p) => {
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
    const { curentContributionText, currentContributionAnimationState } = this.props.Actions
    const titleText = this.getJobTitle(curentContributionText)
    const detailsText = this.getCurrentContributionDetails(curentContributionText)
    return (
      <ContributionDetailsContainer>
        <ContributionDetailsHeader show={currentContributionAnimationState}>
          {titleText}
        </ContributionDetailsHeader>
        <ContributionDetailsText show={currentContributionAnimationState}>
          {detailsText}
        </ContributionDetailsText>
        <ContributionDetailsButton
          show={currentContributionAnimationState}
          onClick={() => window.open(this.getExternalJobAction(curentContributionText))}
        >
          More —
        </ContributionDetailsButton>
      </ContributionDetailsContainer>
    )
  }
}
const mapStateToProps = (state) => ({
  ...state,
})
export default connect(mapStateToProps)(ContributionDetails)

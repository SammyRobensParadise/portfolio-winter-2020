import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { white } from '../colors/common-colors'

const AboutMeText = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-left: 10%;
  @media screen and (max-width: 1245px) {
    line-height: 40px;
  }
`
const AboutMeName = styled.div`
  & {
    line-height: 50px;
    position: absolute;
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    text-align: left;
    padding-top: 80px;
    z-index: 90;
    margin: 0 auto;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    @media screen and (max-width: 1245px) {
      line-height: 40px;
    }
    @media screen and (max-width: 1060px) {
      font-size: 70px;
      padding-top: 40px;
    }
    @media screen and (max-width: 974px) {
      -webkit-text-stroke-width: 1px;
    }
    @media screen and (max-width: 800px) {
      line-height: 30px;
      font-size: 50px;
    }
    @media screen and (max-width: 640px) {
      font-size: 30px;
      padding-top: 20px;
    }
    @media screen and (max-width: 520px) {
      line-height: 20px;
      width: 90%;
    }
    @media screen and (max-width: 440px) {
      font-size: 30px;
      padding-top: 10px;
    }
  }
`
const AboutMeTitle = styled.div`
  top: 80px;
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 25px;
  width: 80%;
  text-align: left;
  letter-spacing: 0;
  z-index: 99;
  padding-top: 15%;
  position: absolute;
  color: ${white};
  line-height: 60px;
  text-shadow: 0px 2px 6px #2b2b2a;
  @media screen and (max-width: 1245px) {
    line-height: 40px;
  }
  @media screen and (max-width: 1060px) {
    font-size: 16px;
  }
  @media screen and (max-width: 800px) {
    line-height: 25px;
  }
  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
  @media screen and (max-width: 520px) {
    line-height: 18px;
    width: 90%;
  }
  @media screen and (max-width: 440px) {
    font-size: 9px;
  }
`
const DescriptionFirst = styled.div`
top: 80px;
font-family: montserrat, sans-serif;
font-weight: 200;
font-style: normal;
font-size: 25px;
width 80%;
text-align: left;
letter-spacing: 0;
z-index:  99;
position: absolute;
color: ${white};
line-height: 60px;
text-shadow: 0px 2px 6px #2d2d2a;
padding-top: 20%;
@media screen and (max-width: 1245px){
  line-height: 40px;
}
@media screen and (max-width:1060px){
  font-size: 16px;
}
@media screen and (max-width: 800px){
  line-height: 25px;
}
@media screen and (max-width: 640px){
  font-size: 12px;
}
@media screen and (max-width: 520px){
  line-height: 18px;
  width: 90%;
}
@media screen and (max-width: 440px){
  font-size:  9px;
}
`
const DescriptionPara = styled.p`
  top: 80px;
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 25px;
  width: 80%;
  text-align: left;
  letter-spacing: 0;
  z-index: 99;
  position: absolute;
  color: ${white};
  line-height: 60px;
  padding-top: 30%;
  @media screen and (max-width: 1410px) {
    padding-top: 24%;
  }
  @media screen and (max-width: 1245px) {
    line-height: 40px;
  }
  @media screen and (max-width: 1060px) {
    font-size: 16px;
  }
  @media screen and (max-width: 800px) {
    line-height: 25px;
  }
  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
  @media screen and (max-width: 520px) {
    line-height: 18px;
    width: 90%;
  }
  @media screen and (max-width: 440px) {
    font-size: 9px;
  }
`
const SAMMY_ROBENS_PARADISE = 'SAMMY ROBENS-PARADISE'
const WHAT_I_DO = 'I study Systems Design Engineering'
const DESCRIPTION_FIRST = 'In other words, I study the way humans interact with technology.'
const DESCRIPTION_PARA = `Every day we interact with dozens of different systems, from the traffic system on your commute, to your email inbox - All of these systems play a role in our every day lives. At a macro level, I study the way that all of these vastly complex systems interact with their environment, whether that is humans, animals or other systems. Systems engineering combines all aspects of modern engineering to construct, visualize and improve the way we experience the world, and beyond.`
class AboutMeDetails extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
    }
  }

  render() {
    return (
      <div>
        <AboutMeText>
          <AboutMeName>{SAMMY_ROBENS_PARADISE}</AboutMeName>
          <AboutMeTitle>
            <b>{WHAT_I_DO}</b>
          </AboutMeTitle>
          <DescriptionFirst>{DESCRIPTION_FIRST}</DescriptionFirst>
          <DescriptionPara>{DESCRIPTION_PARA}</DescriptionPara>
        </AboutMeText>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  ...state,
})
export default connect(mapStateToProps)(AboutMeDetails)

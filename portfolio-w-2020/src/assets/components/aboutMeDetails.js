import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { white} from '../colors/common-colors'

const pos = window.innerHeight + 2900
const AboutMeText = styled.div`
  position: absolute;
  top: ${pos}px;
  left: 200px;
`
const AboutMeName = styled.div`
&{
line-height: 50px;
position: absolute;
font-family: impact-urw, sans-serif;
font-weight: 400;
font-style: normal;
font-size: 100px;
width 1000px;
text-align: left;
z-index: ${p => (p.hide || p.hide === false ? '1' : '90')};
color: transparent;
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: #fff;
}
`
const AboutMeTitle = styled.div`
top: 80px;
font-family: montserrat, sans-serif;
font-weight: 200;
font-style: normal;
font-size: 25px;
width 1000px;
text-align: left;
letter-spacing: 0;
z-index:  99;
position: relative;
color: ${white};
line-height: 60px;
text-shadow: 0px 2px 6px #2b2b2a;
`
const DescriptionFirst = styled.div`
top: 80px;
font-family: montserrat, sans-serif;
font-weight: 200;
font-style: normal;
font-size: 25px;
width 1000px;
text-align: left;
letter-spacing: 0;
z-index:  99;
position: relative;
color: ${white};
line-height: 60px;
text-shadow: 0px 2px 6px #2d2d2a;
`
const DescriptionPara = styled.p`
top: 80px;
font-family: montserrat, sans-serif;
font-weight: 200;
font-style: normal;
font-size: 25px;
width 1000px;
text-align: left;
letter-spacing: 0;
z-index:  99;
position: relative;
color: ${white};
line-height: 60px;
text-shadow: 0px 2px 6px #2d2d2a;
`
const SAMMY_ROBENS_PARADISE = 'SAMMY ROBENS-PARADISE'
const WHAT_I_DO = 'I study Systems Design Engineering'
const DESCRIPTION_FIRST = 'In other words, I study the way humans interact with technology.'
const DESCRIPTION_PARA =
  'Every day we interact with dozens of different systems, from the traffic system on your commute, to your email inbox - All of these systems play a role in our every day lives. At a macro level, I study the way that all of these vastly complex systems interact with their environment, whether that is humans, animals or other systems. Systems engineering combines all aspects of modern engineering to construct, visualize and improve the way we experience the world, and beyond.'
class AboutMeDetails extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props
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
const mapStateToProps = state => {
  return {
    ...state
  }
}
export default connect(mapStateToProps)(AboutMeDetails)

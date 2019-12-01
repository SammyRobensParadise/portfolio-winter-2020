import React from 'react'
import styled from 'styled-components'
import LandingText from './landingText'
import LandingContextText from './landingContextText'

const LandingContainer = styled.div`
  position: relative;
`
class LandingWrapper extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
  }
  render() {
    return (
      <LandingContainer>
        <LandingText />
        <LandingContextText />
      </LandingContainer>
    )
  }
}

export default LandingWrapper

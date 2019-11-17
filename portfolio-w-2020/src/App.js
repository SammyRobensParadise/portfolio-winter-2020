import React from 'react'
import { connect } from 'react-redux'
import DiamondOne from './assets/common/diamondOne'
import WrapperContainer from './assets/common/wrapper'
import LandingText from './assets/components/landingText'
import LandingContextText from './assets/components/landingContextText'
import NavigationBar from './assets/components/navigationBar'
import GoButton from './assets/components/goButton'
import ContributionsSection from './assets/components/contributionsWrapper'

class App extends React.PureComponent {
  render() {
    return (
      <div className='web-App'>
        <WrapperContainer>
          <NavigationBar />
          <DiamondOne />
          <LandingText />
          <LandingContextText />
          <GoButton />
          <ContributionsSection />
        </WrapperContainer>
      </div>
    )
  }
}

export default connect()(App)

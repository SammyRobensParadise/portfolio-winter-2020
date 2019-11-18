import React from 'react'
import { connect } from 'react-redux'
import DiamondOne from './assets/common/diamondOne'
import WrapperContainer from './assets/common/wrapper'
import LandingText from './assets/components/landingText'
import LandingContextText from './assets/components/landingContextText'
import NavigationBar from './assets/components/navigationBar'
import GoButton from './assets/components/goButton'
import ContributionsSection from './assets/components/contributionsWrapper'
import ProjectSection from './assets/components/projectsWrapper'
import DesignAndCodeSection from './assets/components/designAndCodeWrapper'
import AboutMeWrapper from './assets/components/aboutMeWrapper'

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
          <ProjectSection />
          <DesignAndCodeSection />
          <AboutMeWrapper />
        </WrapperContainer>
      </div>
    )
  }
}

export default connect()(App)

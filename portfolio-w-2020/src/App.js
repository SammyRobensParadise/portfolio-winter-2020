import React from 'react'
import DiamondOne from './assets/common/diamondOne'
import WrapperContainer from './assets/common/wrapper'
import LandingText from './assets/components/landingText'
import LandingContextText from './assets/components/landingContextText'
import NavigationBar from './assets/components/navigationBar'
function App() {
  return (
    <div className='web-App'>
      <WrapperContainer>
        <NavigationBar />
        <DiamondOne />
        <LandingText />
        <LandingContextText />
      </WrapperContainer>
    </div>
  )
}

export default App

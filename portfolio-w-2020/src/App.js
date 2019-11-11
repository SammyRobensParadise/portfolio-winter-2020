import React from 'react'
import DiamondOne from './assets/common/diamondOne'
import WrapperContainer from './assets/common/wrapper'
import LandingText from './assets/components/landingText'
function App() {
  return (
    <div className='web-App'>
      <WrapperContainer>
        <DiamondOne />
        <LandingText />
      </WrapperContainer>
    </div>
  )
}

export default App

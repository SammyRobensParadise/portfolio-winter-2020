import React from 'react'
import { connect } from 'react-redux'
//import { simpleAction } from './actions/action'
import DiamondOne from './assets/common/diamondOne'
import WrapperContainer from './assets/common/wrapper'
import LandingText from './assets/components/landingText'
import LandingContextText from './assets/components/landingContextText'
import NavigationBar from './assets/components/navigationBar'
import GoButton from './assets/components/goButton'
import ContributionsSection from './assets/components/contributionsWrapper'

class App extends React.PureComponent {
  simpleAction = event => {
    this.props.simpleAction(event)
    console.log(this.props)
  }
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
const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  // simpleAction: event => dispatch(simpleAction(event))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

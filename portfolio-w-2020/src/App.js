import React from 'react'
import { connect } from 'react-redux'
import DiamondOne from './assets/common/diamondOne'
import WrapperContainer from './assets/common/wrapper'
import LandingText from './assets/components/landingText'
import LandingContextText from './assets/components/landingContextText'
import NavigationBar from './assets/components/navigationBar'
import GoButton from './assets/components/goButton'
import ContributionsSection from './assets/components/contributionsWrapper'
import { toggleTodo } from './actions/action'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      default: 'string'
    }
  }
  render() {
    console.log(this.state)
    return (
      <div
        className='web-App'
        onClick={() => this.props.dispatch(toggleTodo(this.setState({ default: 'new string' })))}
      >
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
/*const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
}) */

export default connect()(App)

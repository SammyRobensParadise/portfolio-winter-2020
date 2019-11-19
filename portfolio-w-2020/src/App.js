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
import * as paper from 'paper'
import './index.css'

let clientX = -100
let clientY = -100
let lastX = 0
let lastY = 0
let group
class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hasLoaded: false
    }
  }
  componentDidMount() {
    this.setState({
      hasLoaded: true
    })
  }
  initCursor = () => {
    const innerCursor = document.querySelector('.cursor--small')
    // add listener to track the current mouse position
    document.addEventListener('mousemove', e => {
      clientX = e.clientX
      clientY = e.clientY
    })

    // transform the innerCursor to the current mouse position
    // use requestAnimationFrame() for smooth performance
    const render = () => {
      innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`
      requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
  }

  initCanvas = () => {
    const canvas = document.querySelector('.cursor--canvas')
    const shapeBounds = {
      width: 75,
      height: 75
    }
    paper.setup(canvas)
    const strokeColor = 'rgba(255, 255, 255, 255)'
    const strokeWidth = 4
    const segments = 8
    const radius = 17

    // the base shape for the noisy circle
    const polygon = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius)
    polygon.strokeColor = strokeColor
    polygon.strokeWidth = strokeWidth
    polygon.smooth()
    group = new paper.Group([polygon])
    group.applyMatrix = false

    // function for linear interpolation of values
    const lerp = (a, b, n) => {
      return (1 - n) * a + n * b
    }


    // the draw loop of Paper.js
    // (60fps with requestAnimationFrame under the hood)
    paper.view.onFrame = event => {
      // using linear interpolation, the circle will move 0.2 (20%)
      // of the distance between its current position and the mouse
      // coordinates per Frame
      lastX = lerp(lastX, clientX, 0.2)
      lastY = lerp(lastY, clientY, 0.2)
      group.position = new paper.Point(lastX, lastY)
    }
  }

  render() {
    if (this.state.hasLoaded) {
      this.initCursor()
      this.initCanvas()
    }
    return (
      <div className='web-App'>
        <WrapperContainer>
          <div id='cur' className='cursor cursor--small'></div>
          <canvas className='cursor cursor--canvas' resize></canvas>
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

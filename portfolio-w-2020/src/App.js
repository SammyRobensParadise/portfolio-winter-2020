import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import WrapperContainer from './assets/common/wrapper'
import * as paper from 'paper'
import './index.css'

const LoadingMesh = () => {
  return (
    <div>
      <div className='mesh-loader'>
        <div className='set-one'>
          <div className='circle' />
          <div className='circle' />
        </div>
        <div className='set-two'>
          <div className='circle' />
          <div className='circle' />
        </div>
      </div>
    </div>
  )
}
const DiamondOne = lazy(() => import('./assets/common/diamondOne'))
const LandingWrapper = lazy(() => import('./assets/components/landingWrapper'))
const NavigationBar = lazy(() => import('./assets/components/navigationBar'))
const GoButton = lazy(() => import('./assets/components/goButton'))
const ContributionsSection = lazy(() => import('./assets/components/contributionsWrapper'))
const ProjectSection = lazy(() => import('./assets/components/projectsWrapper'))
const DesignAndCodeSection = lazy(() => import('./assets/components/designAndCodeWrapper'))
const AboutMeWrapper = lazy(() => import('./assets/components/aboutMeWrapper'))

export const CONTTRIBUTION_SECTION = 'CONTRIBUTION_SECTION'
export const PROJECTS_SECTION = 'PROJECTS_SECTION'
export const DESIGN_AND_CODE_SECTION = 'DESIGN_AND_CODE_SECTION'
export const ABOUT_ME_WRAPPER = 'ABOUT_ME_WRAPPER'

let clientX = -100
let clientY = -100
let lastX = 0
let lastY = 0
let group
class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hasLoaded: false,
      hasScrolled: false,
      ...props,
    }
  }
  componentDidMount() {
    this.setState({
      hasLoaded: true,
    })
  }
  initCursor = () => {
    const innerCursor = document.querySelector('.cursor.cursor--small')
    // add listener to track the current mouse position
    document.addEventListener('mousemove', (e) => {
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
    paper.view.onFrame = (event) => {
      // using linear interpolation, the circle will move (20%)
      // of the distance between its current position and the mouse
      // coordinates per Frame
      lastX = lerp(lastX, clientX, 0.2)
      lastY = lerp(lastY, clientY, 0.2)
      group.position = new paper.Point(lastX, lastY)
    }
  }
  scrollToSection = (e) => {
    if (e !== null) {
      let target = document.getElementById(e)
      target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
    }
  }
  render() {
    if (this.state.hasLoaded) {
      this.scrollToSection(this.props.currentElInScrollView)
      this.initCursor()
      this.initCanvas()
    }

    return (
      <div className='web-App'>
        <Suspense fallback={<LoadingMesh />}>
          <DiamondOne />
        </Suspense>
        <WrapperContainer>
          <Suspense fallback={<LoadingMesh />}>
            <DiamondOne />
          </Suspense>
          <div id='cur' className='cursor cursor--small'></div>
          <canvas className='cursor cursor--canvas' resize={'true'}></canvas>
          <Suspense fallback={<LoadingMesh />}>
            <NavigationBar />
          </Suspense>
          <Suspense fallback={<LoadingMesh />}>
            <LandingWrapper />
          </Suspense>
          <Suspense fallback={<LoadingMesh />}>
            <GoButton />
          </Suspense>
          <Suspense fallback={<LoadingMesh />}>
            <ContributionsSection />
          </Suspense>
          <Suspense fallback={<LoadingMesh />}>
            <ProjectSection />
          </Suspense>
          <Suspense fallback={<LoadingMesh />}>
            <DesignAndCodeSection />
          </Suspense>
          <Suspense fallback={<LoadingMesh />}>
            <AboutMeWrapper />
          </Suspense>
        </WrapperContainer>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    ...state.Scroller,
  }
}
export default connect(mapStateToProps)(App)

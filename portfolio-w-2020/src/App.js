import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as paper from 'paper'
import { withCookies, Cookies } from 'react-cookie'
import WrapperContainer from './assets/common/wrapper'
import './index.css'
// eslint-disable-next-line import/no-cycle
import {
  isInViewport, getExpectedURL, setExpectedURL, getLoadedURL,
} from './utils/url-handlers'
import { CookieHandler } from './utils/analytics'
import { COOKIES } from './assets/common/constants'

const LoadingMesh = () => (
  <div>
    <div className="mesh-loader">
      <div className="set-one">
        <div className="circle" />
        <div className="circle" />
      </div>
      <div className="set-two">
        <div className="circle" />
        <div className="circle" />
      </div>
    </div>
  </div>
)
// eslint-disable-next-line import/no-cycle
const MobileWarning = lazy(() => import('./assets/components/mobileWarning'))

const DiamondOne = lazy(() => import('./assets/common/diamondOne'))
const LandingWrapper = lazy(() => import('./assets/components/landingWrapper'))
// eslint-disable-next-line import/no-cycle
const NavigationBar = lazy(() => import('./assets/components/navigationBar'))
const GoButton = lazy(() => import('./assets/components/goButton'))
// eslint-disable-next-line import/no-cycle
const ContributionsSection = lazy(() => import('./assets/components/contributionsWrapper'))
// eslint-disable-next-line import/no-cycle
const ProjectSection = lazy(() => import('./assets/components/projectsWrapper'))
// eslint-disable-next-line import/no-cycle
const DesignAndCodeSection = lazy(() => import('./assets/components/designAndCodeWrapper'))
// eslint-disable-next-line import/no-cycle
const AboutMeWrapper = lazy(() => import('./assets/components/aboutMeWrapper'))
// eslint-disable-next-line import/no-cycle
const SocialConnect = lazy(() => import('./assets/components/connectSocial'))

const PromoteBanner = lazy(() => import('./assets/components/promoteBanner'))
/**
 * @summary
 * the following are constatns used as identifiers
 * for the sections throughout the webpage
 */
export const CONTRIBUTION_SECTION = 'contributions'
export const PROJECTS_SECTION = 'projects'
export const DESIGN_AND_CODE_SECTION = 'design-and-code'
export const ABOUT_ME_WRAPPER = 'about-me'

const WAIT_TIME_UNTIL_ELEMENT_SCROLL = 500 // ms
const WAIT_TIME_UNTIL_SHOW_COOKIE_BANNER = 2000 // ms

const shouldShowMobileScreenWarning = window.innerWidth <= 500

let clientX = -100
let clientY = -100
let lastX = 0
let lastY = 0
let group

const GetCookiePromoteBanner = ({ shoudShowCookieBanner }) => (shoudShowCookieBanner ? (
  <Suspense fallback={<LoadingMesh role="img" />}>
    <PromoteBanner role="region" shoudShowCookieBanner={shoudShowCookieBanner} />
  </Suspense>
) : null)

GetCookiePromoteBanner.propTypes = {
  shoudShowCookieBanner: PropTypes.bool.isRequired,
}
class App extends React.PureComponent {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    cookies: PropTypes.instanceOf(Cookies).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      hasLoaded: false,
      hasRenderedCursor: false,
      shoudShowCookieBanner: false,
      ...props,
    }
  }

  componentDidMount() {
    this.setState({
      hasLoaded: true,
    })
    window.addEventListener('scroll', () => {
      this.handleGlobalURL()
    })
    setTimeout(() => {
      this.scrollToSectionFromURL()
    }, WAIT_TIME_UNTIL_ELEMENT_SCROLL)
    this.HandleCookiesOnComponentMount()
  }

  HandleCookiesOnComponentMount = () => {
    const { cookies } = this.props
    // eslint-disable-next-line max-len
    const hasNotSetPrevVisitCookie = CookieHandler.getCookie(cookies, COOKIES.hasPrevVisit.name, null, false) === null
    if (hasNotSetPrevVisitCookie) {
      const dateViewed = new Date()
      const ExpireDate = new Date()
      ExpireDate.setMonth(ExpireDate.getMonth() + 3)
      CookieHandler.setCookie(cookies, COOKIES.hasPrevVisit.name, dateViewed.getTime().toString(), {
        path: '/',
        expires: ExpireDate,
        sameSite: 'lax',
      })
      return false
    }
    setTimeout(() => {
      this.setState({
        shoudShowCookieBanner: true,
      })
    }, WAIT_TIME_UNTIL_SHOW_COOKIE_BANNER)
    return true
  }

  /**
   *  handles the global URL formatting
   */
  handleGlobalURL = () => {
    if (window.scrollY <= 10) {
      setExpectedURL(window.location.origin)
      return true
    }
    const node = isInViewport()
    if (node !== null) {
      const expectedURL = getExpectedURL(node)
      setExpectedURL(expectedURL)
    }
    return null
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
    this.setState({
      hasRenderedCursor: true,
    })
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
    const lerp = (a, b, n) => (1 - n) * a + n * b

    // the draw loop of Paper.js
    // (60fps with requestAnimationFrame under the hood)
    paper.view.onFrame = () => {
      // using linear interpolation, the circle will move (20%)
      // of the distance between its current position and the mouse
      // coordinates per Frame
      lastX = lerp(lastX, clientX, 0.2)
      lastY = lerp(lastY, clientY, 0.2)
      group.position = new paper.Point(lastX, lastY)
    }
  }

  /**
   * @param {e} string
   */
  scrollToSection = (e) => {
    if (e !== null) {
      const target = document.getElementById(e)
      target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
    }
  }

  /**
   * @param {} none
   */
  scrollToSectionFromURL = () => {
    const URL = getLoadedURL()
    const { loadedSection } = URL
    if (loadedSection !== (null || undefined || '')) {
      this.scrollToSection(loadedSection)
    }
  }

  render() {
    const { hasLoaded, hasRenderedCursor, shoudShowCookieBanner } = this.state
    const { currentElInScrollView } = this.props
    if (hasLoaded && !hasRenderedCursor) {
      this.initCursor()
      this.initCanvas()
    }
    if (hasLoaded) {
      this.scrollToSection(currentElInScrollView)
    }
    return (
      <div className="web-App" id="web-wrapper">
        {shouldShowMobileScreenWarning ? (
          <Suspense fallback={<LoadingMesh role="img" />}>
            <MobileWarning />
          </Suspense>
        ) : null}
        <Suspense fallback={<LoadingMesh role="img" />}>
          <DiamondOne />
        </Suspense>
        <WrapperContainer role="main">
          <Suspense fallback={<LoadingMesh role="img" />}>
            <DiamondOne />
          </Suspense>
          <div id="cur" className="cursor cursor--small" />
          <canvas className="cursor cursor--canvas" resize="true" />
          <Suspense fallback={<LoadingMesh role="img" />}>
            <NavigationBar role="region" />
          </Suspense>
          <Suspense fallback={<LoadingMesh role="img" />}>
            <LandingWrapper role="region" />
          </Suspense>
          <Suspense fallback={<LoadingMesh role="img" />}>
            <GoButton role="region" />
          </Suspense>
          <Suspense fallback={<LoadingMesh role="img" />}>
            <ContributionsSection role="region" />
          </Suspense>
          <Suspense fallback={<LoadingMesh role="img" />}>
            <ProjectSection role="region" />
          </Suspense>
          <Suspense fallback={<LoadingMesh role="img" />}>
            <DesignAndCodeSection role="region" />
          </Suspense>
          <Suspense fallback={<LoadingMesh role="img" />}>
            <AboutMeWrapper role="region" />
          </Suspense>
          <Suspense fallback={<LoadingMesh role="img" />}>
            <SocialConnect role="region" />
          </Suspense>
          <GetCookiePromoteBanner shoudShowCookieBanner={shoudShowCookieBanner} />
        </WrapperContainer>
      </div>
    )
  }
}
App.defaultProps = {
  currentElInScrollView: null,
}
App.propTypes = {
  currentElInScrollView: PropTypes.string,
}
const mapStateToProps = (state) => ({
  ...state.Scroller,
})
export default withCookies(connect(mapStateToProps)(App))

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { scrollToSection } from '../../actions/action'
import {
  CONTRIBUTION_SECTION,
  PROJECTS_SECTION,
  DESIGN_AND_CODE_SECTION,
  ABOUT_ME_WRAPPER,
} from '../../App'
import { white } from '../colors/common-colors'

const Nav = styled.div`
  height: 60px;
  width: 100%;
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 25px;
  text-align: right;
  letter-spacing: 0;
  z-index: 99;
  color: ${white};
  line-height: 30px;
  text-shadow: 0px 2px 3px #2b2b2a;
  position: fixed;
  float: right;
  z-index: 100000;
`
const NavEl = styled.div`
  display: inline-block;
  margin-block-start: 20px;
  margin-block-end: 20px;
  margin-left: 30px;
  margin-right: 30px;
  border-color: ${white};
  border-style: solid;
  border-width: 0px;
  transition: border-width 0.3 linear 1s;
  transition: letter-spacing 0.5s;
  z-index: 100000;
  &:hover,
  &:active {
    cursor: none;
    border-width: 2px 0px 2px 0px;
    margin-block-start: 18px;
    letter-spacing: 6px;
    @media screen and (max-width: 780px) {
      letter-spacing: 2px;
    }
    @media screen and (max-width: 500px) {
      margin-block-start: 8px;
    }
  }
  &:after {
    float: left;
  }
  @media screen and (max-width: 780px) {
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 8px;
    margin-right: 8px;
    line-height: 25px;
    margin-block-start: 10px;
    margin-block-end: 10px;
  }
`
const ME = 'Me'
const CODE = 'Code'
const DESIGN = 'Design'
const PROJECTS = 'Projects'
const CONTRIBUTIONS = 'Contributions'
const PORTFOLIO_2019 = 'Portfolio 2019'
const PORTFOLIO_2019_UTM_SRC = 'portfolio-2020-ref'
const PORTFOLIO_2019_LINK = 'https://portfolio-app-1091c.firebaseapp.com'

class NavigationBar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
    }
  }

  render() {
    const { dispatch } = this.props
    return (
      <Nav>
        <NavEl onClick={() => dispatch(scrollToSection(ABOUT_ME_WRAPPER))}>{ME}</NavEl>
        <NavEl onClick={() => dispatch(scrollToSection(DESIGN_AND_CODE_SECTION))}>{CODE}</NavEl>
        <NavEl onClick={() => dispatch(scrollToSection(DESIGN_AND_CODE_SECTION))}>{DESIGN}</NavEl>
        <NavEl onClick={() => dispatch(scrollToSection(PROJECTS_SECTION))}>{PROJECTS}</NavEl>
        <NavEl onClick={() => dispatch(scrollToSection(CONTRIBUTION_SECTION))}>
          {CONTRIBUTIONS}
        </NavEl>
        <NavEl
          onClick={() =>
            window.open(`${PORTFOLIO_2019_LINK}/?utm_source=${PORTFOLIO_2019_UTM_SRC}`)
          }
        >
          {PORTFOLIO_2019}
        </NavEl>
      </Nav>
    )
  }
}
NavigationBar.defaultProps = {
  dispatch: () => {},
}
NavigationBar.propTypes = {
  dispatch: PropTypes.func,
}
const mapStateToProps = (state) => ({
  ...state,
})
export default connect(mapStateToProps)(NavigationBar)

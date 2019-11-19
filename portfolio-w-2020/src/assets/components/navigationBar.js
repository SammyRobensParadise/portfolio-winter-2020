import React from 'react'
import styled from 'styled-components'
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
  transition border-width: 0.3 linear 1s;
  transition: letter-spacing 0.5s;
  &:hover,&:active {
    cursor: none;
    border-width: 2px 0px 2px 0px;
    margin-block-start: 18px;
    letter-spacing: 6px;
  }
  &:after {
    float: left;
  }
`
const ME = 'Me'
const CODE = 'Code'
const DESIGN = 'Design'
const PROJECTS = 'Projects'
const CONTRIBUTIONS = 'Contributions'
const NavigationBar = () => {
  return (
    <Nav>
      <NavEl>{ME}</NavEl>
      <NavEl>{CODE}</NavEl>
      <NavEl>{DESIGN}</NavEl>
      <NavEl>{PROJECTS}</NavEl>
      <NavEl>{CONTRIBUTIONS}</NavEl>
    </Nav>
  )
}

export default NavigationBar

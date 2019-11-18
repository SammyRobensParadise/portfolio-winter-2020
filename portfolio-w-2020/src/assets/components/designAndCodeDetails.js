import React from 'react'
import styled from 'styled-components'
import { darkBlue } from '../colors/common-colors'
import { connect } from 'react-redux'
import { toggleCodeAnimation, toggleDribbbleAnimation } from '../../actions/action'
const pos = window.innerHeight + 2000
const DESIGN_WORK = 'DESIGN WORK'
const DEVELOPMENT_WORK = 'DEVELOPMENT WORK'
const DesignAndCodeDetailsText = styled.div`
  & {
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    text-align: left;
    z-index: ${p => (p.hide || p.hide === false ? '1' : '90')};
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    line-height: 100px;
    position: absolute;
    top: ${pos}px;
    left: 180px;
  }
`
const DesignAndCodeDetailsEl = styled.div`
  margin-top: ${p => (p.order === 'first' ? '25' : p.order === 'second' ? '315' : '0')}px;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`
const UnderlineStyle = styled.div`
  width: ${p => (p.order === 'first' ? '490' : p.order === 'second' ? '720' : '490')}px;
  height: 25px;
  margin-top: 20px;
  left: 180px;
  background: ${darkBlue};
`
class DesignCodeAndDetails extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
  }
  render() {
    return (
      <DesignAndCodeDetailsText>
        <DesignAndCodeDetailsEl
          onMouseOver={() => this.props.dispatch(toggleDribbbleAnimation(true))}
          order={'first'}
          onMouseLeave={() => this.props.dispatch(toggleDribbbleAnimation(false))}
        >
          {DESIGN_WORK}
        </DesignAndCodeDetailsEl>
        <UnderlineStyle order={'first'} />
        <DesignAndCodeDetailsEl
          onMouseOver={() => this.props.dispatch(toggleCodeAnimation(true))}
          onMouseLeave={() => this.props.dispatch(toggleCodeAnimation(false))}
          order={'second'}
        >
          {DEVELOPMENT_WORK}
        </DesignAndCodeDetailsEl>
        <UnderlineStyle order={'second'} />
      </DesignAndCodeDetailsText>
    )
  }
}
const mapStateToProps = state => {
  return {
    ...state
  }
}
export default connect(mapStateToProps)(DesignCodeAndDetails)

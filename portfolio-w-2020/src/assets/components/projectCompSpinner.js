import React from 'react'
import PropTypes, { string } from 'prop-types'
import styled, { css } from 'styled-components'
import { generateUtm } from '../../utils/analytics'
import { white, backgroundGreen } from '../colors/common-colors'

const Background = styled.div`
  left: 15%;
  width: 76%;
  top: 200px;
  position: absolute;
  height: 620px;
  background: ${backgroundGreen};
  margin: 0 auto;
  display: inline-block;
  box-shadow: 2px 10px 30px -8px rgba(0, 0, 0, 0.88);
`
const Container = ({ id, title, subtext, image, routerPath, isExternal, order }) => {
  return <div className="p-container" id={id}></div>
}
Container.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtext: PropTypes.string,
  image: PropTypes.string,
  routerPath: PropTypes.string,
  isExternal: PropTypes.bool,
  order: PropTypes.number,
}
Container.defaultProps = {
  id: 'no_id',
  title: 'Project',
  subtext: 'Find out more',
  image: '',
  routerPath: 'PropTypes.string',
  isExternal: false,
  order: 1,
}
class ProjectContainers extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      firstToLoad: 'intensif-eye',
    }
  }
  render() {
    return (
      <div className="project-comp-wrapper">
        <Background />
      </div>
    )
  }
}
export default ProjectContainers

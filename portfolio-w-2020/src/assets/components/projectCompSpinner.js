import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { css, keyframes } from 'styled-components'
import { generateUtm } from '../../utils/analytics'
import { white, backgroundGreen } from '../colors/common-colors'
import { indexProjectBackward } from '../../actions/action'

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
const Title = styled.h1`
  position: absolute;
  margin: 0 auto;
  text-align: left;
  margin-left: 10%;
  width: 100%;
  top: 30px;
`
const SubText = styled.h2`
  position: absolute;
  margin: 0 auto;
  text-align: left;
  margin-left: 10%;
  width: 100%;
  top: 120px;
  font-size: 30px;
`
const Image = styled.div``

const fadeInOut = keyframes`
0%{
    opacity: 1;
}
33%{‰
    opacity: 0;
}
66%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`

const detailsAnim = css`
  ${fadeInOut} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s forwards;
`
const DetailsButton = styled.button`
  top: 400px;
  border: none;
  text-align: center;
  font-family: montserrat, sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 25px;
  width: 350px;
  height: 100px;
  z-index: ${(p) => (p.hide || p.hide === false ? '-1' : '90')};
  color: ${white};
  line-height: 100px;
  position: absolute;
  background: #203f8f;
  transition: letter-spacing 0.5s;
  animation: ${(p) => (p.show ? detailsAnim : 'none')};
  &:hover,
  &:active,
  &:focus {
    cursor: none;
    background: white;
    color: #203f8f;
    letter-spacing: 6px;
  }
  &:focus {
    outline: none;
  }
  display: inline-block;
  margin: 0 auto;
`
const DetailsContainer = styled.div`
  & {
    font-family: impact-urw, sans-serif;
    font-weight: 200;
    font-style: normal;
    letter-spacing: 1px;
    font-size: 40px;
    z-index: ${(p) => (p.hide || p.hide === false ? '-1' : '90')};
    color: ${white};
    line-height: 100px;
    position: absolute;
    text-align: center;
    width: 100%;
    `
const buttonOverride = css`
  border: none;
  background: none;
  color: #fff;
  &:focus {
    outline: none;
  }
`
const RightButton = styled.button`
  @import url('https://css.gg/arrow-right.css');
  position: absolute;
  right: 50px;
  top: 250px;
  transform: scale(4);
  cursor: pointer;
  ${buttonOverride};
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover,
  &:focus {
    transform: scale(5);
  }
`
const LeftButton = styled.button`
  @import url('https://css.gg/arrow-left.css');
  position: absolute;
  top 250px;
  left: 50px;
  transform: scale(4);
  cursor: pointer;
  ${buttonOverride}
  transition: all .2s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover,&:focus {
    transform: scale(5);
  }

`
const Container = ({
  id, title, subtext, image, /* routerPath, isExternal, */ order,
}) => (
  <div className="p-container" id={id} order={order}>
    <Title>{title}</Title>
    <SubText>{subtext}</SubText>
    <Image>{image}</Image>
    <DetailsButton>More —</DetailsButton>
  </div>
)
Container.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtext: PropTypes.string,
  image: PropTypes.string,
  // routerPath: PropTypes.string,
  // isExternal: PropTypes.bool,
  order: PropTypes.number,
}
Container.defaultProps = {
  id: 'no_id',
  title: 'Project',
  subtext: 'Find out more',
  image: '',
  // routerPath: 'PropTypes.string',
  // isExternal: false,
  order: 1,
}

const projectsList = [<Container title="sample1" />, <Container title="sample2" />]
const initialProject = 0
class ProjectContainers extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      projectToDisplay: initialProject,
    }
  }

  LeftIndexButtonAction = () => {
    const { dispatch } = this.props
    const { projectToDisplay } = this.state
    dispatch(
      indexProjectBackward({
        listLength: projectsList.length,
        currentIndex: projectToDisplay,
      }),
    )
  }

  RightIndexButtonAction = () => {}

  render() {
    const { projectToDisplay } = this.state
    return (
      <div className="project-comp-wrapper">
        <Background>
          <DetailsContainer>
            {projectsList[projectToDisplay]}
            <LeftButton role="button" tabIndex="0" onClick={this.LeftIndexButtonAction}>
              <i className="gg-arrow-left" />
            </LeftButton>
            <RightButton role="button" tabIndex="0" onClick={this.RightIndexButtonAction}>
              <i className="gg-arrow-right" />
            </RightButton>
          </DetailsContainer>
        </Background>
      </div>
    )
  }
}
ProjectContainers.propTypes = {
  dispatch: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  ...state,
})
export default connect(mapStateToProps)(ProjectContainers)

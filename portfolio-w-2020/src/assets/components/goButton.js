import React from 'react'
import styled from 'styled-components'
import { white } from '../colors/common-colors'

const position = window.innerHeight - 200
const gotrianglePosition = window.innerHeight - 120
const GoButtonText = styled.h2`
  & {
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 120px;
    text-align: center;
    z-index: 99;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    line-height: 185px;
    margin-block-end: 0px !important ;
    margin-block-start: 0px !important ;
    position: absolute;
    width: 100%;
    top: ${position}px;
    &:hover{
        cursor: pointer;
    }
  }
`
const GoTriangleWrapper = styled.div`
  font-family: impact-urw, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 100px;
  text-align: center;
  z-index: 99;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  line-height: 185px;
  margin-block-end: 0px !important ;
  margin-block-start: 0px !important ;
  position: absolute;
  display: inline-block;
  width:  100%;
  top: ${gotrianglePosition}px;
  &:hover{
    cursor: pointer;
}
`
const GO = 'GO'

const GoTriangle = () => {
  return (
    <GoTriangleWrapper>
      <svg xmlns='http://www.w3.org/2000/svg' width='128' height='65' viewBox='0 0 128 65'>
        <defs>
          <filter id='Polygon_3' x='0' y='0' width='128' height='65' filterUnits='userSpaceOnUse'>
            <feOffset dy='3' input='SourceAlpha' />
            <feGaussianBlur stdDeviation='3' result='blur' />
            <feFlood floodOpacity='0.161' />
            <feComposite operator='in' in2='blur' />
            <feComposite in='SourceGraphic' />
          </filter>
        </defs>
        <g class='cls-4' transform='matrix(1, 0, 0, 1, 0, 0)'>
          <g
            id='Polygon_3-2'
            data-name='Polygon 3'
            fill={'none'}
            transform='translate(119 53) rotate(180)'
          >
            <path stroke={'none'} d='M55,0l55,47H0Z' />
            <path
              stroke={'none'}
              fill={white}
              d='M 55 1.315395355224609 L 2.709495544433594 46.00000381469727 L 107.2905044555664 46.00000381469727 L 55 1.315395355224609 M 55 3.814697265625e-06 L 110 47.00000381469727 L 0 47.00000381469727 L 55 3.814697265625e-06 Z'
            />
          </g>
        </g>
      </svg>
    </GoTriangleWrapper>
  )
}
const GoButton = () => {
  return (
    <div>
      <GoButtonText>{GO}</GoButtonText>
      <GoTriangle />
    </div>
  )
}

export default GoButton

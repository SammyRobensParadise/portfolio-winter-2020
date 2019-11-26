import React from 'react'
import styled from 'styled-components'
import anime from 'animejs/lib/anime.es.js'

const HeaderText = styled.h1`
  & {
    font-family: impact-urw, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 180px;
    text-align: left;
    z-index: 1000;
    position: relative;
    width: 600px;
    margin: 0 auto;
    float: left;
    margin-left: 20%;
    margin-top: 100px;
    @media screen and (max-width: 1900px) {
      margin-left: 10%;
    }
    @media screen and(max-width: 1400px) {
      margin-left: 0%;
      margin-top: 0px;
    }
  }
`
class LandingText extends React.PureComponent {
  componentDidMount() {
    anime({
      targets: '.cls-2',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 300,
      delay: function(_e, i) {
        return i * 200
      },
      direction: 'forwards'
    })
    setTimeout(() => {
      this.setState({
        fillMountainOne: true
      })
    }, 2000)
  }
  render() {
    const displayWidth = window.innerWidth >= 1400 ? 600 : 550
    const displayHeight =
      window.innerWidth >= 1400 ? window.innerHeight - 200 : window.innerHeight - 250
    return (
      <HeaderText>
        <svg
          id='Layer_1'
          dataname='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 925 983'
          width={displayWidth}
          height={displayHeight}
        >
          <defs></defs>
          <title>LandingText</title>
          <g
            id='Designer_Developer_Student_of_UX_'
            dataname='Designer Developer Student of UX '
            className='cls-1'
          >
            <g className='cls-1'>
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M11.2,46.89H42q29.79,0,40.29,2.74t16,9a28.43,28.43,0,0,1,6.84,13.92q1.36,7.66,1.37,30.13V158q0,21.28-2,28.46a21.43,21.43,0,0,1-7,11.23,29,29,0,0,1-12.3,5.67Q77.81,205,63.06,205H11.2ZM52.32,74V178q8.88,0,10.93-3.57t2-19.38V93.57q0-10.74-.68-13.77a6.55,6.55,0,0,0-3.12-4.44Q59.05,74,52.32,74Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M209.93,142.5H158.86v28q0,8.79,1.27,11.33t4.88,2.53q4.5,0,6-3.36t1.51-13V150.9h37.4v9.57q0,12-1.51,18.46t-7.08,13.77a34.5,34.5,0,0,1-14.11,11q-8.55,3.66-21.44,3.66a62.24,62.24,0,0,1-22.07-3.61q-9.57-3.61-14.89-9.91A35.68,35.68,0,0,1,121.46,180q-2.05-7.56-2-22V120.14q0-17,4.59-26.81a31.51,31.51,0,0,1,15-15,53,53,0,0,1,24-5.22q16.6,0,27.39,6.3t15.14,16.69q4.33,10.41,4.34,29.25Zm-39.55-21.09v-9.48q0-10.05-1.07-13a4.24,4.24,0,0,0-4.4-2.93q-4.09,0-5.07,2.49t-1,13.42v9.48Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M303.39,116.82h-35v-7q0-9-1-11.38c-.68-1.6-2.39-2.39-5.12-2.39a5.84,5.84,0,0,0-5,2.19q-1.67,2.21-1.66,6.59a33,33,0,0,0,.83,8.74q.82,2.79,5,6.11t17,9.67q17.19,8.4,22.56,15.82t5.37,21.58q0,15.83-4.1,23.88T288.6,203q-9.63,4.33-23.2,4.34-15,0-25.73-4.68T225,190q-4-8-4-24.22v-6.25h35v8.21q0,10.44,1.32,13.57t5.22,3.12c2.8,0,4.75-.69,5.86-2.1S270,178,270,173.46q0-9.28-2.15-11.62T244.89,148q-17.37-9.76-21.19-17.73t-3.81-18.89q0-15.52,4.11-22.9t13.91-11.38a60.09,60.09,0,0,1,22.8-4q12.9,0,21.93,3.27T296.51,85q4.83,5.37,5.86,10t1,14.36Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M357.59,46.89V67.5H317V46.89Zm0,28.52V205H317V75.41Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M461.4,75.41v99.8q0,20.22-.93,26.13t-6.59,12.5q-5.67,6.58-15.77,10.06t-25.44,3.46q-18.85,0-30.28-6.39t-11.81-25.15h38.28q0,8.6,6.25,8.59c3,0,5-.87,6-2.64s1.46-5.44,1.46-11V181a37.3,37.3,0,0,1-10.69,7,30.16,30.16,0,0,1-11.77,2.35q-10.65,0-17.53-4.29a22,22,0,0,1-9.42-11.28q-2.55-7-2.54-19.88V107.73q0-18.45,6.64-26.56t20.21-8.1a30,30,0,0,1,13.53,3,32.12,32.12,0,0,1,10.89,9.1l2.83-9.79Zm-39.55,34.38q0-8.9-1-11.33c-.68-1.63-2.2-2.44-4.54-2.44a5,5,0,0,0-4.83,2.78q-1.43,2.78-1.42,11v43.55q0,8.7,1.08,11.28c.71,1.72,2.21,2.59,4.49,2.59q3.9,0,5.08-3.13t1.17-14.16Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M515.6,75.41l-.69,11.94a29.66,29.66,0,0,1,10.5-10.71,28.17,28.17,0,0,1,14.31-3.57q10.15,0,16.6,4.78a21.28,21.28,0,0,1,8.3,12.06q1.86,7.28,1.86,24.27V205H527V115.25q0-13.38-.88-16.3c-.58-2-2.21-2.93-4.88-2.93s-4.56,1.12-5.27,3.36-1.08,8.26-1.08,18V205H475.46V75.41Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M669.41,142.5H618.33v28q0,8.79,1.27,11.33t4.88,2.53q4.5,0,6-3.36T632,168V150.9h37.41v9.57q0,12-1.52,18.46t-7.08,13.77a34.44,34.44,0,0,1-14.11,11q-8.55,3.66-21.43,3.66a62.2,62.2,0,0,1-22.07-3.61q-9.59-3.61-14.9-9.91A35.81,35.81,0,0,1,580.93,180q-2.05-7.56-2-22V120.14q0-17,4.59-26.81a31.51,31.51,0,0,1,15-15,53,53,0,0,1,24-5.22q16.61,0,27.39,6.3t15.14,16.69q4.35,10.41,4.35,29.25Zm-39.55-21.09v-9.48q0-10.05-1.08-13A4.24,4.24,0,0,0,624.39,96q-4.11,0-5.08,2.49t-1,13.42v9.48Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M721.75,75.41l-1.56,17q8.59-18.3,24.9-19.38v45.6q-10.85,0-15.92,2.93a12.29,12.29,0,0,0-6.25,8.16q-1.17,5.22-1.17,24.07V205H682.3V75.41Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M762.86,174V188.2q0,11.13-2.63,18.26a26.87,26.87,0,0,1-9.13,12.11,35.26,35.26,0,0,1-14.7,6.64V213.89q5.85-3.33,6.64-8.89H736.4V174Z'
              />
            </g>
            <g className='cls-1'>
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M11.2,290.89H42q29.79,0,40.29,2.74t16,9a28.43,28.43,0,0,1,6.84,13.92q1.36,7.67,1.37,30.13V402q0,21.29-2,28.46a21.43,21.43,0,0,1-7,11.23,29,29,0,0,1-12.3,5.67Q77.81,449,63.06,449H11.2ZM52.32,318V422q8.88,0,10.93-3.57t2-19.38V337.57q0-10.74-.68-13.77a6.55,6.55,0,0,0-3.12-4.44Q59.05,318,52.32,318Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M209.93,386.5H158.86v28q0,8.79,1.27,11.33t4.88,2.53q4.5,0,6-3.36t1.51-13V394.9h37.4v9.57q0,12-1.51,18.46t-7.08,13.77a34.5,34.5,0,0,1-14.11,11q-8.55,3.66-21.44,3.66a62.24,62.24,0,0,1-22.07-3.61q-9.57-3.62-14.89-9.91A35.68,35.68,0,0,1,121.46,424q-2.05-7.56-2-22V364.14q0-17,4.59-26.81a31.51,31.51,0,0,1,15-15,53,53,0,0,1,24-5.22q16.6,0,27.39,6.3t15.14,16.69q4.33,10.41,4.34,29.25Zm-39.55-21.09v-9.48q0-10.05-1.07-13a4.24,4.24,0,0,0-4.4-2.93q-4.09,0-5.07,2.49t-1,13.42v9.48Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M304.46,319.41,286,449H234.45L214.62,319.41h35.23L261,414q1.31-10.44,4.45-50.86,1.68-22.57,3.82-43.77Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M399.58,386.5H348.51v28q0,8.79,1.27,11.33t4.88,2.53c3,0,5-1.12,6-3.36s1.51-6.6,1.51-13V394.9h37.4v9.57q0,12-1.51,18.46T391,436.7a34.5,34.5,0,0,1-14.11,11q-8.55,3.66-21.44,3.66a62.24,62.24,0,0,1-22.07-3.61q-9.57-3.62-14.89-9.91A35.68,35.68,0,0,1,311.11,424q-2.06-7.56-2.06-22V364.14q0-17,4.59-26.81a31.55,31.55,0,0,1,15-15,53.1,53.1,0,0,1,24-5.22q16.59,0,27.39,6.3t15.14,16.69q4.33,10.41,4.34,29.25ZM360,365.41v-9.48q0-10.05-1.07-13a4.24,4.24,0,0,0-4.4-2.93c-2.73,0-4.43.83-5.08,2.49s-1,6.13-1,13.42v9.48Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M453.1,290.89V449H412.47V290.89Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M556.52,364.92v31.74q0,17.47-1.76,25.63a36,36,0,0,1-7.52,15.24A33.91,33.91,0,0,1,532.44,448a59.06,59.06,0,0,1-20.75,3.37q-13.08,0-22.17-2.88t-14.11-8.69a34.45,34.45,0,0,1-7.18-14.06q-2.14-8.25-2.14-24.76v-33.2q0-18.06,3.9-28.22a32.48,32.48,0,0,1,14.06-16.31q10.17-6.15,26-6.15,13.28,0,22.8,3.95t14.7,10.3a36.57,36.57,0,0,1,7.08,13.09Q556.52,351.15,556.52,364.92Zm-39.46-9.77q0-10-1.07-12.55T511.4,340q-3.52,0-4.69,2.58t-1.17,12.55v58.5q0,9.18,1.17,12a4.49,4.49,0,0,0,4.59,2.78q3.51,0,4.64-2.53t1.12-10.94Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M609.64,319.41,609,330.86a36.54,36.54,0,0,1,11.62-10.37,28.76,28.76,0,0,1,13.87-3.42A26,26,0,0,1,650.31,322q6.69,4.94,8.35,11.38t1.66,21.87v54.59q0,17.67-2.1,25.15a20.87,20.87,0,0,1-8.59,11.91A27.09,27.09,0,0,1,634,451.34a27.83,27.83,0,0,1-13.58-3.42A36.92,36.92,0,0,1,609,437.75v29.71H569.5v-148Zm11.23,37.7q0-12-.88-14.56T615.11,340c-2.61,0-4.28,1-5,2.93S609,349.62,609,357.11v53.71q0,11.71,1.17,14.64c.78,2,2.47,2.93,5.08,2.93s4.11-.89,4.73-2.68.93-6.14.93-13Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M762.67,386.5H711.59v28q0,8.79,1.27,11.33t4.89,2.53q4.49,0,6-3.36t1.52-13V394.9h37.4v9.57q0,12-1.52,18.46t-7.08,13.77a34.44,34.44,0,0,1-14.11,11q-8.54,3.66-21.43,3.66a62.2,62.2,0,0,1-22.07-3.61q-9.57-3.62-14.9-9.91A36,36,0,0,1,674.19,424q-2.06-7.56-2.05-22V364.14q0-17,4.59-26.81a31.51,31.51,0,0,1,15-15,53.06,53.06,0,0,1,24-5.22q16.61,0,27.4,6.3t15.13,16.69q4.35,10.41,4.35,29.25Zm-39.55-21.09v-9.48q0-10.05-1.08-13a4.23,4.23,0,0,0-4.39-2.93q-4.11,0-5.08,2.49t-1,13.42v9.48Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M815,319.41l-1.56,17q8.59-18.3,24.9-19.38v45.6q-10.85,0-15.92,2.93a12.29,12.29,0,0,0-6.25,8.16Q815,379,815,397.83V449H775.56V319.41Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M856.12,418V432.2q0,11.13-2.63,18.26a26.8,26.8,0,0,1-9.13,12.11,35.26,35.26,0,0,1-14.7,6.64V457.89q5.87-3.33,6.64-8.89h-6.64V418Z'
              />
            </g>
            <g className='cls-1'>
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M98.31,582.75H60.13V571q0-8.21-1.47-10.45t-4.88-2.25a6.21,6.21,0,0,0-5.61,3q-1.91,3-1.91,9.19,0,7.91,2.14,11.92T60,592.14q27.45,16.29,34.58,26.74t7.13,33.69q0,16.89-4,24.9T82.49,690.9q-11.33,5.42-26.37,5.42-16.5,0-28.17-6.25T12.67,674.15q-3.61-9.66-3.62-27.44V636.36H47.24V655.6q0,8.88,1.61,11.42c1.07,1.7,3,2.54,5.71,2.54a6.7,6.7,0,0,0,6.11-3.22q2-3.23,2-9.57,0-14-3.81-18.26T39.62,624.15Q24.29,614,19.31,609.41a34.46,34.46,0,0,1-8.25-12.7q-3.29-8.1-3.27-20.7,0-18.16,4.63-26.56t15-13.14q10.35-4.74,25-4.74,16,0,27.3,5.18t14.94,13q3.66,7.86,3.66,26.71Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M155.05,546.12v20.42H165.7V587H155.05v69.34q0,12.79,1.32,14.26t11,1.46V693H151.44q-13.49,0-19.24-1.12A20.56,20.56,0,0,1,122,686.7a17.2,17.2,0,0,1-5.47-9.28q-1.06-5.22-1.07-24.56V587H107v-20.5h8.5V546.12Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M264.72,563.41V693H224.58l.69-10.77a27.61,27.61,0,0,1-10.11,9.84,28.45,28.45,0,0,1-13.82,3.27q-8.88,0-14.75-3.12a20.36,20.36,0,0,1-8.64-8.3,30.59,30.59,0,0,1-3.47-10.79q-.67-5.62-.68-22.32v-87.4h39.45v88.18q0,15.15.93,18t5,2.83c2.93,0,4.67-1,5.23-2.93s.83-8.23.83-18.84V563.41Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M368.62,534.89V693H329.17v-9.4a40.73,40.73,0,0,1-11.91,8.81,30.54,30.54,0,0,1-13.09,2.93,26.62,26.62,0,0,1-15.92-4.83q-6.74-4.83-8.64-11.18t-1.9-20.71V598q0-14.94,1.9-21.19t8.74-11a28,28,0,0,1,16.31-4.73,32.22,32.22,0,0,1,24.51,10.57V534.89ZM329.17,596c0-4.75-.41-7.95-1.22-9.57s-2.42-2.44-4.83-2.44-3.93.73-4.74,2.19-1.22,4.74-1.22,9.82V659.5c0,5.28.39,8.74,1.17,10.4s2.28,2.49,4.49,2.49c2.54,0,4.24-.92,5.08-2.78s1.27-6.4,1.27-13.62Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M472.14,630.5H421.07v28q0,8.79,1.27,11.33t4.88,2.53q4.48,0,6-3.36t1.52-13V638.9h37.4v9.57q0,12-1.51,18.46t-7.08,13.77a34.5,34.5,0,0,1-14.11,11q-8.55,3.66-21.44,3.66a62.24,62.24,0,0,1-22.07-3.61q-9.57-3.62-14.89-9.91A35.84,35.84,0,0,1,383.66,668q-2-7.56-2.05-22V608.14q0-17,4.59-26.81a31.55,31.55,0,0,1,15-15,53.1,53.1,0,0,1,24-5.22q16.59,0,27.39,6.3t15.13,16.69q4.35,10.41,4.35,29.25Zm-39.55-21.09v-9.48q0-10-1.07-13a4.25,4.25,0,0,0-4.4-2.93c-2.73,0-4.43.83-5.08,2.49s-1,6.13-1,13.42v9.48Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M525.17,563.41l-.69,11.94A29.66,29.66,0,0,1,535,564.64a28.17,28.17,0,0,1,14.31-3.57q10.15,0,16.6,4.78a21.28,21.28,0,0,1,8.3,12.06q1.86,7.27,1.86,24.27V693H536.59V603.25q0-13.38-.88-16.3c-.58-2-2.21-2.93-4.88-2.93s-4.56,1.12-5.27,3.36-1.08,8.26-1.08,18V693H485V563.41Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M631.22,546.12v20.42h10.65V587H631.22v69.34q0,12.79,1.32,14.26t11,1.46V693H627.61q-13.49,0-19.24-1.12a20.56,20.56,0,0,1-10.16-5.18,17.18,17.18,0,0,1-5.46-9.28q-1.08-5.22-1.08-24.56V587h-8.49v-20.5h8.49V546.12Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M775.07,608.92v31.74q0,17.48-1.76,25.63a36,36,0,0,1-7.52,15.24A33.88,33.88,0,0,1,751,692a59.06,59.06,0,0,1-20.75,3.37q-13.1,0-22.17-2.88T694,683.77a34.21,34.21,0,0,1-7.18-14.06q-2.14-8.25-2.15-24.76v-33.2q0-18.06,3.91-28.22a32.43,32.43,0,0,1,14.06-16.31q10.15-6.15,26-6.15,13.27,0,22.8,3.95t14.7,10.3a36.57,36.57,0,0,1,7.08,13.09Q775.08,595.15,775.07,608.92Zm-39.45-9.77q0-10-1.08-12.55T730,584q-3.51,0-4.68,2.58t-1.18,12.55v58.5q0,9.18,1.18,12a4.49,4.49,0,0,0,4.59,2.78c2.34,0,3.89-.84,4.63-2.53s1.13-5.34,1.13-10.94Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M838.35,534.89v20q-12.21,0-14.4,1.13t-2.2,6.39v4.11h16.6V587H829V693H789.52V587h-8.1v-20.5h8.1q0-12.79.88-17.09a14.71,14.71,0,0,1,4.35-7.67,22.31,22.31,0,0,1,9.71-5.13q6.25-1.75,19.44-1.76Z'
              />
            </g>
            <g className='cls-1'>
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M104.66,778.89V884.56q0,18-1.17,25.24t-6.94,14.94a35.94,35.94,0,0,1-15.18,11.63q-9.42,3.95-22.22,4-14.16,0-25-4.69t-16.21-12.2a33.87,33.87,0,0,1-6.35-15.87q-1-8.35-1-35.11V778.89H51.73V897.45q0,10.35,1.12,13.23a4.41,4.41,0,0,0,4.54,2.88c2.61,0,4.28-1.06,5-3.17s1.13-7.11,1.13-15V778.89Z'
              />
              <path
                className='cls-2'
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={'3px'}
                d='M203.93,778.89l-14.46,69.93L211.25,937H173.17q-6.84-23.64-12.5-57.62-1.56,15.06-4.34,31.84L152.46,937h-40l15-88.18-15-69.93h39.75q1.08,6.54,4.29,21.77,2.58,11.63,4.21,21.4l8.79-43.17Z'
              />
            </g>
          </g>
        </svg>
      </HeaderText>
    )
  }
}
export default LandingText

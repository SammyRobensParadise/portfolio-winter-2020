import React from 'react'
import styled from 'styled-components'
import ContributionsText from './contributionsText'
import ContributionDetails from './contributionDetails'
import { CONTTRIBUTION_SECTION } from '../../App'

const ContributionsWrapper = styled.div`
  z-index: 89;
  margin: 0 auto;
  position: relative;
  padding-top: 100px;
`

const ContributionsSection = () => (
  <div>
    <ContributionsWrapper id={CONTTRIBUTION_SECTION}>
      <ContributionsText />
      <ContributionDetails />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        viewBox="0 0 1570 900"
      >
        <defs>
          <filter
            id="Exclusion_3"
            x="0"
            y="0"
            width="1567"
            height="908.001"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodOpacity="0.231" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
            <feDropShadow dx="0" dy="0.6" stdDeviation="0.5" />
          </filter>
          <style />
        </defs>
        <g className="cls-2" transform="matrix(1, 0, 0, 1, 0, 0)">
          <path
            id="Exclusion_3"
            data-name="Exclusion 3"
            fill="#1a839c"
            stroke="#1f66a6"
            filter="url(#Exclusion_3)"
            d="M1548.5,889.5h0l-1442,0V.5h1442v889ZM303.063,118.5v681H921.583V282.767l-.246-.145L856.05,244l65.287-38.622.246-.145V118.5H303.063ZM94.5,889.5H.5V.5h94v889Zm-54.823-49.78c-4.633,0-8.1.393-10.29,1.168a10.664,10.664,0,0,0-5.521,4.891,20.761,20.761,0,0,0-.785,16.9A12.315,12.315,0,0,0,27,867.759a11.351,11.351,0,0,0,5.183,2.2,64.961,64.961,0,0,0,8.075.369h14.55c4.859,0,8.549-.4,10.967-1.2a10.064,10.064,0,0,0,5.707-4.891,19.18,19.18,0,0,0,2.061-9.382,16.632,16.632,0,0,0-2.43-9.213,11.252,11.252,0,0,0-5.661-4.829c-2.142-.724-5.826-1.092-10.951-1.092H52.566v12.95h6.245a18.1,18.1,0,0,1,5.2.446,1.827,1.827,0,0,1,1.107,1.892,1.85,1.85,0,0,1-1.107,1.938,16.223,16.223,0,0,1-4.738.431H36.14a17.416,17.416,0,0,1-4.922-.431,1.921,1.921,0,0,1-1.138-2.03,1.789,1.789,0,0,1,.938-1.83,15.643,15.643,0,0,1,4.722-.416h8.675v-12.95Zm3.66-34.238a105.639,105.639,0,0,0-10.767.369,11.971,11.971,0,0,0-9.613,7.429,18.854,18.854,0,0,0-1.307,7.183,18.384,18.384,0,0,0,1.384,7.383,11.9,11.9,0,0,0,9.674,7.245c2.072.235,5.648.354,10.628.354h8.521a105.489,105.489,0,0,0,10.767-.37,11.972,11.972,0,0,0,9.613-7.429,18.839,18.839,0,0,0,1.308-7.183,18.4,18.4,0,0,0-1.384-7.383,11.906,11.906,0,0,0-9.675-7.244c-2.072-.235-5.648-.354-10.628-.354ZM22.7,771.737v10.829H45.122L22.7,789.825v10.828H72.5V789.825H49.859L72.5,783.088V771.737Zm0-31.284v28.3h9.967v-7.66H72.5v-12.95H32.664v-7.69Zm13.6-31.869c-4.226,0-7.347.688-9.274,2.046a8.581,8.581,0,0,0-3.615,5.29c-.469,2.154-.707,6.331-.707,12.413V737.5H72.5v-12.95H50.044c0-1.776.321-2.888.954-3.307s2.3-.631,4.953-.631H72.5V708.584H59.365a46.746,46.746,0,0,0-7.368.322,7.674,7.674,0,0,0-2.938,1.646c-1.062.878-1.921,2.617-2.553,5.168-.265-2.816-1.072-4.731-2.4-5.691S40.152,708.584,36.293,708.584ZM22.7,690.619v12.95H72.5v-12.95ZM36.878,656.2c-4.288,0-7.439.652-9.367,1.938a9.235,9.235,0,0,0-3.861,5.091A34.233,34.233,0,0,0,22.7,672.5v12.92H72.5V670.439c0-5.184-.3-8.662-.893-10.336a6.241,6.241,0,0,0-3.322-3.676c-1.612-.766-4.127-1.154-7.475-1.154H56.2c-3.225,0-5.652.538-7.214,1.6s-2.694,3.109-3.368,6.09c-.613-2.673-1.5-4.489-2.646-5.4S39.777,656.2,36.878,656.2ZM22.7,637.862v12.951h29.47c5.592,0,9.313-.1,11.058-.308a10.7,10.7,0,0,0,5-2,11.917,11.917,0,0,0,3.845-5.107,19.773,19.773,0,0,0,1.477-7.875,18.082,18.082,0,0,0-1.247-7,11.371,11.371,0,0,0-3.66-4.783,10.855,10.855,0,0,0-4.706-2.184,58.152,58.152,0,0,0-7.952-.369H22.7V634.14H59.4a18.716,18.716,0,0,1,4.722.354,1.5,1.5,0,0,1,1,1.584,1.391,1.391,0,0,1-.907,1.43,14.8,14.8,0,0,1-4.168.354Zm0-47.773v28.3h9.967v-7.66H72.5V597.779H32.664v-7.691Zm0-15.9v12.95H72.5v-12.95Zm20.641-34.792a105.865,105.865,0,0,0-10.767.369,11.974,11.974,0,0,0-9.613,7.43,18.848,18.848,0,0,0-1.307,7.183,18.384,18.384,0,0,0,1.384,7.383A11.9,11.9,0,0,0,32.71,569c2.072.235,5.648.354,10.628.354h8.521a105.639,105.639,0,0,0,10.767-.369,11.973,11.973,0,0,0,9.613-7.429,18.847,18.847,0,0,0,1.308-7.183,18.4,18.4,0,0,0-1.384-7.383,11.9,11.9,0,0,0-9.675-7.245c-2.072-.235-5.648-.354-10.628-.354ZM22.7,505.648v10.828H45.122L22.7,523.736v10.828H72.5V523.736H49.859L72.5,517V505.648ZM35.8,473.01c-3.94,0-6.77.388-8.413,1.153a9.047,9.047,0,0,0-4.107,4.707,20.612,20.612,0,0,0-1.63,8.6,18.922,18.922,0,0,0,1.491,7.875,9.883,9.883,0,0,0,4.137,4.722c1.756.969,4.571,1.461,8.367,1.461a17.685,17.685,0,0,0,6.521-1.031,10.908,10.908,0,0,0,4-2.6,60.028,60.028,0,0,0,4.645-6.4,38.468,38.468,0,0,1,4.522-6.061c.9-.8,2.833-1.2,5.753-1.2a5.817,5.817,0,0,1,3.015.631,2.117,2.117,0,0,1,1.014,1.922,1.972,1.972,0,0,1-.8,1.8,8.024,8.024,0,0,1-3.6.508H54.658v12.028h3.261a25.829,25.829,0,0,0,8.645-1.139,9.7,9.7,0,0,0,5.014-4.814,18.651,18.651,0,0,0,1.969-8.875,19.139,19.139,0,0,0-1.707-8.305,9.8,9.8,0,0,0-4.23-4.814c-1.674-.827-4.313-1.247-7.844-1.247-4.858,0-8.429.756-10.613,2.246s-5.02,5.155-8.428,10.89c-1.184,2-2.209,3.232-3.046,3.66a8.2,8.2,0,0,1-3.753.677,5.561,5.561,0,0,1-2.892-.6,1.968,1.968,0,0,1-.953-1.769,1.7,1.7,0,0,1,.707-1.538,7.287,7.287,0,0,1,3.291-.461H37.77V473.01ZM58.749,822.494H35.493c-2.552,0-4.11-.181-4.629-.538a1.776,1.776,0,0,1-.784-1.553,1.537,1.537,0,0,1,.968-1.585,15.543,15.543,0,0,1,4.445-.384H58.38a24.807,24.807,0,0,1,5.568.369,1.6,1.6,0,0,1,1.168,1.692A1.549,1.549,0,0,1,64.1,822.14,23.01,23.01,0,0,1,58.749,822.494ZM42.292,724.549H31.217a4.831,4.831,0,0,1,.739-3.091c.49-.561,1.535-.846,3.107-.846H37.8c2.183,0,3.493.295,3.892.877a5.729,5.729,0,0,1,.6,3.06Zm21.687-52.079H50.044c.062-1.92.321-3.12.77-3.568s1.752-.677,3.876-.677h4.645c2,0,3.273.253,3.784.753s.8,1.674.861,3.491Zm-21.687,0H31.217a10.039,10.039,0,0,1,.277-2.692,2.072,2.072,0,0,1,1.184-1.123,8.724,8.724,0,0,1,3.276-.43c2.939,0,4.745.176,5.368.523s.939,1.165.939,2.43c0,.312.01.746.031,1.291ZM58.749,556.405H35.493c-2.551,0-4.108-.181-4.629-.538a1.777,1.777,0,0,1-.784-1.554,1.537,1.537,0,0,1,.968-1.584,15.518,15.518,0,0,1,4.445-.384H58.38a24.807,24.807,0,0,1,5.568.369,1.6,1.6,0,0,1,1.168,1.692,1.549,1.549,0,0,1-1.014,1.646A23.006,23.006,0,0,1,58.749,556.405Z"
            transform="translate(9 6)"
          />
        </g>
      </svg>
    </ContributionsWrapper>
  </div>
)
export default ContributionsSection

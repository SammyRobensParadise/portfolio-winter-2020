import React from 'react'
import styled from 'styled-components'
const pos = window.innerHeight + 200
const ProjectWrapper = styled.div`
  z-index: 89;
  position: absolute;
  top: ${pos}px;
  margin-left: 20px;
`
const ProjectSection = () => {
  const setWith = window.innerWidth - 50
  const setHeight = setWith * (1557 / 908.001)
  return (
    <div>
      <ProjectWrapper>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={setWith}
          height={setHeight}
          viewBox='0 0 1565.999 907.002'
        >
          <defs>
            <filter
              id='Union_4'
              x='0'
              y='0'
              width='1565.999'
              height='907.002'
              filterUnits='userSpaceOnUse'
            >
              <feOffset dy='3' input='SourceAlpha' />
              <feGaussianBlur stdDeviation='3' result='blur' />
              <feFlood floodOpacity='0.161' />
              <feComposite operator='in' in2='blur' />
              <feComposite in='SourceGraphic' />
            </filter>
          </defs>
          <g transform={'matrix(1, 0, 0, 1, 0, 0)'} filter='url(#Union_4)'>
            <path
              id={'Union_4-2'}
              data-name={'Union 4'}
              d='M105.5,888V0H1547V888H105.5ZM905,824h583V482H905Zm-692,0H796V482H213ZM905,413h583V71H905Zm-692,0H796V71H213ZM94.5,888H0V0H94.5V888ZM32.225,837.136a8.272,8.272,0,0,0-3.8,1.938,9.13,9.13,0,0,0-2.4,4.276,30.721,30.721,0,0,0-.831,8.137v13.043H75V851.578H54.943V848.1a17.174,17.174,0,0,0-1.169-6.875,6.765,6.765,0,0,0-3.353-3.614,18.161,18.161,0,0,0-6.952-.985H39.131A34.158,34.158,0,0,0,32.225,837.136Zm1.953-3.861H75V820.848H58.881a46.4,46.4,0,0,1-7.583-.369,3.89,3.89,0,0,1-2.569-1.969,10.468,10.468,0,0,1-.923-5.014H33.44a8.118,8.118,0,0,0,1.692,4.53,11.837,11.837,0,0,0,4.4,3.315l-5.353-.492Zm7.875-50.064a11.259,11.259,0,0,0-7.367,6.86,18.794,18.794,0,0,0-1.246,7.183,15.661,15.661,0,0,0,1.938,8.183,10.275,10.275,0,0,0,5.137,4.43,25.722,25.722,0,0,0,8.89,1.23H59.864a33.5,33.5,0,0,0,7.8-.677,10.862,10.862,0,0,0,4.43-2.261,9.563,9.563,0,0,0,2.738-4.445,23.411,23.411,0,0,0,.907-6.983,18.748,18.748,0,0,0-1.061-6.537,10.75,10.75,0,0,0-3.291-4.66,11.383,11.383,0,0,0-4.8-2.369,42.44,42.44,0,0,0-8.075-.554h-10A25.767,25.767,0,0,0,42.053,783.211Zm-7.875-5.061H67.555c3.756,0,5.826.094,6.152.277s.492,1.021.492,2.492h6.521v-4.8a18.2,18.2,0,0,0-.738-5.953,6.841,6.841,0,0,0-5.8-4.584c-1.336-.153-3.928-.23-7.706-.23h-32.3Zm-8.982,0h6.491v-12.8H25.2Zm15.488-44.035a10.962,10.962,0,0,0-5.26,4.768,17,17,0,0,0-1.985,8.628,16.769,16.769,0,0,0,1.646,7.568,9.974,9.974,0,0,0,4.737,4.737,20.381,20.381,0,0,0,8.445,1.446h11.9a28.327,28.327,0,0,0,6.937-.646,11.324,11.324,0,0,0,4.368-2.323A11.179,11.179,0,0,0,74.6,753.6a19.709,19.709,0,0,0,1.138-6.953,17.261,17.261,0,0,0-1.154-6.752,10.9,10.9,0,0,0-3.46-4.445,11.875,11.875,0,0,0-4.337-2.23,27.046,27.046,0,0,0-5.814-.477H57.957v11.782h5.384a11.671,11.671,0,0,1,4.107.477,1.873,1.873,0,0,1,1.061,1.892,1.56,1.56,0,0,1-.8,1.538,9.855,9.855,0,0,1-3.568.4H55.312V732.746H49.9A24.788,24.788,0,0,0,40.685,734.115Zm.016-31.761a10.161,10.161,0,0,0-5.2,4.583,15.952,15.952,0,0,0-2.061,8.306,15.773,15.773,0,0,0,2.076,8.306,10.221,10.221,0,0,0,4.722,4.46,22.563,22.563,0,0,0,7.844,1.046h11.6a26.251,26.251,0,0,0,9.213-1.277,9.961,9.961,0,0,0,5.045-4.352,16.585,16.585,0,0,0,1.8-8.337,16.41,16.41,0,0,0-1.307-6.921,11.069,11.069,0,0,0-3.876-4.538,11.826,11.826,0,0,0-5.014-2.061,64.219,64.219,0,0,0-7.337-.354V712.29h4.86a13.791,13.791,0,0,1,4.306.445,1.686,1.686,0,0,1,1.139,1.707,1.76,1.76,0,0,1-1.092,1.631,7.558,7.558,0,0,1-3.277.554H44.884a9.918,9.918,0,0,1-3.445-.369,1.453,1.453,0,0,1-.77-1.446,1.481,1.481,0,0,1,.877-1.476,9.272,9.272,0,0,1,3.338-.4H49.59V701.215A27.288,27.288,0,0,0,40.7,702.354Zm-11.966-5.476h6.429v2.676h6.46v-2.676H62.357a52.072,52.072,0,0,0,7.736-.338,5.448,5.448,0,0,0,2.922-1.723,6.5,6.5,0,0,0,1.631-3.2,35.957,35.957,0,0,0,.354-6.06v-5.015H68.416c0,2.021-.156,3.186-.461,3.461s-1.818.415-4.491.415H41.623v-3.353h-6.46v3.353H28.734Zm11.6-43.6a7.338,7.338,0,0,0-3.137,1.846,10.647,10.647,0,0,0-2.722,4.368,20.462,20.462,0,0,0-1.031,6.907,19.013,19.013,0,0,0,1.262,7.183,8.423,8.423,0,0,0,3.583,4.383c1.543.858,3.97,1.292,7.214,1.292a13.74,13.74,0,0,0,5.952-1.2c1.662-.795,3.541-3.041,5.584-6.675,2.408-4.327,3.877-6.759,4.368-7.229.49-.449,1.722-.677,3.661-.677a4.961,4.961,0,0,1,2.784.523,2.237,2.237,0,0,1,.661,1.845,1.618,1.618,0,0,1-.985,1.646,13.659,13.659,0,0,1-4.276.415H60.665v11.013h1.969c3.389,0,5.955-.425,7.628-1.262a8.9,8.9,0,0,0,4-4.63,20.232,20.232,0,0,0,1.476-8.105,17.755,17.755,0,0,0-1.369-7.306,8.624,8.624,0,0,0-3.907-4.322A17.212,17.212,0,0,0,62.941,652c-2.96,0-5.247.569-6.8,1.691s-3.23,3.515-4.983,7.106a34.248,34.248,0,0,1-3.046,5.368,4.378,4.378,0,0,1-1.922,1.569,10.546,10.546,0,0,1-2.753.262,3.437,3.437,0,0,1-2.077-.523,1.85,1.85,0,0,1-.692-1.569c0-.858.254-1.4.754-1.615a11.876,11.876,0,0,1,3.584-.323h2.215V652.95H44.853A22.888,22.888,0,0,0,40.331,653.273Zm6.06,198.305H33.718c0-1.673.259-2.79.769-3.322s1.629-.8,3.323-.8H41.9c1.836,0,3.063.233,3.645.692a3.012,3.012,0,0,1,.877,2.477c0,.291-.01.611-.031.952h0ZM936,803V508h527V803Zm-694,0V508H769V803ZM45.437,798.668a12.547,12.547,0,0,1-3.953-.369,1.462,1.462,0,0,1-.815-1.476,1.4,1.4,0,0,1,.815-1.446,13.631,13.631,0,0,1,3.953-.338H64.264a10.465,10.465,0,0,1,3.445.354,1.68,1.68,0,0,1-.076,2.907,12,12,0,0,1-3.768.369Zm3.229-49.834H45.684a16.418,16.418,0,0,1-4.23-.308c-.521-.2-.785-.742-.785-1.6a1.342,1.342,0,0,1,.923-1.384,15.094,15.094,0,0,1,4.091-.338h2.983v3.629h0ZM936,391V96h527V391Zm-694,0V96H769V391Z'
              transform={'translate(9.5 6.5)'}
              fill={'#1d839c'}
              stroke={'#1f66a6'}
              stroke-width='1'
              filter='url(#Union_4)'
            />
          </g>
        </svg>
      </ProjectWrapper>
    </div>
  )
}
export default ProjectSection

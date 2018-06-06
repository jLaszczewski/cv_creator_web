import React, { Fragment } from 'react'
import styles from './linear-slider.css'
import { Dot, HFlex } from '../../styled-components'

const line = (numberOfActive, numberOfDots) => {
  function makeLine(circle) {
    const { dot } = styles

    const n = circle.length
    if (n < numberOfDots) {
      const left = (12 * (n / numberOfDots))

      return makeLine(circle.concat(
        <Dot
          key={n}
          className={n < numberOfActive ? dot : ''}
          style={{
              left: `${left}vw`,
            }}
        />
      ))
    } else {
      return circle
    }
  }

  return makeLine([])
}

const LinearSlider = ({ label = '', numberOfActive, numberOfDots = 10 }) => {
  const { containerStyle, textStyle, lineStyle } = styles

  return (
    <HFlex className={containerStyle}>
      <span className={textStyle}>{label.toUpperCase()}</span>
      <div className={lineStyle}>
        {line(numberOfActive, numberOfDots)}
      </div>
    </HFlex>
  )
}

export { LinearSlider }

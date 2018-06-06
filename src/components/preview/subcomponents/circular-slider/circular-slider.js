import React from 'react'
import styles from './circular-slider.css'
import { Dot } from '../../styled-components'

const circle = (numberOfActive, numberOfDots) => {
  function makeCircle(circle) {
    const { dot } = styles

    const n = circle.length
    if (n < numberOfDots) {
      const left = (Math.sin(Math.PI * 2 * n / numberOfDots) * 5 + 5)
      const top = (-Math.cos(Math.PI * 2 * n / numberOfDots) * 5 + 5)

      return makeCircle(circle.concat(<Dot
          key={n}
          className={n < numberOfActive ? dot : ''}
          style={{
              left: `${left}vw`,
              top: `${top}vw`
            }}
        />))
    } else {
      return circle
    }
  }

  return makeCircle([])
}

const CircularSlider = ({ label = '', numberOfActive, numberOfDots = 24 }) => {
  const { containerStyle, textStyle } = styles

  return (
    <div className={containerStyle}>
      {circle(numberOfActive, numberOfDots)}
      <span className={textStyle}>{label.toUpperCase()}</span>
    </div>
  )
}

export { CircularSlider }

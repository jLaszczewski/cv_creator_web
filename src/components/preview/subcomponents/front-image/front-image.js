import React from 'react'
import styles from './front-image.css'

const FrontImage = ({ image, className, whiteBackground }) => {
  const { containerStyle, imageStyle } = styles

  return (
    <div>
    <div className={containerStyle}>
      <img className={imageStyle} style={whiteBackground ? { backgroundColor: 'white' } : {}} src={image} alt="" />
    </div>
    </div>
  )
}

export { FrontImage }

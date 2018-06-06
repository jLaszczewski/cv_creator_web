import React from 'react'
import photo from '../../../../public/photo.png'
import styles from './photo-box.css'

const PhotoBox = ({ className }) => {
  const { image } = styles

  return (
    <img className={[image, className].join(' ')} src={photo} alt="" />
  )
}

export { PhotoBox }

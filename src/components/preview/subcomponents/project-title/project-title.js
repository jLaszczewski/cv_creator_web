import React from 'react'
import { HFlex } from '../../styled-components'
import styles from './project-title.css'
import BCF_IMAGE from '../../../../public/BCF_logotype_JPG_CMYK.jpg'

const ProjectTitle = ({ children = '' }) => {
  const { imageStyle, textStyle, containerStyle } = styles

  return (
    <HFlex className={containerStyle}>
      <img className={imageStyle} src={BCF_IMAGE} alt=''/>
      <span className={textStyle}>{children.toUpperCase()}</span>
    </HFlex>
  )
}

export { ProjectTitle }

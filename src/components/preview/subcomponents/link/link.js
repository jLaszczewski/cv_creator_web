import React from 'react'
import styles from './link.css'
import { HFlex } from '../../styled-components'
import STACK_IMAGE from '../../../../public/stack.png'
import GITHUB_IMAGE from '../../../../public/github.png'
import EMAIL_IMAGE from '../../../../public/mail.png'

const Link = ({ kind, value, image, link }) => {
  const { underlineStyle, containerStyle, imageStyle, textStyle } = styles


  if (!image && !link) {
    switch(kind) {
      case 'stack':
        image = STACK_IMAGE
        link = `https://stackoverflow.com${value}`
        break
      case 'github':
        image = GITHUB_IMAGE
        link = `https://github.com${value}`
        break
      case 'email':
        image = EMAIL_IMAGE
        link = `mailto:${value}`
        break
      default:
        break
    }
  }

  return (
    <HFlex className={containerStyle}>
      <img src={image} alt="" className={imageStyle} />
      <div style={{ width: '2vw' }} />
      {kind === 'email'
        ?
        <a href={link} className={textStyle}>{value}</a>
        :
        <a href={link} className={[textStyle, underlineStyle].join(' ')} target='_blank'>{value}</a>
      }
    </HFlex>
  )
}

export { Link }

import React from 'react'
import styles from './common-card.css'
import { Card, VFlex } from '../../styled-components'
import { FrontImage } from '../'

const CommonCard = ({ children, image, label, className, containerClassName, whiteBackground = false }) => {
  const { labelStyle, childrenStyle, containerStyle } = styles

  return (
    <Card className={[containerStyle, containerClassName].join(' ')}>
      <VFlex style={{ alignItems: 'center' }}>
        <FrontImage image={image} whiteBackground={whiteBackground} />
        <div style={{ height: '4.4075mm' }} />
        <span className={labelStyle}>{label.toUpperCase()}</span>
      </VFlex>
      <div className={[childrenStyle, className].join(' ')}>
        {children}
      </div>
    </Card>
  )
}

export { CommonCard }

import React from 'react'
import { Text, VFlex, HFlex } from '../../styled-components'
import styles from './title-date-label.css'

const TitleDateLabel = ({ title = '', date: { beginDate = '', finishDate = '' }, label = '', className, style }) => {
  const { textStyle, containerStyle, flexContainerStyle } = styles

  return (
    <VFlex className={[flexContainerStyle, className].join(' ')} style={style}>
      <HFlex className={containerStyle}>
        <Text className={textStyle}>{`${title} /`}&nbsp;</Text>
        <Text className={textStyle} style={{color: 'var(--blue)'}}>{beginDate.toUpperCase()} {finishDate === beginDate ? '' : finishDate ? `- ${finishDate.toUpperCase()}` : '- NOW'}</Text>
      </HFlex>
      <Text>{label}</Text>
    </VFlex>
  )
}

export { TitleDateLabel }

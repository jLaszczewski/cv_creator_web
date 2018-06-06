import React, { Fragment } from 'react'
import styles from './blue-label.css'

const BlueLabel = ({ children, className }) => {
  const { labelStyle } = styles;

  return (
    <Fragment>
      <span className={[labelStyle, className].join(' ')}>{children.toLowerCase().replace(/(\b\w)/gi, (m) => ( m.toUpperCase()))}</span>
    </Fragment>
  )
}

export { BlueLabel }

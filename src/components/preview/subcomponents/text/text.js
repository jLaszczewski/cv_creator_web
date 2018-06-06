import React from 'react'
import styles from './text.css'

const Text = ({ children, className }) => {
  const { textStyle } = styles

  return (
    <span className={[textStyle, className].join(' ')}>{children}</span>
  )
}

export { Text }

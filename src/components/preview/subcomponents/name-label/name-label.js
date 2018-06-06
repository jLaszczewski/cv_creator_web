import React from 'react'
import styles from './name-label.css'

const NameLabel = ({ name, lastname, className }) => {
  const { nameStyle, lastnameStyle, container } = styles

  return (
    <div className={container}>
        <span className={nameStyle}>{name.toUpperCase()}</span>
        <div style={{ height: '2.77vw' }} />
        <span className={[nameStyle, lastnameStyle, className].join(' ')}>{lastname.toUpperCase()}</span>
    </div>
  )
}

export { NameLabel }

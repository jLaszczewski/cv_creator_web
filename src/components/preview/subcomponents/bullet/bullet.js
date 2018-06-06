import React from 'react'
import { Text } from '../../styled-components'

const Bullet = ({ children }) => {
  return (
    <li style={{ listStyleType: 'disk' }}>
      <Text>{children}</Text>
    </li>
  )
}

export { Bullet }

import React from 'react'
import { Diamond, HFlex, Line } from '../../styled-components'
// import {  } from '../'

const Footer = () => {
  return (
    <HFlex style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Line />
      <Diamond style={{ marginLeft: '0.5vw', marginRight: '0.5vw' }}/>
      <Line />
    </HFlex>
  )
}

export { Footer }

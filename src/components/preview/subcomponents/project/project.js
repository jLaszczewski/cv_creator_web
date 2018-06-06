import _ from 'lodash'
import React from 'react'
import {
  ProjectTitle,
  Bullet,
  CommonCard,
  Footer
} from '../'
import {
  Text,
  HFlex,
  VFlex,
  PageA4
} from '../../styled-components'
import styles from './project.css'

import CHART_IMAGE from '../../../../public/chart.png'

const renderStats = (stats) => (
  _.map(stats, ({ quantity, activities }, key) => (
    <VFlex style={{ alignItems: 'center', marginTop: '2vw' }} key={key}>
      <Text>{quantity.toUpperCase()}</Text>
      <Text>{activities.toUpperCase()}</Text>
    </VFlex>
  ))
)

const renderTechnologies = (technologies) => (
  _.map(technologies, (technology, key) => (
      <Bullet key={key}>{technology}</Bullet>
  ))
)

const Project = ({ title, text, technologies, stats }) => {
  const {
    statsStyle,
    textStyle,
    listStyle,
    containerStyle,
    containerStyleStats
  } = styles

  return (
    <VFlex style={{ width: '89.26vw', margin: 'auto', justifyContent: 'space-around', flex: 1 }}>
      <div>
        <ProjectTitle >{title}</ProjectTitle>
          <HFlex className={containerStyle}>
            <VFlex style={{ justifyContent: 'flex-start', marginLeft: '2vw', marginRight: '3vw' }}>
              <Text className={textStyle}>{text}</Text>
              <Text>Application uses:</Text>
              <ul className={listStyle}>
                {renderTechnologies(technologies)}
              </ul>
            </VFlex>
            <CommonCard label='statistic' image={CHART_IMAGE} containerClassName={containerStyleStats} className={statsStyle}>
              {renderStats(stats)}
            </CommonCard>
          </HFlex>
      </div>
      <Footer />
    </VFlex>
  )
}

export { Project }

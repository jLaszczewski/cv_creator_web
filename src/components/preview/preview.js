import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import {
  NameLabel,
  BlueLabel,
  PhotoBox,
  CommonCard,
  Link,
  TitleDateLabel,
  CircularSlider,
  LinearSlider,
  Project
} from './subcomponents'

import {
  Row,
  PageA4,
  Card,
  PDF,
  VFlex,
  HFlex,
  Text
} from './styled-components'

import BCF_IMAGE from '../../public/BCF_logotype_JPG_CMYK.jpg'
import CHART_IMAGE from '../../public/chart.png'
import BARCHART_IMAGE from '../../public/barchart.png'
import CAP_IMAGE from '../../public/cap.png'
import CASE_IMAGE from '../../public/case.png'

import styles from './preview.css'

const TRAININGS = {
    5: {
      id: 5,
      title: 'iOS App Development with Swift',
      date: {
        beginDate: 'FEB 2017',
        finishDate: 'MAR 2017'
      }
    },
    6: {
      id: 6,
      title: 'Programming the relays and programmable controllers',
      date: {
        beginDate: 'JAN 2014'
      }
    },
    7: {
      id: 7,
      title: 'IT Essentials PC Hardware and Software',
      date: {
        beginDate: 'JAN 2012'
      },
    },
    8: {
      id: 8,
      title: 'Polish Association of Electrical Engineers (SEP) electrician certificate',
      date: {
        beginDate: 'FEB 2011'
      }
    }
  }

  const WORK_EXPERIENCE = {
      5: {
        id: 5,
        title: 'BCF SOFTWARE Sp. z o.o.',
        date: {
          beginDate: 'OCT 2017'
        },
        jobTitle: 'Software Developer',
        label: 'learning, development and creating new applications related to company projects.'
      },
      6: {
        id: 6,
        title: 'VENATU Z.DOLLA B.STANDIO A.ZATWARNICKA SP.J',
        date: {
          beginDate: 'FEB 2016 '
        },
        jobTitle: 'iOS Software Developer',
        label: 'Working in 3-person team. Development of object reservation mobile app on iOS in Swift.'
      },
      7: {
        id: 7,
        title: 'Atel Electronics',
        date: {
          beginDate: 'SEP 2015',
          finishDate: 'SEP 2015'
        },
        jobTitle: 'Automation Specialist – Intern',
        label: 'network configuration: working with SKY CONTROL/VUTLAN system, managed switch O-Ring and TP-Link, working with vision system.'
      },
      8: {
        id: 8,
        title: 'Opole City Hall',
        date: {
          beginDate: 'APR 2011',
          finishDate: 'MAY 2011'
        },
        jobTitle: 'Computer Specialist - Intern',
        label: 'computer equipment services, helping with office software, computer assembly.'
      },
    }

    const EDUCATION = {
        5: {
          id: 5,
          title: 'MSc in Computer Science',
          date: {
            beginDate: '2016'
          },
          label: 'Opole University of Technology'
        },
        6: {
          id: 6,
          title: 'BSc in Automatic Control and Robotics',
          date: {
            beginDate: '2012',
            finishDate: '2016'
          },
          label: 'Opole University of Technology'
        }
      }

  const SKILLS = {
      1: {
        id: 1,
        title: 'iOS',
        value: '10'
      },
      2: {
        id: 2,
        title: 'SWIFT',
        value: '8'
      },
      3: {
        id: 3,
        title: 'Scala',
        value: '2'
      },
      4: {
        id: 4,
        title: 'React JS',
        value: '6'
      },
      5: {
        id: 5,
        title: 'React Native',
        value: '6'
      },
      6: {
        id: 6,
        title: 'Android',
        value: '3'
      },
      7: {
        id: 7,
        title: 'JS',
        value: '7'
      },
      8: {
        id: 8,
        title: 'HTML5',
        value: '9'
      },
      9: {
        id: 9,
        title: 'CSS3',
        value: '9'
      },
      10: {
        id: 10,
        title: 'MySQL',
        value: '6'
      },
      11: {
        id: 11,
        title: 'AWS',
        value: '6'
      },
      12: {
        id: 12,
        title: 'OOP',
        value: '9'
      },
      13: {
        id: 13,
        title: 'UX/UI',
        value: '9'
      },
      14: {
        id: 14,
        title: 'Node.js',
        value: '6'
      }
    }

  const PORTFOLIO = {
    1: {
      id: 1,
      title: 'project 1',
      text: 'Application shows how many bitcoins the user have. Application is working on a big data sets from blockchain API system. This application allows users to send and receive payments through API. Jakub wrote very smart, self-learning algorithms to interact with the blockchain API. Jakub did a research to find the best UX/UI practices.',
      technologies: {
        0: 'Swift',
        1: 'Node.js',
        2: 'React JS',
        3: 'React Native',
        4: 'HTML5',
        5: 'JIRA',
        6: 'CSS3',
        7: 'Firebase',
        8: 'GIT'
      },
      stats: {
        0: { quantity: '~100K', activities: 'Database Request'},
        1: { quantity: '~1K', activities: 'Acvive users'},
        2: { quantity: '~800', activities: 'Active wallets'},
        3: { quantity: '~1K+', activities: 'Commits'},
      }
    },
  2: {
    id: 2,
    title: 'project 1',
    text: 'Application shows how many bitcoins the user have. Application is working on a big data sets from blockchain API system. This application allows users to send and receive payments through API. Jakub wrote very smart, self-learning algorithms to interact with the blockchain API. Jakub did a research to find the best UX/UI practices.',
    technologies: {
      0: 'Swift',
      1: 'Node.js',
      2: 'React JS',
      3: 'React Native',
      4: 'HTML5',
      5: 'JIRA',
      6: 'CSS3',
      7: 'Firebase',
      8: 'GIT'
    },
    stats: {
      0: { quantity: '~100K', activities: 'Database Request'},
      1: { quantity: '~1K', activities: 'Acvive users'},
      2: { quantity: '~800', activities: 'Active wallets'},
      3: { quantity: '~1K+', activities: 'Commits'},
    }
  },
  3: {
    id: 3,
    title: 'project 1',
    text: 'Application shows how many bitcoins the user have. Application is working on a big data sets from blockchain API system. This application allows users to send and receive payments through API. Jakub wrote very smart, self-learning algorithms to interact with the blockchain API. Jakub did a research to find the best UX/UI practices.',
    technologies: {
      0: 'Swift',
      1: 'Node.js',
      2: 'React JS',
      3: 'React Native',
      4: 'HTML5',
      5: 'JIRA',
      6: 'CSS3',
      7: 'Firebase',
      8: 'GIT'
    },
    stats: {
      0: { quantity: '~100K', activities: 'Database Request'},
      1: { quantity: '~1K', activities: 'Acvive users'},
      2: { quantity: '~800', activities: 'Active wallets'},
      3: { quantity: '~1K+', activities: 'Commits'},
    }
  }
}

class Preview extends Component {
  renderTrainings() {
    return _.map(TRAININGS, ({ id, title, date: { beginDate, finishDate} }, key) => {
      return <TitleDateLabel key={key} style={{ marginBottom: '1.5vw'}} title={title} date={{beginDate, finishDate}} />
    })
  }

  renderSkills() {
    return _.map(SKILLS, ({ id, title, value}, key) => {
      return <LinearSlider key={key} label={title} numberOfActive={value} />
    })
  }

  renderWorkExperience() {
    const { card1r3childrenContainer} = styles
    return _.map(WORK_EXPERIENCE, ({ id, title, date: { beginDate, finishDate}, jobTitle, label }, key) => {
      return (
        <HFlex key={key} className={card1r3childrenContainer}>
          <TitleDateLabel key={key} title={title} date={{beginDate, finishDate}} label={`${jobTitle}: ${label}`} />
        </HFlex>
      )
    })
  }

  renderEducation() {
    const { educationChildStyle} = styles
    return _.map(EDUCATION, ({ id, title, date: { beginDate, finishDate}, label }, key) => {
      return (
          <TitleDateLabel key={key} title={title} date={{beginDate, finishDate}} className={educationChildStyle} label={label} />
      )
    })
  }

  renderPortfolio() {
    var isFirst = true

    return _.map(PORTFOLIO, ({ title, stats, text, technologies }, key) => {
      return (
        <PageA4 key={key}>
          {isFirst ? <CommonCard containerClassName={styles.portfolioTitleStyle} label={'PORTFOLIO'} whiteBackground image={BCF_IMAGE} /> : ''}
          {isFirst ? isFirst = !isFirst : ''}
          <Project title={title} stats={stats} text={text} technologies={technologies} />
        </PageA4>
      )
    })
  }

  render() {
    const { mainLabels, container, card1r1, card2r1, card1r2, card2r2, card1r3, card1r3children, image, educationStyle, linkStyle } = styles

    return (
      <Fragment>
        <PDF>
          <Row>
            <Card className={card1r1}>
              <div className={mainLabels}>
                <div className={container}>
                  <div className={mainLabels}>
                    <NameLabel name="Jakub" lastname="Laszczewski" />
                    <div style={{ height: '4.37vw' }} />
                    <BlueLabel>Software Developer</BlueLabel>
                  </div>
                  <PhotoBox className={image} />
                </div>
                <div style={{ height: '1.93vw' }} />
                <Text>
                  Very ambitious and diligent young programmer, who wants to gain more professional experience and learn from the best.
                </Text>
              </div>
            </Card>
            <CommonCard containerClassName={card2r1} className={linkStyle} whiteBackground label={'links'} image={BCF_IMAGE}>
              <VFlex>
                <Link kind={'github'} value={'/jLaszczewski'} />
                <Link kind={'stack'} value={'/u/5569670'} />
                <Link kind={'email'} value={'marcin.walas@bcf-software.com'} />
              </VFlex>
            </CommonCard>
          </Row>
          <Row>
            <CommonCard containerClassName={card1r2} label={'certifications & trainings'} image={CAP_IMAGE}>
              <VFlex>
                {this.renderTrainings()}
              </VFlex>
            </CommonCard>
            <CommonCard containerClassName={card2r2} label={'personality'} image={CHART_IMAGE}>
              <VFlex>
                <HFlex>
                  <CircularSlider label={'reliability'} numberOfActive={22} />
                  <CircularSlider label={'team skills'} numberOfActive={20} />
                </HFlex>
                <HFlex>
                  <CircularSlider label={'ability to learn'} numberOfActive={23} />
                  <CircularSlider label={'flexibility'} numberOfActive={23} />
                </HFlex>
              </VFlex>
            </CommonCard>
          </Row>
          <Row>
            <CommonCard label={'professional skills'} containerClassName={card1r3} className={card1r3children} image={BARCHART_IMAGE}>
              {this.renderSkills()}
            </CommonCard>
          </Row>
          <Row>
            <CommonCard label={'Work experience'} containerClassName={card1r3} className={card1r3children}  image={CASE_IMAGE}>
              {this.renderWorkExperience()}
            </CommonCard>
          </Row>
          <Row>
            <CommonCard label={'education'} containerClassName={card1r3} className={educationStyle} image={CAP_IMAGE}>
              {this.renderEducation()}
            </CommonCard>
          </Row>
          {this.renderPortfolio()}
        </PDF>
      </Fragment>
    )
  }
}

export { Preview };

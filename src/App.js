import React, { Component, Fragment } from 'react'
import { Preview } from './components/preview'
import styles from './css.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Preview />
      </Fragment>
    )
  }
}

// class App extends Component {
//
//
//   render() {
//     const { parent, child } = styles
//     return (
//       <Fragment>
//     <div className={parent}>
//       <div className={child}>
//         vla
//       </div>
//     </div>
//       </Fragment>
//     )
//   }
// }

export default App

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Login />
      </Fragment>
    )
  }
}

export default connect()(App)

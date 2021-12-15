import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData, handleLoginData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'
import Login from './Login'
import Logo from './Logo'

class App extends Component {
  componentDidMount() {
    // this.props.dispatch(handleInitialData())
    // this.props.dispatch(handleLoginData())
  }
  render() {
    return (
      <Fragment>
      <Login />
      </Fragment>
      
    )
  }
}
// function mapStateToProps({ authedUser }) {
//   return {
//     loading: authedUser === null
//   }
// }

// export default connect(mapStateToProps)(App)
export default connect()(App)

/**
  <Router>
          <Fragment>
            <LoadingBar />
            <div className='container'>
              <Nav />
              {this.props.loading === true
                ? null
                : <div>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/tweet/:id' component={TweetPage} />
                    <Route path='/new' component={NewTweet} />
                  </div>}
            </div>
          </Fragment>
        </Router>

 */
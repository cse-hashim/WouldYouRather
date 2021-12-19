import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'
import Login from './Login'
import { Link, withRouter } from 'react-router-dom'
import QuestionPage from './QuestionPage'
import Polls from './Polls'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'


class Loggedin extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
          <Router>
          <Fragment>
            <LoadingBar />
            <div className='container'>
              <Nav />
              {this.props.loading === true
                ? null
                : <div>
                  
                    <Route path='/' exact component={Polls} />
                    {/* <Route path='/' exact component={Dashboard} /> */}
                    <Route path='/tweet/:id' component={TweetPage} />
                    <Route path='/question/:id' component={QuestionPage} />

                    <Route path='/new' component={NewTweet} />
                    <Route path='/leaderboard' component={LeaderBoard} />

                    <Route path='/add' component={NewQuestion} />
                  </div>}
            </div>
          </Fragment>
        </Router> 
    )
  }
}
function mapStateToProps({ authedUser, }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(Loggedin)
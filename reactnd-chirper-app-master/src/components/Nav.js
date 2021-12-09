import { connect } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { handleToggleTweet } from '../actions/tweets'
import { Link, withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    const { users, authedUser } = this.props
    let user = null
    if (users !== {}) {
      console.log('%%%%%%%%', this.props)

      console.log('%%%%%%%%', authedUser)
      user = users[authedUser]

    }
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New Tweet
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink to='#' activeClassName='active'>
                <div className='dropdown div'>
                  <div className='dropdown-content mya trans'>
                    <span className=' mya' >
                      <div>{user.name}</div>
                      <div className='handle'>@{authedUser}</div>
                    </span>
                  </div>
                  <div className='upperimg'>
                    <img
                      src={user.avatarURL}
                      alt={`Avatar of ${user.name}`}
                      className='authed-avatar my-nav upperimg'
                    />
                  </div>
                </div>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser: authedUser ? authedUser : null,
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
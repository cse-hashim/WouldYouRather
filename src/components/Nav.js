import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { showLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
import Logo from './Logo'

class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(showLoading)
    dispatch(setAuthedUser(null))

  }
  render() {
    const { users, authedUser } = this.props
    let user = null
    if (users !== {}) {
      user = users[authedUser]
    }
    return (
      <nav className='nav'>
        <ul>
          <li>
            <Logo />
          </li>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' exact activeClassName='active'>
              New Poll
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' exact activeClassName='active'>
              Board
            </NavLink>
          </li>

          {user && (
            <li>
              <div className='dropdown'>
                <div className='dropdown-content mya trans'>
                  <div className='myfield shrink-left'>{user.name}</div>
                  <div className='handle myfield shrink-left'>@{authedUser}</div>
                  <input
                    type='button'
                    value='Logout'
                    className='myfield p-10p red'
                    onClick={e => this.handleLogout(e)}
                  />
                </div>
                <div className='upperimg'>
                  <img
                    src={user.avatarURL}
                    alt={`Avatar of ${user.name}`}
                    className='authed-avatar my-nav upperimg'
                  />
                </div>
              </div>
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
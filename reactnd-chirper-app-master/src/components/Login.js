import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { LoadingBar, showLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
import { handleInitialData, handleLoginData } from '../actions/shared'
import authedUser from '../reducers/authedUser'
import users from '../reducers/users'
import Loggedin from './Loggedin'
class User extends Component {
    handleLogin = (e) => {
        e.preventDefault()
        const { id, dispatch } = this.props
        dispatch(showLoading)
        dispatch(setAuthedUser(id))

    }
    render() {
        const { id, name, avatar, message, _action } = this.props
        return (
            <div className='tweet'>
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className='tweet-info'>
                    <div>
                        <span>{name}</span>
                        <div>@{id}</div>
                        <input
                            type='button'
                            value={message}
                            className='myfield green p-10p'
                            onClick={_action ? _action : this.handleLogin}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
const LoginCard = (props) => {
    const { users, dispatch } = props
    const keys = Object.keys(users);
    return (
        <Fragment>
            <h3 className='center'>Login</h3>
            <ul className='dashboard-list'>
                {keys.map((id) => (
                    <li key={id}>
                        <User
                            id={id}
                            name={users[id].name}
                            avatar={users[id].avatarURL}
                            dispatch={dispatch}
                            message='Login'
                        />
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}
const LogoutCard = (props) => {
    const { dispatch, handle, authedUser } = props
    return (
        <Fragment>
            <h3 className='center'>Logout</h3>
            <h4 className='center'>you are logged in as: </h4>
            <User
                id={authedUser.id}
                name={authedUser.name}
                avatar={authedUser.avatarURL}
                dispatch={dispatch}
                message='Logout'
                _action={handle}
            />
        </Fragment>
    )
}
class Login extends Component {
    componentDidMount() {
        this.props.dispatch(handleLoginData())
    }
    handleLogout = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(showLoading)
        dispatch(setAuthedUser(null))

    }
    render() {
        const { authedUser, users, dispatch } = this.props
        console.log('%%%%%%%', this.props)
        if (users !== {}) {
            if (authedUser) {
                return (
                    <Fragment>
                    {/* <LogoutCard
                        authedUser={authedUser}
                        handle={e => this.handleLogout(e)}
                        dispatch={dispatch}
                    /> */}
                    <Loggedin />
                    </Fragment>

                )
            } else {
                return <LoginCard users={users} dispatch={dispatch} />
            }
        }
        return <p>Loading...</p>
    }
}

function mapStateToProps({ users, dispatch, authedUser }) {
    return {
        users,
        dispatch,
        authedUser: users[authedUser],
    }
}

export default connect(mapStateToProps)(Login)
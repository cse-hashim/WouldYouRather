import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {  showLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
import {  handleLoginData } from '../actions/shared'
import CreateContact from './CreateContact'
import Loggedin from './Loggedin'
import Logo from './Logo'
import { handleAddUser } from '../actions/users'
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
            <div className='question-card noquestion-card'>
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className='question-card-info'>
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
            <Logo className='center' size='40px' />
            <div className='split'>
                <div className='split-item'>
                    <Register dispatch={dispatch} />
                </div>
                <div className='split-item vl'>
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
                </div>
            </div>
        </Fragment>
    )
}
class Register extends Component {

    handleRegister = (user) => {
        const { dispatch } = this.props
        dispatch(showLoading)
        dispatch(handleAddUser(user))

    }

    render() {
        return (
            <Fragment>
                <CreateContact onCreateContact={this.handleRegister} />
            </Fragment>

        )
    }
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
        if (authedUser) {
            return (
                <Fragment>
                    <Loggedin />
                </Fragment>

            )
        } else {
            return <LoginCard users={users} dispatch={dispatch} />
        }
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
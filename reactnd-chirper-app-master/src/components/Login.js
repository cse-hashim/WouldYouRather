import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { showLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
import { handleInitialData, handleLoginData } from '../actions/shared'
import authedUser from '../reducers/authedUser'
import users from '../reducers/users'
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
                        <input type='button' value={message} onClick={_action ? _action : this.handleLogin} />
                        {/* <input type='button' value='Logout' onClick={e=>this.handleLogout(e)} /> */}

                    </div>
                </div>
            </div>
        )
    }
}
class Login extends Component {
    componentDidMount() {
        this.props.dispatch(handleLoginData())
    }

    handleLogout = (e) => {
        e.preventDefault()

        const { id, dispatch } = this.props
        dispatch(showLoading)
        dispatch(setAuthedUser(null))
        
    }

    render() {
        const { authedUser, users } = this.props




        console.log('%%%%%%%', this.props)
        const keys = Object.keys(this.props.users);
        return (
            <Fragment>
                {this.props.users !== {} && (
                    <Fragment>

                        {!this.props.authedUser && (
                            <Fragment>
                                <h3 className='center'>Login</h3>

                                <ul className='dashboard-list'>
                                    {keys.map((id) => (
                                        <li key={id}>
                                            <User
                                                id={id}
                                                name={this.props.users[id].name}
                                                avatar={this.props.users[id].avatarURL}
                                                dispatch={this.props.dispatch}
                                                message='Login'
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Fragment>
                        )}
                        {this.props.authedUser && (
                            <div>
                                <h3 className='center'>Logout</h3>

                                <h4 className='center'>you are logged in as: </h4>
                                <User 
                                    id={authedUser.id} 
                                    name={authedUser.name} 
                                    avatar={authedUser.avatarURL} 
                                    dispatch={this.props.dispatch} 
                                    message='Logout' 
                                    _action={e => this.handleLogout(e)}
                                />
                            </div>
                        )}
                    </Fragment>
                )}
            </Fragment>
        )
    }
}

function mapStateToProps({ users, dispatch, authedUser }) {
    return {
        users,
        dispatch, authedUser: users[authedUser]
    }
}

export default connect(mapStateToProps)(Login)
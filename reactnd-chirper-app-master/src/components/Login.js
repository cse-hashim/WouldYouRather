import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { LoadingBar, showLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
import { handleInitialData, handleLoginData } from '../actions/shared'
import { addUser } from '../actions/users'
import authedUser from '../reducers/authedUser'
import users from '../reducers/users'
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
            <div className='tweet notweet'>
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
            <Logo className='center' size='40px'/>
        <div className='split'>
            <div className='split-item'>
                <Register dispatch={dispatch}/>
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
class RegisterCard extends Component{
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    constructor(props) {
        super(props);
        // this.state = {value: ''};
    
         this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    render(){
    return (
                  <form onSubmit={this.handleSubmit}>
          <input type="text"  value={this.state.name} placeholder='Name'/>
          <input type="text"  value={this.state.handle} placeholder='Handle'/>
            <input type="submit" value="Submit" />
      </form>
    )
}
}
class Register extends Component {

    handleRegister = (user) => {
        // e.preventDefault()
        const { dispatch } = this.props
        dispatch(showLoading)
        // dispatch(addUser(user))
        dispatch(handleAddUser(user))

    }

    render() {
        return (
            <Fragment>
            {/* <RegisterCard /> */}
            <CreateContact onCreateContact={this.handleRegister}/>
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
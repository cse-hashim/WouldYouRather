import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

const BoardItem = (props) => {
  const { id, users } = props
  const author = users[id]

  return (
    <Fragment>
      <div className='grid-item boardcol'>
        <img
          src={author.avatarURL}
          alt={`Avatar of ${author.name}`}
          className='avatar'
        />
      </div>
      <div className='grid- boardcol'>

        <span>{author.name}</span>
      </div>
      <div className='grid-item boardcol'>
        {Object.keys(author.questions).length}
      </div>
      <div className='grid-item boardcol'>
        {Object.keys(author.answers).length}
      </div>
    </Fragment>
  )
}
class Polls extends Component {//dashboard of polls
  render() {
    return (
      <div>
        <h3 className='center'>Leader Board</h3>
        <ul className='dashboard-list'>
          <li className='question-card boardrow'>
            <div className='grid-item boardcol'>
              Avatar
            </div>
            <div className='grid- boardcol'>
              Name
            </div>
            <div className='grid-item boardcol'>
              #Asked
            </div>
            <div className='grid-item boardcol'>
              #voted
            </div>
          </li>
          {this.props.UsersIds.map((id) => (
            <li key={id} className='question-card boardrow'>
              <BoardItem id={id} users={this.props.users} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {

  return {
    UsersIds: Object.keys(users)
      .sort((a, b) => (
        (Object.keys(users[b].questions).length + Object.keys(users[b].answers).length)
        - (Object.keys(users[a].questions).length + Object.keys(users[a].answers).length)
      )),
    users,

  }
}

export default connect(mapStateToProps)(Polls)
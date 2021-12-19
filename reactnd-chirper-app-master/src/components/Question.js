import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { formatDate } from '../utils/helpers'
class Question extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if (this.props.onCreateContact && values.id && values.name) {
      this.props.onCreateContact(
        {
          id: values.id,
          name: values.name,
          get avatarURL() {
            return values.avatarURL ? values.avatarURL : `https://ui-avatars.com/api/?rounded=true&name=${values.name.split(" ").join("+")}&color=random&background=random`
          },

        }
      )
    }
  }
  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/question/${id}`)
  }
  render() {
    const { question, authedUser, author } = this.props
    if (question === null) {
      return <p>This question doesn't existd</p>
    }
    const { timestamp, optionOne, id } = question

    return (
      // <Link to={`/question/${id}`} className='tweet'>
      <Link to={{
        pathname: `/question/${id}`,
        authedUser: authedUser,
        question: question
      }} className='tweet' >
        <img
          src={author.avatarURL}
          alt={`Avatar of ${author.name}`}
          className='avatar'
        />
        <div className='tweet-info'>
          <div>
            <span>{author.name} asks:</span>
            <div>{formatDate(timestamp)}</div>
            <h4>Would You Rather ...</h4>
            <p>...{optionOne.text.length > 2 ? optionOne.text.split(" ").slice(0, 3).join(" ") : optionOne.text}...</p>
          </div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]
  return {
    authedUser,
    question,
    author: users[question.author]
  }
}

export default withRouter(connect(mapStateToProps)(Question))
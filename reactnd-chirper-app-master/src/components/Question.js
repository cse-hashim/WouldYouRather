import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet, formatDate, formatQuestion } from '../utils/helpers'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { handleToggleTweet } from '../actions/tweets'
import { handleAnswerQuestion } from '../actions/questions'
import { Link, withRouter } from 'react-router-dom'
import serializeForm from 'form-serialize'
class Question extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })

    if (this.props.onCreateContact&&values.id&&values.name) {
      this.props.onCreateContact(
        {
          
            id:values.id,
            name:values.name,
            get avatarURL() {
              return values.avatarURL ? values.avatarURL : `https://ui-avatars.com/api/?rounded=true&name=${values.name.split(" ").join("+")}&color=random&background=random`
            },
            tweets: []
          
        }
      )
    }
  }
  // handleAnswerQuestion = (e) => {
  //   e.preventDefault()
  //   const values = serializeForm(e.target, { hash: true })

  //   const { dispatch, question, authedUser, answer, users } = this.props

  //   dispatch(handleAnswerQuestion({
  //     qid: question.id,
  //     // hasLiked: tweet.hasLiked,
  //     authedUser,
  //     answer,
  //     users,
  //   }))
  // }
  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/question/${id}`)
  }
  render() {
    const { question,authedUser,author } = this.props
    console.log('---Question.js(57)--->',question)
    if (question === null) {
      return <p>This Tweet doesn't existd</p>
    }

    const {
       timestamp, optionOne, id, parent
    } = question
    // const {avatarURL} = users[author]

    return (
      // <Link to={`/question/${id}`} className='tweet'>
<Link to ={{
    pathname: `/question/${id}`, 
        authedUser:authedUser,
        question:question
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
            <p>...{optionOne.text.length>2?optionOne.text.split(" ").slice(0,3).join(" "):optionOne.text}...</p>

            {/* <h4>Would You Rather</h4>
            <form onSubmit={this.handleAnswerQuestion} className='create-contact-form'>
            <input type="radio" id="optionOne" name="optionOne" value={question.optionOne.text} checked={users[authedUser].answers[question.id]==='optionOne'} disabled={users[authedUser].answers[question.id]}/>
            <input type="radio" id="optionTwo" name="optionTwo" value={question.optionTwo.text} checked={users[authedUser].answers[question.id]==='optionTwo'} disabled={users[authedUser].answers[question.id]}/>
            <button className='myfield blue p-10p p-25p' disabled={users[authedUser].answers[question.id]}>Vote</button>
            </form> */}
          </div>
          
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
  const optionOneText=question.optionOne.text
  const optionTwoText=question.optionTwo.text
  return {
    authedUser,
    question,//: question
      // ? formatQuestion({question, author:users[question.author], authedUser, optionOneText,optionTwoText})
      // : null
    author:users[question.author]
  }
}

export default withRouter(connect(mapStateToProps)(Question))
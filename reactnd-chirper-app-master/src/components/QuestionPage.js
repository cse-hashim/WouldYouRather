import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'
import serializeForm from 'form-serialize'
import { formatDate, formatQuestion } from '../utils/helpers'
import { _handleAnswerQuestion  } from '../actions/questions'
import QuestionResults from './QuestionResults'
import QuestionPageQuestion from './QuestionPageQuestion'

class QuestionPage extends Component {
  state = {
    selectedRadio: null
  }
  constructor(){
    super();
    this.onRadioChange = this.onRadioChange.bind(this);
    this.handleAnswerQuestion = this.handleAnswerQuestion.bind(this);

  }
  
  onRadioChange = (e) => {
    this.setState({
      selectedRadio: e.target.value
    });

  }
  handleAnswerQuestion = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    const  answer  = this.state.selectedRadio
    const { dispatch, question, authedUser,users } = this.props
    console.log('--questionpage.js(33)-->',answer)
    dispatch(_handleAnswerQuestion({
      qid: question.id,
      // hasLiked: tweet.hasLiked,
      authedUser:authedUser.id,
      answer,
      // users,

    }))
  }
  render() {
    const { authedUser, id, questions, users, question, author } = this.props
    // const question = questions[id]
    // const {
    //   author, timestamp, optionOne,optionTwo, id, parent
    // } = question
    console.log('----QuestionPage.js(29)--->', question)
    // const { authedUser,users ,questions,id} = this.props
    // const {name,avatar}=users[authedUser]
    // const {question,timestamp} = questions[id]
    console.log('----QuestionPage.js(35)--->', authedUser, id)
    const {
      timestamp, optionOne, optionTwo,
    } = question
    // const  authorObject=users[author]
    return (
      <Fragment>
        {authedUser.answers[id] ? (
          <Fragment>
            <div className='tweet'>
              <img
                src={author.avatarURL}
                alt={`Avatar of ${author.name}`}
                className='avatar'
              />
              <div className='tweet'>
                <div style={{'min-width':'100%'}}>
                <div className='tweet-info'>
                  <span>Asked By {author.name}:</span>
                  <div>{formatDate(timestamp)}</div>
                  </div>
                  <hr />

                  <h4>Results:</h4>
                  <div className=' result-inner-card'>
                  <h5>Would You Rather {optionOne.text}</h5>
                  <progress max="100" value={Math.fround(100 * optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length))}>{Math.fround(100 * optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length))}%</progress>
                  
                  <h6>{(Math.round((Math.fround(100 * optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length))) * 100) / 100).toFixed(2)}%
                   ({optionOne.votes.length} out of {optionOne.votes.length + optionTwo.votes.length})</h6>
                  {authedUser.answers[question.id] === 'optionOne' && (
                    <strong style={{color:'red'}}>{authedUser.name} voted for it</strong>
                  )}
                  </div>
                  <hr />
                  <div className=' result-inner-card'>
                  <h5>Would You Rather {optionTwo.text}</h5>
                  <progress 
                    max="100" 
                    value={Math.fround(100 * optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length))}>
                      {Math.fround(100 * optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length))}%</progress>
                  
                  <h6>{(Math.round((Math.fround(100 * optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length))) * 100) / 100).toFixed(2)}%
                   ({optionTwo.votes.length} out of {optionOne.votes.length + optionTwo.votes.length})</h6>
                  {authedUser.answers[question.id] === 'optionTwo' && (
                    <strong style={{color:'red'}}>{authedUser.name} voted for it</strong>
                  )}
                  </div>
                  {/* <form onSubmit={this.handleAnswerQuestion} className='create-contact-form'>
            <input type="radio" id="optionOne" name="optionOne" value={optionOne.text} checked={users[authedUser].answers[question.id]==='optionOne'} disabled={users[authedUser].answers[id]}/>
            <input type="radio" id="optionTwo" name="optionTwo" value={optionTwo.text} checked={users[authedUser].answers[question.id]==='optionTwo'} disabled={users[authedUser].answers[id]}/>
            <button className='myfield blue p-10p p-25p' disabled={users[authedUser].answers[id]}>Vote</button>
            </form> */}
                </div>
              </div>
            </div>
            {/* <QuestionResults question={questions[id]} authedUser={authedUser}  /> */}
          </Fragment>
        ) : (
          <Fragment>
            <div className='tweet'>
              <img
                src={author.avatarURL}
                alt={`Avatar of ${author.name}`}
                className='avatar'
              />
              <div >
                <div className='tweet-info'>
                  <span>{author.name} asks:</span>
                  <div>{formatDate(timestamp)}</div>
                </div>
                <hr />
                <div className='vote'>
                  <h4>Would You Rather ...</h4>
                  <form onSubmit={this.handleAnswerQuestion} className='vote-from'>
                    <div className='vote-form-details'>
                      <div className='vote-field'>
                        <input 
                          type="radio"
                          onChange={this.onRadioChange}
                          checked={this.state.selectedRadio === "optionOne"}
                          id="optionOne" 
                          name="optionOne" 
                          value="optionOne" 
                          disabled={authedUser.answers[id]} 
                        />
                        <label htmlFor="optionOne">
                          {optionOne.text}
                        </label>
                      </div>
                      {/* <br/> */}
                      
                      <div className='vote-field'>
                        <input 
                          type="radio" 
                          id="optionTwo" 
                          name="optionTwo" 
                          onChange={this.onRadioChange} 
                          checked={this.state.selectedRadio === "optionTwo"} 
                          value="optionTwo"  
                          disabled={authedUser.answers[id]} 
                        />
                        <label htmlFor="optionTwo">{optionTwo.text}</label><br />
                      </div>
                      <button className='vote-field myfield blue p-10p p-25p' disabled={!this.state.selectedRadio}>Vote</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <QuestionPageQuestion question={questions[id]} authedUser={authedUser}  /> */}
          </Fragment>
        )}
      </Fragment>
    )

  }
}

// function mapStateToProps ({ authedUser, questions, users }, props) {
//   const { id } = props.match.params

//   return {
//     id,
//     authedUser:users[authedUser],
//     questions,
//   }
// }
function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  console.log('----QuestionPage.js(71)--->', 'autheduser', authedUser, 'users', users, 'questions', question, 'props', props)
  const question = questions[id]
  // const optionOneText=question.optionOne.text
  // const optionTwoText=question.optionTwo.text
  return {
    id,
    authedUser: users[authedUser],
    question: question,
    author: users[question.author],
    users,
    // ? formatQuestion({question, author:users[question.author], authedUser, optionOneText,optionTwoText})
    // : null
  }
}

export default connect(mapStateToProps)(QuestionPage)
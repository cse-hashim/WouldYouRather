import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { _handleAnswerQuestion } from '../actions/questions'
import  NotFound  from "./NotFound";
class QuestionPage extends Component {
  state = {
    selectedRadio: null
  }
  constructor() {
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
    const answer = this.state.selectedRadio
    const { dispatch, question, authedUser } = this.props
    dispatch(_handleAnswerQuestion({
      qid: question.id,
      authedUser: authedUser.id,
      answer,
    }))
  }
  render() {
    const { authedUser, id, question, author } = this.props
    const { timestamp, optionOne, optionTwo } = question?question:{timestamp:'', optionOne:'', optionTwo:''}
    return (
      <Fragment>
        {question ? (
      <Fragment>
        {authedUser.answers[id] ? (
          <Fragment>
            <div className='question-card'>
              <img
                src={author.avatarURL}
                alt={`Avatar of ${author.name}`}
                className='avatar'
              />
              <div className='question-card'>
                <div style={{ 'minWidth': '100%' }}>
                  <div className='question-card-info'>
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
                      <strong style={{ color: 'red' }}>{authedUser.name} voted for it</strong>
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
                      <strong style={{ color: 'red' }}>{authedUser.name} voted for it</strong>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className='question-card'>
              <img
                src={author.avatarURL}
                alt={`Avatar of ${author.name}`}
                className='avatar'
              />
              <div >
                <div className='question-card-info'>
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
          </Fragment>
        )}
      </Fragment>
        ):(
          <NotFound></NotFound>
        )}
        </Fragment>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const question = questions[id]
  return {
    id,
    authedUser: users[authedUser],
    question: question,
    author: question?users[question.author]:null,
    // author: users[question.author],
    users,
  }
}

export default connect(mapStateToProps)(QuestionPage)
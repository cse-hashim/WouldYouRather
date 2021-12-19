import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Polls extends Component {
  state = {
    selectedRadio: 'unanswered'
  }
  constructor() {
    super();
    this.onRadioChange = this.onRadioChange.bind(this);
  }
  onRadioChange = (e) => {
    this.setState({
      selectedRadio: e.target.value
    });
  }
  render() {
    return (
      <div>
        <h3 className='center'> Questions</h3>
        <h4 className='center'>
          <span>
            <input
              type="radio"
              onChange={this.onRadioChange}
              checked={this.state.selectedRadio === "unanswered"}
              id="unanswered"
              name="unanswered"
              value="unanswered"
            />
            <label htmlFor="unanswered">
              unanswered
            </label>
          </span>
          <span>
            <input
              type="radio"
              onChange={this.onRadioChange}
              checked={this.state.selectedRadio === "answered"}
              id="answered"
              name="answered"
              value="answered"
            />
            <label htmlFor="answered">
              answered
            </label>
          </span>
        </h4>
        {this.state.selectedRadio === 'unanswered' && (
          <ul className='dashboard-list'>
            {this.props.QuestionsIds.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))}
          </ul>
        )}
        {this.state.selectedRadio === 'answered' && (
          <ul className='dashboard-list'>
            {this.props.AnsweredQuestionsIds.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const answeredQuestions = users[authedUser].answers
  return {
    AnsweredQuestionsIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp).filter(a => answeredQuestions[a]),
    QuestionsIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp).filter(a => !answeredQuestions[a])
  }
}

export default connect(mapStateToProps)(Polls)
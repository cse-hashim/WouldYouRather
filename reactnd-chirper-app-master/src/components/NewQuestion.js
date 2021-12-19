import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }
  handleChangeOne = (e) => {
    const optionOneText = e.target.value
    this.setState(() => ({
      optionOneText,
    }))
  }
  handleChangeTwo = (e) => {
    const optionTwoText = e.target.value
    this.setState(() => ({
      optionTwoText
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { dispatch, id } = this.props
    dispatch(handleAddQuestion({ optionOneText, optionTwoText }))
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: id ? false : true,
    }))
  }
  render() {
    const { optionOneText, optionTwoText, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <h3 className='center'>Create new Question</h3>
        <p>Complete the Question:</p>
        <h4>Would You Rather ...</h4>
        <form className='new-tweet' style={{ height: '30px' }} onSubmit={this.handleSubmit}>

          <input
            type='text'
            name='optionOneText'
            id='optionOneText'
            placeholder="option one"
            value={optionOneText}
            onChange={this.handleChangeOne}
            className='textarea'
            maxLength={150}
          />
          <p>OR</p>
          <input
            type='text'
            name='optionTwoText'
            id='optionTwoText'
            placeholder="option two"
            value={optionTwoText}
            onChange={this.handleChangeTwo}
            className='textarea'
            maxLength={150}
          />
          <button
            className='btn'
            type='submit'
            disabled={optionOneText === '' || optionTwoText === ''}>
            Vote
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
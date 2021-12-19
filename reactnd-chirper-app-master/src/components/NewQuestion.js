import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }
  // constructor(props) {
  //   super(props);
  //   // this.state = {value: ''};
  //   this.
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleChangeOne = (e) => {
    // console.log('newQ->22>>>',e)
    const optionOneText = e.target.value

    this.setState(() => ({
      optionOneText,
      // optionTwoText
    }))
  }
  handleChangeTwo = (e) => {
    // console.log('newQ->22>>>',e)
    const optionTwoText = e.target.value

    this.setState(() => ({
      // optionOneText,
      optionTwoText
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText,optionTwoText } = this.state
    const { dispatch, id } = this.props
console.log('hashim----',this.state)
    dispatch(handleAddQuestion({optionOneText,optionTwoText}))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: id ? false : true,
    }))
  }
  render() {
    const { optionOneText,optionTwoText, toHome } = this.state  

    if (toHome === true) {
      return <Redirect to='/' />
    }

    // const o1Left = 280 - optionOne.text.length
    // const o2Left = 280 - optionTwo.text.length

    return (
      <div>
        <h3 className='center'>Create new Question</h3>
        <p>Complete the Question:</p>
        <h4>Would You Rather ...</h4>
        <form className='new-tweet' style={{height:'30px'}} onSubmit={this.handleSubmit}>

        <input
        type='text'
            name='optionOneText'
            id='optionOneText'
            placeholder="option one"
            value={optionOneText}
            onChange={this.handleChangeOne}
            className='textarea'
            maxLength={280}
          />
          {/* {o1Left <= 100 && (
            <div className='tweet-length'>
              {o1Left}
            </div>
          )} */}
          <p>OR</p>
          <input
          type='text'
          name='optionTwoText'
          id='optionTwoText'
            placeholder="option two"
            value={optionTwoText}
            onChange={this.handleChangeTwo}
            className='textarea'
            maxLength={280}
          />
          {/* {o2Left <= 100 && (
            <div className='tweet-length'>
              {o2Left}
            </div>
          )} */}
          <button
            className='btn'
            type='submit'
            disabled={optionOneText === ''||optionTwoText === ''}>
              Vote
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { formatTweet, formatDate, formatQuestion } from '../utils/helpers'
// import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
// import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
// import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
// import { handleToggleTweet } from '../actions/tweets'
// import { handleAnswerQuestion } from '../actions/questions'
// import { Link, withRouter } from 'react-router-dom'
// import serializeForm from 'form-serialize'
// class QuestionPageQuestion extends Component {
//   handleSubmit = (e) => {
//     e.preventDefault()
//     const values = serializeForm(e.target, { hash: true })

//     if (this.props.onCreateContact&&values.id&&values.name) {
//       this.props.onCreateContact(
//         {
          
//             id:values.id,
//             name:values.name,
//             get avatarURL() {
//               return values.avatarURL ? values.avatarURL : `https://ui-avatars.com/api/?rounded=true&name=${values.name.split(" ").join("+")}&color=random&background=random`
//             },
//             tweets: []
          
//         }
//       )
//     }
//   }
//   handleAnswerQuestion = (e) => {
//     e.preventDefault()
//     const values = serializeForm(e.target, { hash: true })

//     const { dispatch, question, authedUser, answer } = this.props

//     dispatch(handleAnswerQuestion({
//       qid: question.id,
//       // hasLiked: tweet.hasLiked,
//       authedUser,
//       answer,
//     }))
//   }
//   toParent = (e, id) => {
//     e.preventDefault()
//     this.props.history.push(`/question/${id}`)
//   }
//   render() {
//     // const { question,authedUser } = this.props
//     // const { question,authedUser } = this.state
//     console.log('---Question.js(57)--->',this.props)
//     const { question,authedUser } = this.props
// // 
//     if (question === null) {
//       return <p>This Question doesn't existd</p>
//     }

//     // const {
//       // author, timestamp, optionOne, optionTwo,id, 
//     // } = question
//     // const {avatarURL} = users[author]
//     // if (question.author === null) {
//       // return <p>This Question doesn't existd</p>
//     // }
//     return (
      
//       <div className='tweet'>
//         {/* <img
//           src={author.avatarURL}
//           alt={`Avatar of ${author.name}`}
//           className='avatar'
//         />
//         <div className='tweet-info'>
//           <div>
//             <span>{author.name} asks:</span>
//             <div>{formatDate(timestamp)}</div>      
//             <h4>Would You Rather ...</h4>
//             <form onSubmit={this.handleAnswerQuestion} className='create-contact-form'>
//             <input type="radio" id="optionOne" name="optionOne" value={optionOne.text} checked={authedUser.answers[question.id]==='optionOne'} disabled={authedUser.answers[id]}/>
//             <input type="radio" id="optionTwo" name="optionTwo" value={optionTwo.text} checked={authedUser.answers[question.id]==='optionTwo'} disabled={authedUser.answers[id]}/>
//             <button className='myfield blue p-10p p-25p' disabled={authedUser.answers[id]}>Vote</button>
//             </form>
//             </div>
//             </div> */}
//       </div>
      
//     )
//   }
// }

// function mapStateToProps (state) {
//   // const question = questions[id]
//   // const optionOneText=question.optionOne.text
//   // const optionTwoText=question.optionTwo.text
//   console.log('---Question.js(89)--->',state)

//   return {
//     // authedUser,
//     // users,
//     // questions,
//     // id
//     // question: question
//       // ? formatQuestion({question, author:users[question.author], authedUser, optionOneText,optionTwoText})
//       // : null
//       state,
//   }
// }

// export default QuestionPageQuestion
// // export default connect(mapStateToProps)(QuestionPageQuestion)
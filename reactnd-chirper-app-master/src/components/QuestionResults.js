// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import Tweet from './Tweet'
// import NewTweet from './NewTweet'
// import serializeForm from 'form-serialize'
// import { formatDate } from '../utils/helpers'
// import { handleAnswerQuestion } from '../actions/questions'

// class QuestionResults extends Component {
//   handleAnswerQuestion = (e) => {
//     e.preventDefault()
//     const values = serializeForm(e.target, { hash: true })
//     const {answer} = values
//     const { dispatch, question, authedUser } = this.props

//     dispatch(handleAnswerQuestion({
//       qid: question.id,
//       // hasLiked: tweet.hasLiked,
//       authedUser,
//       answer,
//     }))
//   }
//   render() {
//     const { authedUser,users ,questions,id} = this.props
//     const {name,avatar}=users[authedUser]
//     const question = questions[id]
//     const {timestamp,optionOne,optionTwo}=question
    
//     return (
//       <div className='tweet'>
//         <img
//           src={avatar}
//           alt={`Avatar of ${name}`}
//           className='avatar'
//         />
//         <div className='tweet-info'>
//           <div>
//             <span>Asked By {name}:</span>
//             <div>{formatDate(timestamp)}</div>      
//             <hr />
//             <h4>Results:</h4>
            
//             <h5>Would You Rather {optionOne.text}</h5>
//             <h6>{Math.fround(100*optionOne.votes.length/(optionOne.votes.length+optionTwo.votes.length))}%</h6>
//             <h6>{optionOne.votes.length} out of {optionOne.votes.length+optionTwo.votes.length}</h6>
//             {users[authedUser].answers[question.id]==='optionOne'&&(
//               <strong>{name} voted</strong>
//             )}
//             <h5>Would You Rather {optionTwo.text}</h5>
//             <h6>{Math.fround(100*optionTwo.votes.length/(optionOne.votes.length+optionTwo.votes.length))}%</h6>
//             <h6>{optionTwo.votes.length} out of {optionOne.votes.length+optionTwo.votes.length}</h6>
//             {users[authedUser].answers[question.id]==='optionTwo'&&(
//               <strong>{name} voted</strong>
//             )}
//             {/* <form onSubmit={this.handleAnswerQuestion} className='create-contact-form'>
//             <input type="radio" id="optionOne" name="optionOne" value={optionOne.text} checked={users[authedUser].answers[question.id]==='optionOne'} disabled={users[authedUser].answers[id]}/>
//             <input type="radio" id="optionTwo" name="optionTwo" value={optionTwo.text} checked={users[authedUser].answers[question.id]==='optionTwo'} disabled={users[authedUser].answers[id]}/>
//             <button className='myfield blue p-10p p-25p' disabled={users[authedUser].answers[id]}>Vote</button>
//             </form> */}
//             </div>
//             </div>
//       </div>
//     )
//   }
// }

// function mapStateToProps ({ authedUser, tweets,questions, users }, props) {
//   const { id } = props.match.params

//   return {
//     id,
//     replies: !tweets[id]
//       ? []
//       : tweets[id].replies.sort((a,b,) => tweets[b].timestamp - tweets[a].timestamp)
//   }
// }

// // export default connect(mapStateToProps)(QuestionResults)
// export default QuestionResults
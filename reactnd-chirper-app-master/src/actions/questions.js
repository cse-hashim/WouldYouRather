import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { formatQuestion } from '../utils/helpers'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'//q
export const ANSWER_QUESTION = 'ANSWER_QUESTION'//q //_saveQuestionAnswer
export const ADD_QUESTION = 'ADD_QUESTION'//q
/**
 *  @param {{id:String,author:String,timestamp:String,optionOne:{votes:String[],text:String},optionTwo:{votes:String[],text:String}}} question  
 * */
export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}
/**
 * 
 
 * @param {{optionOneText:String,optionTwoText:String}} param0 
 * @returns 
 */
export function handleAddQuestion (info) {
  const {optionOneText,optionTwoText}=info
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    console.log('@@@@@@@@@@@@',authedUser)
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author:authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
/**
 * 
 * @param {{[id]:{id:String,author:String,timestamp:String,optionOne:{votes:String[],text:String},optionTwo:{votes:String[],text:String}}}} questions
 */
export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
/**
 * 
 * @param {{qid:String,authedUser:String,answer:('optionOne'|'optionTwo')}} param0 
 * @returns 
 */
export function answerQuestion ({ qid, authedUser, answer }) {
  
  console.log('action',qid,authedUser,answer)
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer,

  }
}

/**
 * 
 * @param {{qid:String,authedUser:String}} param0 
 * @returns 
 */
function answerQuestion_revertOnError ({ qid, authedUser }) {
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer:null,

  }
}
export function _handleAnswerQuestion (info) {

  // return (dispatch,getState) => {
  //   const { users } = getState()

  //   dispatch(answerQuestion(info))

  //   return saveQuestionAnswer(info)
  //     .catch((e) => {
  //       console.warn('Error in handleAnswerQuestion: ', e)
  //       // dispatch(answerQuestion_revertOnError(info))
  //       alert('The was an error liking the tweet. Try again.')
  //     })
  // }
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    console.log('@@@@@@@@@@@@',getState())
    return saveQuestionAnswer({
      ...info,
      // authedUser,
    })
      .then((res) => dispatch(answerQuestion(info)))
      .then(() => dispatch(hideLoading()))
  }
}
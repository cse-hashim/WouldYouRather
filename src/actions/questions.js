import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'
/**
 *  @param {{id:String,author:String,timestamp:String,optionOne:{votes:String[],text:String},optionTwo:{votes:String[],text:String}}} question  
 * */
export function addQuestion(question) {
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
export function handleAddQuestion(info) {
  const { optionOneText, optionTwoText } = info
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
/**
 * 
 * @param {{[id]:{id:String,author:String,timestamp:String,optionOne:{votes:String[],text:String},optionTwo:{votes:String[],text:String}}}} questions
 */
export function receiveQuestions(questions) {
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
export function answerQuestion({ qid, authedUser, answer }) {

  console.log('action', qid, authedUser, answer)
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer,

  }
}

export function _handleAnswerQuestion(info) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return saveQuestionAnswer({
      ...info,
    })
      .then((res) => dispatch(answerQuestion(info)))
      .then(() => dispatch(hideLoading()))
  }
}
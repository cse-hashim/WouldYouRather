import {
  _getUsers,
  _getTweets,
  _saveLikeToggle,
  _saveTweet,
  _saveUser,
  _saveQuestion,//q
  _getQuestions,//q
  _saveQuestionAnswer,//q
  _saveEditedUser,

} from './_DATA.js'
export function getLoginData(){
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
    users,
  }))
}
export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getTweets(),
    _getQuestions()//q
  ]).then(([users, tweets, questions]) => ({
    users,
    tweets,
    questions,//q
  }))
}

export function saveLikeToggle (info) {
  return _saveLikeToggle(info)
}

export function saveTweet (info) {
  return _saveTweet(info)
}
export function saveUser (info) {
  return _saveUser(info)
}
export function saveEditedUser (info) {
  return _saveEditedUser(info)
}
export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer(info)
}
export function saveQuestion (info) {
  return _saveQuestion(info)
}
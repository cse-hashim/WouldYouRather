import {
  _getUsers,
  _saveUser,
  _saveQuestion,
  _getQuestions,
  _saveQuestionAnswer,

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
    _getQuestions()
  ]).then(([users,  questions]) => ({
    users,
    questions,
  }))
}


export function saveUser (info) {
  return _saveUser(info)
}
export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer(info)
}
export function saveQuestion (info) {
  return _saveQuestion(info)
}
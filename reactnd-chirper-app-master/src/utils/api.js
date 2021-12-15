import {
  _getUsers,
  _getTweets,
  _saveLikeToggle,
  _saveTweet,
  _saveUser,
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
  ]).then(([users, tweets]) => ({
    users,
    tweets,
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
import { hideLoading, showLoading } from "react-redux-loading"
import { saveUser } from "../utils/api"

import { saveEditedUser } from "../utils/api"
import { ANSWER_QUESTION } from "./questions"

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'
export const EDIT_USER = 'EDIT_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}
export function addUser (user) {
  return {
    type: ADD_USER,
    user,
  }
}

export function handleAddUser (user) {
  return (dispatch, getState) => {
    const { users } = getState()

    dispatch(showLoading())
    console.log('@@@@@@@@@@@@',users)
    return saveUser(user)
      .then((user) => dispatch(addUser({
          [user.id]: {
            id:user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            tweets: [],
            questions:{}
        }
      })))
      .then(() => dispatch(hideLoading()))
  }
}

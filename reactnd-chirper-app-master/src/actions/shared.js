import { getInitialData, getLoginData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({ users,tweets }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveTweets(tweets))
      // dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
      // .then(({ users, tweets }) => {
      //   dispatch(receiveUsers(users))
      //   dispatch(receiveTweets(tweets))
      //   dispatch(setAuthedUser(AUTHED_ID))
      //   dispatch(hideLoading())
      // })
  }
}
export function handleLoginData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getLoginData()
    .then(({ users }) => {
      dispatch(receiveUsers(users))
      // dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
      // .then(({ users, tweets }) => {
      //   dispatch(receiveUsers(users))
      //   dispatch(receiveTweets(tweets))
      //   dispatch(setAuthedUser(AUTHED_ID))
      //   dispatch(hideLoading())
      // })
  }
}
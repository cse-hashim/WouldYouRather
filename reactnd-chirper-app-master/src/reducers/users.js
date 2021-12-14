import { ADD_USER, RECEIVE_USERS } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_USER:
      const { user } = action

      // let replyingTo = {}
      // if (tweet.replyingTo !== null) {
      //   replyingTo = {
      //     [tweet.replyingTo]: {
      //       ...state[tweet.replyingTo],
      //       replies: state[tweet.replyingTo].replies.concat([tweet.id])
      //     }
      //   }
      // }

      return {
        ...state,
        // users:{
        //   ...(state.users),
        //   [user.id]:user
        // },      
        ...action.user,
      }
    default :
      return state
  }
}
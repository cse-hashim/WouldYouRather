import { ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions';
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
      case ADD_QUESTION:
        return {
          ...state,
          [action.question.author]: {
            ...state[action.question.author],
            questions: state[action.question.author].questions.concat([
              action.question.id
            ])
          }
        }
  
      case ANSWER_QUESTION:
        const { qid, answer, authedUser } = action;
  
        return {
          ...state,
          [authedUser]: {
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [qid]: answer
            }
          }
        };
  
    default :
      return state
  }
}
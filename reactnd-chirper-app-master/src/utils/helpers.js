import { generateUID } from "./_DATA"
 
export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatTweet (tweet, author, authedUser, parentTweet) {
  const { id, likes, replies, text, timestamp } = tweet
  const { name, avatarURL } = author

  return {
    name,
    id,
    timestamp,
    text,
    avatar: avatarURL,
    likes: likes.length,
    replies: replies.length,
    hasLiked: likes.includes(authedUser),
    parent: !parentTweet ? null : {
      author: parentTweet.author,
      id: parentTweet.id,
    }
  }
}
//q

/**
 * @deprecated
 * @param {{ optionOneText:String, optionTwoText:String, author:String }} param0 
  */
 export function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}
// export function formatQuestion (tweet, author, authedUser, parentTweet) {
//   const { id, likes, replies, text, timestamp } = tweet
//   const { name, avatarURL } = author

//   return {
//     name,
//     id,
//     timestamp,
//     text,
//     avatar: avatarURL,
//     likes: likes.length,
//     replies: replies.length,
//     hasLiked: likes.includes(authedUser),
//     parent: !parentTweet ? null : {
//       author: parentTweet.author,
//       id: parentTweet.id,
//     }
//   }
// }
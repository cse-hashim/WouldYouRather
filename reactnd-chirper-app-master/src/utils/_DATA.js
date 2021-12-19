/**
 * ### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

 */
let users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Drasner",
    // avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    get avatarURL(){return (`https://ui-avatars.com/api/?rounded=true&name=${this.name.split(" ").join("+")}&color=random&background=random`);},
    tweets: ['8xf0y6ziyjabvozdd253nd', 'hbsc73kzqi75rg7v1e0i6a', '2mb6re13q842wu8n106bhk', '6h5ims9iks66d4m7kqizmv', '3sklxkf9yyfowrf0o1ftbb'],
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    // avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
    get avatarURL(){return (`https://ui-avatars.com/api/?rounded=true&name=${this.name.split(" ").join("+")}&color=random&background=random`);},
    tweets: ['5c9qojr2d1738zlx09afby', 'f4xzgapq7mu783k9t02ghx', 'nnvkjqoevs8t02lzcc0ky', '4pt0px8l0l9g6y69ylivti', 'fap8sdxppna8oabnxljzcv', 'leqp4lzfox7cqvsgdj0e7', '26p5pskqi88i58qmza2gid', 'xi3ca2jcfvpa0i3t4m7ag'],
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  dan_abramov: {
    id: "dan_abramov",
    name: "Dan Abramov",
    // avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
    get avatarURL(){return (`https://ui-avatars.com/api/?rounded=true&name=${this.name.split(" ").join("+")}&color=random&background=random`);},
    tweets: ['5w6k1n34dkp1x29cuzn2zn', 'czpa59mg577x1oo45cup0d', 'omdbjl68fxact38hk7ypy6', '3km0v4hf1ps92ajf4z2ytg', 'njv20mq7jsxa6bgsqc97', 'sfljgka8pfddbcer8nuxv', 'r0xu2v1qrxa6ygtvf2rkjw'],
    answers:{},
    questions:[],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    get avatarURL(){return (`https://ui-avatars.com/api/?rounded=true&name=${this.name.split(" ").join("+")}&color=random&background=random`);},
    tweets:[],
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}
/**
 * @description
 * Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |
 */
let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}

let tweets = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    text: "Shoutout to all the speakers I know for whom English is not a first language, but can STILL explain a concept well. It's hard enough to give a good talk in your mother tongue!",
    author: "sarahedo",
    timestamp: 1518122597860,
    likes: ['tylermcginnis'],
    replies: ['fap8sdxppna8oabnxljzcv', '3km0v4hf1ps92ajf4z2ytg'],
    replyingTo: null,
  },
  "5c9qojr2d1738zlx09afby": {
    id: "5c9qojr2d1738zlx09afby",
    text: "I hope one day the propTypes pendulum swings back. Such a simple yet effective API. Was one of my favorite parts of React.",
    author: "tylermcginnis",
    timestamp: 1518043995650,
    likes: ['sarahedo', 'dan_abramov'],
    replies: ['njv20mq7jsxa6bgsqc97'],
    replyingTo: null,
  },
  "f4xzgapq7mu783k9t02ghx": {
    id: "f4xzgapq7mu783k9t02ghx",
    text: "Want to work at Facebook/Google/:BigCompany? Start contributing code long before you ever interview there.",
    author: "tylermcginnis",
    timestamp: 1517043995650,
    likes: ['dan_abramov'],
    replies: [],
    replyingTo: null,
  },
  "hbsc73kzqi75rg7v1e0i6a": {
    id: "hbsc73kzqi75rg7v1e0i6a",
    text: "Puppies 101: buy a hamper with a lid on it.",
    author: "sarahedo",
    timestamp: 1516043995650,
    likes: ['tylermcginnis'],
    replies: ['leqp4lzfox7cqvsgdj0e7', 'sfljgka8pfddbcer8nuxv'],
    replyingTo: null,
  },
  "5w6k1n34dkp1x29cuzn2zn": {
    id: "5w6k1n34dkp1x29cuzn2zn",
    text: "Is there a metric like code coverage, but that shows lines that, if changed (in a syntactically correct way), wouldn’t cause tests to fail?",
    author: "dan_abramov",
    timestamp: 1515043995650,
    likes: ['sarahedo'],
    replies: [],
    replyingTo: null,
  },
  "czpa59mg577x1oo45cup0d": {
    id: "czpa59mg577x1oo45cup0d",
    text: "React came out 'rethinking best practices'. It has since accumulated 'best practices' of its own. Let’s see if we can do better.",
    author: "dan_abramov",
    timestamp: 1515043995650,
    likes: ['tylermcginnis', 'sarahedo'],
    replies: ['3sklxkf9yyfowrf0o1ftbb'],
    replyingTo: null,
  },
  "2mb6re13q842wu8n106bhk": {
    id: "2mb6re13q842wu8n106bhk",
    text: "I think I realized I like dogs so much because I can really relate to being motivated by snacks",
    author: "sarahedo",
    timestamp: 1514043995650,
    likes: ['dan_abramov'],
    replies: ['26p5pskqi88i58qmza2gid'],
    replyingTo: null,
  },
  "nnvkjqoevs8t02lzcc0ky": {
    id: "nnvkjqoevs8t02lzcc0ky",
    text: "Maybe the real benefit of open source was the friendships we made along the way?",
    author: "tylermcginnis",
    timestamp: 1513043995650,
    likes: [],
    replies: [],
    replyingTo: null,
  },
  "omdbjl68fxact38hk7ypy6": {
    id: "omdbjl68fxact38hk7ypy6",
    text: "A 7-minute Paul Joseph Watson video being translated and aired by a Russian state TV channel is the most surreal thing I’ve seen in 2018 yet",
    author: "dan_abramov",
    timestamp: 1512043995650,
    likes: [],
    replies: [],
    replyingTo: null,
  },
  "4pt0px8l0l9g6y69ylivti": {
    id: "4pt0px8l0l9g6y69ylivti",
    text: "Talking less about the downsides of OSS and focusing on some of the huge potential upsides for once might just help get more people into it.",
    author: "tylermcginnis",
    timestamp: 1511043995650,
    likes: ['dan_abramov'],
    replies: [],
    replyingTo: null,
  },
  "6h5ims9iks66d4m7kqizmv": {
    id: "6h5ims9iks66d4m7kqizmv",
    text: "By the way, if you have a blog post sitting around and want to get some eyes on it, we take guest submissions! That's how I started.",
    author: "sarahedo",
    timestamp: 1510043995650,
    likes: ['dan_abramov', 'tylermcginnis'],
    replies: ['xi3ca2jcfvpa0i3t4m7ag', 'r0xu2v1qrxa6ygtvf2rkjw'],
    replyingTo: null,
  },
  "fap8sdxppna8oabnxljzcv": {
    id: "fap8sdxppna8oabnxljzcv",
    author: "tylermcginnis",
    text: "I agree. I'm always really impressed when I see someone giving a talk in a language that's not their own.",
    timestamp: 1518122677860,
    likes: ['sarahedo'],
    replyingTo: "8xf0y6ziyjabvozdd253nd",
    replies: [],
  },
  "3km0v4hf1ps92ajf4z2ytg": {
    id: "3km0v4hf1ps92ajf4z2ytg",
    author: "dan_abramov",
    text: "It can be difficult at times.",
    timestamp: 1518122667860,
    likes: [],
    replyingTo: "8xf0y6ziyjabvozdd253nd",
    replies: [],
  },
  "njv20mq7jsxa6bgsqc97": {
    id: "njv20mq7jsxa6bgsqc97",
    author: "dan_abramov",
    text: "Sometimes you have to sacrifice simplicity for power.",
    timestamp: 1518044095650,
    likes: ['tylermcginnis'],
    replyingTo: "5c9qojr2d1738zlx09afby",
    replies: [],
  },
  "leqp4lzfox7cqvsgdj0e7": {
    id: "leqp4lzfox7cqvsgdj0e7",
    author: "tylermcginnis",
    text: "Also trashcans. Learned this the hard way.",
    timestamp: 1516043255650,
    likes: [],
    replyingTo: "hbsc73kzqi75rg7v1e0i6a",
    replies: [],
  },
  "sfljgka8pfddbcer8nuxv": {
    id: "sfljgka8pfddbcer8nuxv",
    author: "dan_abramov",
    text: "Puppies are the best.",
    timestamp: 1516045995650,
    likes: ['sarahedo', 'tylermcginnis'],
    replyingTo: "hbsc73kzqi75rg7v1e0i6a",
    replies: [],
  },
  "3sklxkf9yyfowrf0o1ftbb": {
    id: "3sklxkf9yyfowrf0o1ftbb",
    author: "sarahedo",
    text: "The idea of best practices being a negative thing is an interesting concept.",
    timestamp: 1515044095650,
    likes: ['dan_abramov'],
    replyingTo: "czpa59mg577x1oo45cup0d",
    replies: [],
  },
  "26p5pskqi88i58qmza2gid": {
    id: "26p5pskqi88i58qmza2gid",
    author: "tylermcginnis",
    text: "Too relatable",
    timestamp: 1514044994650,
    likes: ['sarahedo'],
    replyingTo: "2mb6re13q842wu8n106bhk",
    replies: [],
  },
  "xi3ca2jcfvpa0i3t4m7ag": {
    id: "xi3ca2jcfvpa0i3t4m7ag",
    author: "tylermcginnis",
    text: "Just DMd you!",
    timestamp: 1510043995650,
    likes: [],
    replyingTo: "6h5ims9iks66d4m7kqizmv",
    replies: [],
  },
  "r0xu2v1qrxa6ygtvf2rkjw": {
    id: "r0xu2v1qrxa6ygtvf2rkjw",
    author: "dan_abramov",
    text: "This is a great idea.",
    timestamp: 1510044395650,
    likes: ['tylermcginnis'],
    replyingTo: "6h5ims9iks66d4m7kqizmv",
    replies: [],
  },
}
/**
 * 
 *  1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.


 */
export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}
export function _saveUser (user) {
  return new Promise((res, rej) => {
console.log('the added user ',{
  ...users,
        [user.id]: {
          ...user,
          tweets: [],
          questions:{},
        }
} )
    setTimeout(() => {
      
      users = {
        ...users,
        [user.id]: {
          id:user.id,
          name: user.name,
          avatarURL: user.avatarURL,
          tweets: [],
          answers:{},
        }
      }

      res(user)
    }, 1000)
  })
}
export function _saveEditedUser (user,edit) {
  return new Promise((res, rej) => {
console.log('the added user ',{
  ...users,
        [user.id]: {
          ...user,
          tweets: [],
          questions:{},
        }
} )
    setTimeout(() => {
      
      users = {
        ...users,
        [user.id]: {
          id:user.id,
          name: user.name,
          avatarURL: user.avatarURL,
          tweets: [],
          answers:{},
        }
      }

      res(user)
    }, 1000)
  })
}
export function _getTweets () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...tweets}), 1000)
  })
}

export function _saveLikeToggle ({ id, hasLiked, authedUser }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      tweets = {
        ...tweets,
        [id]: {
          ...tweets[id],
          likes: hasLiked === true
            ? tweets[id].likes.filter((uid) => uid !== authedUser)
            : tweets[id].likes.concat([authedUser])
        }
      }

      res()
    }, 500)
  })
}
/**
 * 
 * @returns {String}
 */
export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatTweet ({ author, text, replyingTo = null }) {
  return {
    author,
    id: generateUID(),
    likes: [],
    replies: [],
    text,
    timestamp: Date.now(),
    replyingTo,
  }
}

export function _saveTweet ({ text, author, replyingTo }) {
  return new Promise((res, rej) => {
    const formattedTweet = formatTweet({
      text,
      author,
      replyingTo
    })

    setTimeout(() => {
      tweets = {
        ...tweets,
        [formattedTweet.id]: formattedTweet,
      }
      console.log('&&&&&&&&',users)
      users = {
        ...users,
        [author]: {
          ...users[author],
          tweets: users[author].tweets?users[author].tweets.concat([formattedTweet.id]):[].push(formattedTweet.id)
        }
      }

      res(formattedTweet)
    }, 1000)
  })
}
/**
 * 2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.


 */
export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}
/**
 * 
 * @param {{ optionOneText:String, optionTwoText:String, author:String }} param0 
 * @returns 
 */
function formatQuestion ({ optionOneText, optionTwoText, author }) {
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
/**
 * 
 *3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|


 */
/**
 * @param {{id:String,author:String,timestamp:String,optionOne:{votes:String[],text:String},optionTwo:{votes:String[],text:String}}} question 
 */
export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}
/**
 * 
 4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|
 */
export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}

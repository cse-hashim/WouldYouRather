//library code
// function createStore(reducer) {
//     //the store should have four parts
//     //1. the state
//     //2 get the state
//     //3 listen to changes on the state
//     //4 update the state
//     let state
//     let listeners = []

//     const getState = () => state

//     const subscribe = (listener) => {
//         listeners.push(listener)
//         return () => {
//             listeners = listeners.filter(l => l !== listener)
//         }
//     }
//     const dispatch = (action) => {
//         state = reducer(state, action)
//         listeners.forEach(listener => listener())
//     }

//     return {
//         getState,
//         subscribe,
//         dispatch
//     }
// }
// const store = createStore()

// store.subscribe(() => { console.log('new state is: ', store.getState()) })
// store.unsubscribe(() => { console.log('the store changed') })

//app code
const [
    ADD_GOAL,
    REMOVE_GOAL,
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO
] = [
        'ADD_GOAL',
        'REMOVE_GOAL',
        'ADD_TODO',
        'REMOVE_TODO',
        'TOGGLE_TODO']
const todos = (state = [], action) => {//this is called a reducer funtion
    switch (action.type) {
        case (ADD_TODO):
            return state.concat([action.todo])//concate is returning a new array so the line is pure
        case (REMOVE_TODO):
            return state.filter(e => e.id !== action.id)
        case (TOGGLE_TODO):
            // return state.map(e => e.id !== action.id ? e : Object.assign({}, e, { complete: !e.complete }))
            return state.map(e => e.id !== action.id ? e : { ...e, complete: !e.complete })
        default:
            return state
    }

}
const goals = (state = [], action) => {
    switch (action.type) {
        case (ADD_GOAL):
            return state.concat([action.goal])//concate is returning a new array so the line is pure
        case (REMOVE_GOAL):
            return state.filter(e => e.id !== action.id)
        default:
            return state
    }
}
// const app = (state = {}, action) => {
//     return {
//         todos: todos(state.todos, action),
//         goals: goals(state.goals, action),
//     }
// }
// const store = createStore(app)

function checker(store){
    return function(next){
        return function(action){
            if (action.type === ADD_TODO &&
                action.todo.name.toLowerCase().includes('bitcoin')
            ) {
                return alert('Nope. thats a bad idea')
            }
            if (action.type === ADD_GOAL &&
                action.goal.name.toLowerCase().includes('bitcoin')
            ) {
                return alert('Nope. thats a bad idea')
            }
            return next(action)            
        }
    }
}
const store = Redux.createStore(Redux.combineReducers({
    todos,
    goals,
}),Redux.applyMiddleware(checker))
store.subscribe(() => {
    console.log('the new state', store.getState())
})
// action creators
const addTodoAction = (todo) => {
    return {
        type: ADD_TODO,
        todo,
    }
}
const addGoalAction = (goal) => {
    return {
        type: ADD_GOAL,
        goal,
    }
}
const removeTodoAction = (id) => {
    return {
        type: REMOVE_TODO,
        id,
    }
}
const removeGoalAction = (id) => {
    return {
        type: REMOVE_GOAL,
        id,
    }
}
const toggleTodoAction = (id) => {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

// tests

store.dispatch(addTodoAction({
    id: 52,
    name: 'Learn redux',
    complete: false
}))
store.dispatch(addTodoAction({
    id: 0,
    name: 'Walk the dog',
    complete: false,

}))

store.dispatch(addTodoAction({
    id: 1,
    name: 'Wash the car',
    complete: false,

}))

store.dispatch(addTodoAction({
    id: 2,
    name: 'Go to the gym',
    complete: true,

}))

store.dispatch(removeTodoAction(1))
store.dispatch(toggleTodoAction(0))


store.dispatch(addGoalAction({
    id: 0,
    name: 'Learn Redux'

}))

store.dispatch(addGoalAction({
    id: 1,
    name: 'Lose 20 pounds'

}))

store.dispatch(removeGoalAction(0))
//app code
const [
    ADD_GOAL,
    REMOVE_GOAL,
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    RECEIVE_DATA
] = [
        'ADD_GOAL',
        'REMOVE_GOAL',
        'ADD_TODO',
        'REMOVE_TODO',
        'TOGGLE_TODO',
        'RECEIVE_DATA']
const todos = (state = [], action) => {//this is called a reducer funtion
    switch (action.type) {
        case (ADD_TODO):
            return state.concat([action.todo])//concate is returning a new array so the line is pure
        case (REMOVE_TODO):
            return state.filter(e => e.id !== action.id)
        case (TOGGLE_TODO):
            return state.map(e => e.id !== action.id ? e : { ...e, complete: !e.complete })
            case (RECEIVE_DATA):
            return action.todos
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
            case (RECEIVE_DATA):
            return action.goals
        default:
            return state
    }
}
const loading = (state = true, action) => {
    switch (action.type) {
        case (RECEIVE_DATA):
            return false
        default:
            return state
    }
}
const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('the action: ',action)
        const result = next(action)
        console.log('the new state: ',store.getState())
    console.groupEnd()
    return result
}
const checker = (store) => (next) => (action) => {
    if (action.type === ADD_TODO &&
        (action.todo.name===''||action.todo.name.toLowerCase().includes('bitcoin'))
    ) {
        // return alert('Nope. thats a bad idea')
        console.log('Nope. thats a bad idea')
        
          $('.test').alertify({
    type: 'warning',
    speed:200,
    content: 'Nope. thats a bad idea'
  });
        return new Error('Nope. thats a bad idea')
    }
    if (action.type === ADD_GOAL &&
        (action.goal.name===''||action.goal.name.toLowerCase().includes('bitcoin'))
    ) {
        // return alert('Nope. thats a bad idea')
        console.log('Nope. thats a bad idea')
        $('.test').alertify();
        return new Error('Nope. thats a bad idea')
    }
    return next(action)
}
const store = Redux.createStore(Redux.combineReducers({
    todos,
    goals,
    loading,
}), Redux.applyMiddleware(checker,logger))
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
const receiveDataAction=(todos,goals)=>{
    return {
        type:RECEIVE_DATA,
        todos,
        goals
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

  
  // call with no options, uses defaults
  
  
  // call with alt type and content

  
  
  
store.dispatch(removeGoalAction(0))

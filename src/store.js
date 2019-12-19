import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'
import blogReducer from './reducers/blogReducer'
import usersReducer from './reducers/usersReducer'

const reducer = combineReducers({
    notifications: notificationReducer,
    user: userReducer,
    blogs: blogReducer,
    users: usersReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

//console.log(store.getState())

export default store
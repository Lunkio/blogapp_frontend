const userReducer = (state = null, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return action.user
        case 'REMOVE_USER':
            return action.data
        default: return state
    }
}

export const addUser = (user) => {
    return async dispatch => {
        dispatch({
            type: 'ADD_USER',
            user
        })
    }
}

export const removeUser = () => {
    return async dispatch => {
        dispatch({
            type: 'REMOVE_USER',
            data: null
        })
    }
}

export default userReducer
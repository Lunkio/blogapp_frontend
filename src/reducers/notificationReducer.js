const notificationReducer = (state = '', action) => {
    switch(action.type) {
        case 'NEW':
            return action.data
        case 'HIDE':
            return state = ''
        case 'TEST':
            return action.data
        default: return state
    }
}

export const setNotification = (content, duration) => {
    return dispatch => {
        dispatch({
            type: 'NEW',
            data: content
        })
        setTimeout(() => {
            dispatch({
                type: 'HIDE'
            })
        }, duration * 1000)
    }
}

export const test = (content) => {
    return dispatch => {
        dispatch({
            type: 'TEST',
            data: content
        })
    }
}

export default notificationReducer
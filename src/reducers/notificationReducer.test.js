import notificationReducer from './notificationReducer'
import deepFreeze from 'deep-freeze'

describe('notificationReducer', () => {

    it('returns new state with action NEW', () => {
        const state = ''
        const action = {
            type: 'NEW',
            data : 'new notification'
        }

        deepFreeze(state)
        const newState = notificationReducer(state, action)
        expect(newState).toBe('new notification')
    })

    it('returns new state with action HIDE', () => {
        const state = 'notification'
        const action = {
            type: 'HIDE'
        }

        deepFreeze(state)
        const newState = notificationReducer(state, action)
        expect(newState).toBe('')
    })
})
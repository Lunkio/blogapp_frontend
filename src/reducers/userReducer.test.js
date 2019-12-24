import userReducer from './userReducer'
import deepFreeze from 'deep-freeze'
import { userBlogAdder } from '../utils/test_users'

describe('userReducer', () => {

    it('returns new state with action ADD_USER', () => {
        const state = ''
        const action = {
            type: 'ADD_USER',
            data: userBlogAdder
        }

        deepFreeze(state)
        const newState = userReducer(state, action)
        expect(newState).toEqual(userBlogAdder)
    })

    it('returns new state with action REMOVE_USER', () => {
        const state = userBlogAdder
        const action = {
            type: 'REMOVE_USER'
        }

        deepFreeze(state)
        const newState = userReducer(state, action)
        expect(newState).toBeUndefined()
    })
})
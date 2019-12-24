import usersReducer from './usersReducer'
import deepFreeze from 'deep-freeze'
import { users } from '../utils/test_users'

describe('usersReducer', () => {
    it('returns new state with action INIT_USERS', () => {
        const state = []
        const action = {
            type: 'INIT_USERS',
            data: users
        }

        deepFreeze(state)
        const newState = usersReducer(state, action)
        expect(newState.length).toBe(2)
        expect(newState).toEqual(users)
    })
})
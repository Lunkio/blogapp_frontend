import blogReducer from './blogReducer'
import deepFreeze from 'deep-freeze'
import { blogs } from '../services/__mocks__/blogs'

describe('blogReducer', () => {

    it('returns new state with action INIT_BLOGS', () => {
        const state = []
        const action = {
            type: 'INIT_BLOGS',
            data: blogs
        }

        deepFreeze(state)
        const newState = blogReducer(state, action)
        expect(newState.length).toBe(3)
        expect(newState).toEqual(blogs)
    })

    it('returns new state with action ADD', () => {
        const state = []
        const action = {
            type: 'ADD',
            data: blogs[0]
        }

        deepFreeze(state)
        const newState = blogReducer(state, action)
        expect(newState.length).toBe(1)
        expect(newState).toContainEqual(action.data)
    })

    it('returns new state with action LIKE', () => {
        const likedBlog = {...blogs[0], likes: blogs[0].likes +1}
        const state = [blogs[0]]        
        const action = {
            type: 'LIKE',
            data: likedBlog
        }

        deepFreeze(state)
        const newState = blogReducer(state, action)
        expect(newState[0].likes).toBe(2)
    })

    it('returns new state with action COMMENT', () => {
        let commentedBlog = JSON.parse(JSON.stringify(blogs[0]))
        commentedBlog.comments.push('new comment')
        const state = [blogs[0]]
        const action = {
            type: 'COMMENT',
            data: commentedBlog
        }

        deepFreeze(state)
        const newState = blogReducer(state, action)
        expect(newState[0].comments.length).toBe(1)
        expect(newState[0].comments[0]).toBe('new comment')
        expect(newState).toContainEqual(action.data)
    })

    it('return new state with action REMOVE', () => {
        const state = blogs
        const action = {
            type: 'REMOVE',
            data: blogs[2].id
        }

        deepFreeze(state)
        const newState = blogReducer(state, action)
        expect(newState.length).toBe(2)
        expect(newState).not.toContainEqual(blogs[2])
    })
})
import React from 'react'
import { shallow } from 'enzyme'
import Users from './Users'
import { userWithOneBlog } from '../utils/test_users'

describe('Users -component', () => {
    
    it('should show user\'s name and amount of blogs', () => {
        const wrapper = shallow(<Users.WrappedComponent users={userWithOneBlog} />)
        const text = wrapper.find('.user-name').text()
        expect(text).toEqual('Jest Enzyme')
    })
    
    it('should show the amount of blogs a user has added', () => {
        const wrapper = shallow(<Users.WrappedComponent users={userWithOneBlog} />)
        const blogs = wrapper.find('.blog-amount-test').text()
        expect(blogs).toEqual('1')
    })
})
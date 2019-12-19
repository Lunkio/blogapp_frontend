import React from 'react'
import { shallow } from 'enzyme'
import User from './User'
import { userWithoutBlogs, userWithTwoBlogs } from '../utils/test_users'

describe('User -component', () => {

    it('should show "Added blogs" -text', () => {
        const wrapper = shallow(<User.WrappedComponent user={userWithTwoBlogs} />)
        const text = wrapper.find('div p').text()
        expect(text).toEqual('Added Blogs:')
    })

    it('should show two blogs if user added two blogs', () => {
        const wrapper = shallow(<User.WrappedComponent user={userWithTwoBlogs} />)
        const blogs = wrapper.find('ul').children()
        expect(blogs).toHaveLength(2)
    })

    it('should show blog titles', () => {
        const wrapper = shallow(<User.WrappedComponent user={userWithTwoBlogs} />)
        expect(wrapper.text().includes('First')).toBe(true)
        expect(wrapper.text().includes('Second')).toBe(true)
    })

    it('should display proper text if user has no blog posts', () => {
        const wrapper = shallow(<User.WrappedComponent user={userWithoutBlogs} />)
        expect(wrapper.text().includes('No added blogs')).toBe(true)
    })
})
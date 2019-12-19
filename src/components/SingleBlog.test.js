import React from 'react'
import { shallow } from 'enzyme'
import SingleBlog from './SingleBlog'
import { blog } from '../utils/test_blogs'
import { userBlogAdder, userNoBlogAdder } from '../utils/test_users'

describe('SingleBlog -component', () => {
    
    it('should display "Comments" -text', () => {
        const wrapper = shallow(<SingleBlog.WrappedComponent blog={blog} user={userBlogAdder}/>)
        expect(wrapper.text().includes('Comments')).toBe(true)
    })

    it('should show blog\'s title, author and url', () => {
        const wrapper = shallow(<SingleBlog.WrappedComponent blog={blog} user={userBlogAdder}/>)
        expect(wrapper.text().includes('Test Title')).toBe(true)
        expect(wrapper.text().includes('Test Author')).toBe(true)
        expect(wrapper.text().includes('www.url.com')).toBe(true)
    })

    it('should show "Remove" -button if viewed by user that added the blog', () => {
        const wrapper = shallow(<SingleBlog.WrappedComponent blog={blog} user={userBlogAdder}/>)
        expect(wrapper.exists('.remove-button')).toEqual(true)
    })

    it('should not show "Remove" -button if viewed by user that didn\'t add the blog', () => {
        const wrapper = shallow(<SingleBlog.WrappedComponent blog={blog} user={userNoBlogAdder}/>)
        expect(wrapper.text().includes('Remove')).toBe(false)
    })
})
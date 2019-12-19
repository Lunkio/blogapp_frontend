import React from 'react'
import { shallow } from 'enzyme'
import BlogsForm from './BlogsForm'
import { blogs } from '../utils/test_blogs'

describe('BlogsForm -component', () => {

    it('renders headers and introduction texts', () => {
        const wrapper = shallow(<BlogsForm.WrappedComponent blogs={blogs}/>)
        expect(wrapper.find('h1').text()).toEqual('Welcome to Blog App')
        expect(wrapper.find('div div p').text()).toEqual('Here you can add your own blogs, or read other people\'s blog posts')
        expect(wrapper.find('h3').text()).toEqual('Blogs:')
    })

    it('should show blog\'s title and author', () => {
        const wrapper = shallow(<BlogsForm.WrappedComponent blogs={blogs}/>)
        expect(wrapper.find('.blog-title').first().text()).toEqual('First Title')
        expect(wrapper.find('.blog-author').at(1).text()).toEqual('Second Author')
    })

    it('should render all blogs', () => {
        const wrapper = shallow(<BlogsForm.WrappedComponent blogs={blogs}/>)
        expect(wrapper.find('.blog-title')).toHaveLength(blogs.length)
    })
})
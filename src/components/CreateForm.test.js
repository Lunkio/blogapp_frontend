import React from 'react'
import { shallow } from 'enzyme'
import CreateForm from './CreateForm'
import { userBlogAdder } from '../utils/test_users'

describe('CreateForm -component', () => {

    it('renders all text fields', () => {
        const wrapper = shallow(<CreateForm.WrappedComponent user={userBlogAdder} />)
        expect(wrapper.find('.title').text()).toEqual('Title:')
        expect(wrapper.find('.author').text()).toEqual('Author:')
        expect(wrapper.find('.url').text()).toEqual('Url:')
    })
})
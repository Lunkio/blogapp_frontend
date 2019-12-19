import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from './LoginForm'

describe('LoginForm -component', () => {
    
    it('should display login information', () => {
        const wrapper = shallow(<LoginForm.WrappedComponent />)

        expect(wrapper.find('h2').text()).toEqual('Log in to application')
        expect(wrapper.find('.username').text()).toEqual('Username')        
        expect(wrapper.find('.password').text()).toEqual('Password')
        expect(wrapper.find('strong')).toHaveLength(2)
    })
})
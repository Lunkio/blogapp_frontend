import React from 'react'
import blogService from '../services/blogs'
import loginService from '../services/login'
import { Form, Button, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { addUser } from '../reducers/userReducer'

const LoginForm = (props) => {

    const handleLogin = async (event) => {
      event.preventDefault()
  
      let username = event.target.username.value
      let password = event.target.password.value
      try {
        const user = await loginService.login({
        username, password
      })

        window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )

        blogService.setToken(user.token)
        props.addUser(user)

      } catch (exception) {
          props.setNotification('wrong username or password', 5)
      }
    }

    return (
      <Container style={{'marginTop': '2rem'}}>
        <h2>Log in to application</h2>
        <Form onSubmit={handleLogin}>
            <Form.Field>                  
              <label className='username'>Username</label>
              <input id='idUsername' type='text' name='username' placeholder='Username' />
            </Form.Field>
            <Form.Field>
              <label className='password'>Password</label>
              <input id ='idPassword' type='password' name='password' placeholder='Password' />
            </Form.Field>
            <Button className='login-btn' primary type="submit">Login</Button>
            <span style={{'marginLeft': '1rem'}}>Want to try this application? Login with these: username: <strong>test_user</strong>, password: <strong>bigsecret</strong></span>
        </Form>
      </Container>
    )
}

const mapStateToProps = (state) => {
    return {
      notifications: state.notifications,
      blogs: state.blogs,
      user: state.user
    }
  }
  
  const mapDispatchToProps = {
    setNotification,
    addUser
  }
  
  export default connect( 
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import BlogsForm from './components/BlogsForm'
// import usersService from './services/users'
import Users from './components/Users'
import User from './components/User'
import SingleBlog from './components/SingleBlog'
import { connect } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUsers } from './reducers/usersReducer'
import { setNotification } from './reducers/notificationReducer'
import { addUser, removeUser } from './reducers/userReducer'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import { Container, Message, Menu, Button } from 'semantic-ui-react'

const App = (props) => {
  // const [users, setUsers] = useState([])
  const [activeItem, setActiveItem] = useState('blogs')

  // useEffect(() => {
  //     usersService.getAll()
  //         .then(allUsers => {
  //             setUsers(allUsers)
  //         })
  // }, [])

  useEffect(() => {
    props.initializeBlogs()
    props.initializeUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      props.addUser(user)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogout = () => {
    window.localStorage.removeItem('loggedUser')
    props.removeUser()
  }

  const userById = (id) => {
    let foundUser = props.users.find(user => user.id === id)
    return foundUser
  }

  // const userById = (id) => {
  //   let foundUser = users.find(user => user.id === id)
  //   return foundUser
  // }

  const blogById = (id) => {
    let foundBlog = props.blogs.find(blog => blog.id === id)
    return foundBlog
  }

  const loggedInUser = () => {
    return (
      <span>{props.user.name} logged in <Button basic color='red' onClick={() => handleLogout()}>Logout</Button></span>
    )
  }

  if (!(props.user)) {
    return (
      <div>
        {(props.notifications && <Message>{props.notifications}</Message>)}
        <LoginForm />
      </div>
    )
  } else {
    return (
      <Container>
        <Router>
          {(props.notifications && <Message>{props.notifications}</Message>)}
          <Menu pointing secondary style={{'marginBottom': '2rem'}}>
            <Menu.Item name='blogs' active={activeItem === 'blogs'} >
              <Link to='/' onClick={() => setActiveItem('blogs')}>Blogs</Link>
            </Menu.Item>
            <Menu.Item name='users' active={activeItem === 'users'} >
              <Link to='/users' onClick={() => setActiveItem('users')}>Users</Link>
            </Menu.Item>
            <Menu.Item position='right'>
              {loggedInUser()}
            </Menu.Item>
          </Menu>
          <div>
            <Route exact path='/' render={() => <BlogsForm />} />
            <Route exact path='/users' render={() => <Users /> } />
            {/* <Route exact path='/users' render={() => <Users users={users} /> } /> */}
            <Route exact path='/users/:id' render={({ match }) =>
              <User user={userById(match.params.id)}/>
            } />
            <Route exact path='/blogs/:id' render={({ match }) =>
              <SingleBlog blog={blogById(match.params.id)} />
            } />
          </div>
        </Router>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
    blogs: state.blogs,
    user: state.user,
    users: state.users
  }
}

const mapDispatchToProps = {
  setNotification,
  initializeBlogs,
  initializeUsers,
  addUser,
  removeUser
}

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(App)
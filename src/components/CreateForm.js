import React from 'react'
import blogService from '../services/blogs'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { addBlog } from '../reducers/blogReducer'

const CreateForm = (props) => {
  //console.log('props', props)

  blogService.setToken(props.user.token)

  const handleBlogCreation = (event) => {
    event.preventDefault()

    const title = event.target.title.value
    const author = event.target.author.value
    const url = event.target.url.value

    if (title === '' || author === '' || url === '') {
      props.setNotification('Please fill in all the fields', 5)
      return
    }

    const newBlog = {
      title: title,
      author: author,
      url: url
    }
    const user = props.user

    props.addBlog(newBlog, user)

    event.target.title.value = ''
    event.target.author.value = ''
    event.target.url.value = ''

    props.setNotification(`a new blog ${newBlog.title} by ${newBlog.author} added`, 5)
  }
  
  return (
      <Form onSubmit={handleBlogCreation}>
        <Form.Field>
          <label className='title'>Title:</label>
          <input id='idTitle' name="title" placeholder='Title' />
        </Form.Field>
        <Form.Field>
          <label className='author'>Author:</label>
          <input id='idAuthor' name="author" placeholder='Author' />
        </Form.Field>
        <Form.Field>
          <label className='url'>Url:</label>
          <input id='idUrl' name="url" placeholder='Url' />
        </Form.Field>
        <Button primary id='idButton' type="submit">Add new blog</Button>
      </Form> 
  )
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
    users: state.users,
    blogs: state.blogs
  }
}

const mapDispatchToProps = {
  addBlog,
  setNotification
}

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(CreateForm)
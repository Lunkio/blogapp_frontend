import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Icon, Label, List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addLike, addComment, removeBlog } from '../reducers/blogReducer'
import { compose } from 'redux'

const SingleBlog = (props) => {

    if (props.blog === undefined) {
        return null
    }

    if (props.blog.user === undefined || props.blog.user === null) {
        props.blog.user = {name: '"no user added this blog"'}
    }
    //console.log(props.blog)
    
    const addLike = (blog) => {
        const id = blog.id
        props.addLike(id, blog)
    }
    
    const removeBlog = (blog) => {
        //console.log(blog)
        const id = blog.id
        const confirm = window.confirm(`remove blog ${blog.title} by ${blog.author}`)

        if (confirm) {
            props.removeBlog(id, props.user.token)
            props.history.push('/')
            //console.log('blogi poistettu onnistuneesti')
        } else {
            //console.log('blogia ei poistettu')
            return
        }
    }

    //näyttää remove-napin jos kirjautunut käyttäjä on blogin lisääjä
    const checkUser = (blog) => {
        if (blog.user.name === props.user.name) {
            return {display: '', 'marginLeft': '1rem'}
        } else {
            return {display: 'none'}
        }
    }

    const handleComment = (event) => {
        event.preventDefault()

        const comment = event.target.newComment.value

        props.addComment(props.blog.id, comment)

        event.target.newComment.value = ''
    }

    return (
        <div>
            <Button basic color='blue' size='mini' animated onClick={() => props.history.push('/')}>
                <Button.Content visible>Go back</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow left'/>
                </Button.Content>
            </Button>
            <h2>{props.blog.title}, <span style={{'fontSize': '1rem'}}>author:</span> {props.blog.author}</h2>
            <p style={{'fontStyle': 'italic'}}>{props.blog.url}</p>
            <Button as='div' labelPosition='right'>
                <Button basic color='blue' onClick={() => addLike(props.blog)}>
                    <Icon name='heart'/>
                    Like
                </Button>
                <Label as='a' basic color='blue' pointing='left'>
                    {props.blog.likes}
                </Label>
            </Button>
            <p style={{'marginTop': '2rem'}}>
                added by {props.blog.user.name}
                <span style={checkUser(props.blog)}>
                    <Button basic color='red' onClick={() => removeBlog(props.blog)}>Remove</Button>
                </span>
            </p>
            <div>
                <hr />
                <h3>Comments</h3>
                <Form onSubmit={handleComment}>
                    <input name='newComment' placeholder='Write comments'/><Button primary type='submit'>Add Comment</Button>
                </Form>
                <List>
                    {props.blog.comments.map((comment, index) =>
                        <List.Item key={index}>
                            <List.Icon name='users' />
                            <List.Content>{comment}</List.Content>
                        </List.Item>
                    )}
                </List>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        blogs: state.blogs
    }
}
  
const mapDispatchToProps = {
    addLike,
    addComment,
    removeBlog
    }

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(SingleBlog)
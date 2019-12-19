import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const User = (props) => {
    //console.log(props.user)
    if (props.user === undefined) {
        return null
    }

    const numberOfBlogs = props.user.blogs.map(blog => blog.title)

    return (
        <div>
            <Button basic color='blue' size='mini' animated onClick={() => props.history.push('/users')}>
                <Button.Content visible>Go back</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow left'/>
                </Button.Content>
            </Button>
            <h2>{props.user.name}</h2>
            <p style={{'fontWeight': 'bold'}}>Added Blogs:</p>
            <ul>
                {props.user.blogs.map(blog =>
                    <li key={blog.id}>{blog.title}</li>    
                )}
            </ul>
            {numberOfBlogs.length < 1 && <div style={{'fontStyle': 'italic'}}>No added blogs</div>}
        </div>
    )
}

export default withRouter(User)
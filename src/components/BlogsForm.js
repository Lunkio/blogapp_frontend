import React, { useState } from 'react'
import CreateForm from './CreateForm'
import { connect } from 'react-redux'
import { Table, Button } from 'semantic-ui-react'

const BlogsForm = (props) => {
    const [blogFormVisible, setBlogFormVisible] = useState(false)
    
    const hideWhenVisible = { display: blogFormVisible ? 'none' : '' }
    const showWhenVisible = { display: blogFormVisible ? '' : 'none' }

    //sort blogs by likes:
    props.blogs.sort((a,b) => a.likes-b.likes)

    return (
        <div>
            <div style={hideWhenVisible}>
                <h1>Welcome to Blog App</h1>
                <p>Here you can add your own blogs, or read other people's blog posts</p>
                <Button primary onClick={() => setBlogFormVisible(true)}>Create new blog</Button>
            </div>

            <div style={showWhenVisible}>
                <h2>Create new</h2>
                <CreateForm blogs={props.blogs} user={props.user} />
                <Button style={{'marginTop': '1rem'}} negative onClick={() => setBlogFormVisible(false)}>Close</Button>
                <br/>
            </div>
            <h3>Blogs:</h3>
            <Table celled striped selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Author</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {props.blogs.map(blog =>
                        <Table.Row key={blog.id}>
                            <Table.Cell><props.Link to={`/blogs/${blog.id}`}>{blog.title}</props.Link></Table.Cell>
                            <Table.Cell>{blog.author}</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
      notifications: state.notifications,
      blogs: state.blogs,
      user: state.user
    }
  }
  
  export default connect( 
    mapStateToProps
  )(BlogsForm)
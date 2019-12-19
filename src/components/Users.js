import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
 
const Users = (props) => {
    //console.log(props.users)
    return (
        <div>
            <Table definition>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Users</Table.HeaderCell>
                        <Table.HeaderCell>Blogs created</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {props.users.map(user =>
                        <Table.Row key={user.id}>
                            <Table.Cell>
                                <Link className='user-name' to={`/users/${user.id}`}>{user.name}</Link>
                            </Table.Cell>
                            <Table.Cell>
                                <p className='blog-amount-test'>{user.blogs.length}</p>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      users: state.users
    }
  }
  
  export default connect( 
    mapStateToProps
  )(Users)
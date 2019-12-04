import React from 'react'
import { Table } from 'semantic-ui-react'

const Users = (props) => {
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
                                <props.Link className='classTest' to={`/users/${user.id}`}>{user.name}</props.Link>
                            </Table.Cell>
                            <Table.Cell>
                                {user.blogs.length}
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Users
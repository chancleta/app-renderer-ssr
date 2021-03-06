import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersListPage extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
    }

    render() {
        return (
            <div>
                Here is a big list of users
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({ users: state.users })
export const loadData = store => {
    return store.dispatch(fetchUsers())
}
export default {
    component: connect(
        mapStateToProps,
        { fetchUsers }
    )(UsersListPage),
    loadData,
}

//import libs
import React, { Component } from 'react'
import moment from 'moment'
import Http from '../../utils/Http'

class Users extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      users: [],
    }
    
  }
  
  componentDidMount() {
    Http.get('/users')
      .then((res) => {
        this.setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  setUsers(users) {
    this.setState({ users })
  }
  
  renderUsers() {
    const { users } = this.state
    
    if (!users.length) {
      return <p className="text-warning">No Users</p>
    }
    
    return <table className="table table-responsive table-bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Joined On</th>
      </tr>
      </thead>
      <tbody>
      {users.map((user, index) => {
        return <tr key={`user-${index}`}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{moment(user.createAt).format('MMM, Do YYYY')}</td>
        </tr>
      })}
      </tbody>
    </table>
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">Users</div>
            {this.renderUsers()}
          </div>
        </div>
      </div>
    )
  }
}

export default Users

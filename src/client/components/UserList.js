import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '@/client/actions';

class UserList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <li key={user.id}>{user.name}</li>
      )
    })
  }

  render() {
    return (
      <div>
        <h5>Here is big list of users</h5>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

// 這個 function 會透過 Routes.js 傳到 server side 執行
export const loadData = serverStore => {
  // I'm trying to load some data.
  return serverStore.dispatch(fetchUsers());
}

export default connect(mapStateToProps, { fetchUsers })(UserList);

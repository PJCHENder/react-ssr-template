import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '@/client/actions';

class UserList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

    // 透過 react-router 進來此路由，而不是直接透過 ssr 渲染此頁時
    // store 會沒有資料，這時才去 fetch
    if (this.props.users.length === 0) {
      this.props.fetchUsers();
    }
  }

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <li className="collection-item" key={user.id}>{user.name}</li>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <h5>Here is big list of users</h5>
        <ul className="collection">{this.renderUsers()}</ul>
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

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UserList)
};

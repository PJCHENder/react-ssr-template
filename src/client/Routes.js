// This code base will share with Server and Client
import HomePage from '@/client/pages/HomePage';
import UserListPage from '@/client/pages/UserListPage';

// Original Routes
/*
<div>
  <Route exact path="/" component={Home} />
  <Route path="/users" component={UserList} />
</div>
*/

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UserListPage,
    path: '/users'
  }
];

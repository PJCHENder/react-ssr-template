// This code base will share with Server and Client
import Home from '@/client/components/Home';
import { loadData, default as UserList } from '@/client/components/UserList';

// Original Routes
/*
<div>
  <Route exact path="/" component={Home} />
  <Route path="/users" component={UserList} />
</div>
*/

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UserList
  }
];

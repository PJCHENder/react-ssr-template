// This code base will share with Server and Client
import App from '@/client/App.js';
import HomePage from '@/client/pages/HomePage';
import UserListPage from '@/client/pages/UserListPage';   // 裡面包含 loadData 的方法
import NotFoundPage from '@/client/pages/404';

// Original Routes
/*
<div>
  <Route exact path="/" component={Home} />
  <Route path="/users" component={UserList} />
</div>
*/

// 建立 nested routes
// 不論路由為何，都會渲染 App 這個元件
export default [{
  ...App,
  routes: [
    {
      ...HomePage,
      path: '/',
      exact: true
    },
    {
      ...UserListPage,
      path: '/users'
    },
    {
      ...NotFoundPage
    }
  ]
}];

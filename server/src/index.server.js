// Entry point for webpack.server.js
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from '@/server_helpers/renderer';
import createStore from '@/server_helpers/createStore';
import Routes from '@/client/Routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // { route } 是 matchRoutes 內會回傳的物件
  // route 內的 loadData 方法則是在 Routes.js 中注入
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData() : null;
  });

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

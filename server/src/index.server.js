// Entry point for webpack.server.js
import express from 'express';
import renderer from '@/server_helpers/renderer';
import createStore from '@/server_helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // 在這裡要初始化資料並放到 store 中

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

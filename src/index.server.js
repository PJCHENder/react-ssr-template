// Entry point for webpack.server.js
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import renderer from '@/server_helpers/renderer';
import createStore from '@/server_helpers/createStore';
import Routes from '@/client/Routes';

const app = express();

// 任何想要存取 /api 路由的請求，都會被轉導到另一個網址
// proxy 函式中的第二個參數是課程需求而設定，實際上不一定需要
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(proxyReqOpts) {
      proxyReqOpts.headers['x-forwarded-host'] = 'localhost:3000';
      return proxyReqOpts;
    }
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  // req 帶入 createStore 的目的是讓我們在 createStore.js 中，
  // 客制化 axios 時，可以自動把 req 中的 cookie 附加到透過 axios 所發送到 api 的請求上
  const serverStore = createStore(req);

  // { route } 是 matchRoutes 內會回傳的物件
  // route 內的 loadData 方法是寫在各個 components 中，並在 Routes.js 中加以注入
  // route.loadData 會執行 async function，因此回傳的是 Promise
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(serverStore) : null;
    })
    .map(awaitLoadData => {
      if (!awaitLoadData) {
        return;
      }

      // 這個 Promise 會在 awaitLoadData 後才 resolve
      return new Promise((resolve, reject) => {
        awaitLoadData.then(resolve).catch(resolve);
      });
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, serverStore, context);

    /**
     * 當沒有 JS（SSR）時，react-router 無法作用，
     * 因此使用 context 來手動處理需要轉頁的情況
     */
    // 沒有符合的路由時（404）
    if (context.notFound) {
      res.status(404);
    }

    // 沒有驗證卻進入需要驗證的頁面時
    if (context.notAuth) {
      res.redirect(301, '/');   // 使用 301 才會自動轉址
    }

    // 當所有的 Promise 都 resolve 時才渲染 App
    res.send(content);
  });
  // 作者並不建議這種做法，因為這種做法類似告訴使用者 500，但卻不知道實際的錯誤在哪
  // .catch(reject => {
  //   res.send('Some thing went wrong');
  // });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

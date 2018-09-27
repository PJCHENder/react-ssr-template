import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '@/client/Routes';

// req 這個參數是來自 `index.server.js` 中透過 Express 傳入
export default (req, store) => {
  const content = renderToString(

    // StaticRouter 中的 context 是必填屬性，一開始先帶空物件給它
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${content}</div>

      <!-- Load client bundle files here -->
      <script src="bundle.js"></script>
    </body>
    </html>
  `;

  return html;
};

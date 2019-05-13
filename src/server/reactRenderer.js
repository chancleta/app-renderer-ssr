import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';
import { renderRoutes } from 'react-router-config';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>,
  );
  const helmet = Helmet.renderStatic();

  return `
  <html>
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
    </head>
    <body>
        <div id="root">${content}</div>
        <script>
            window.__INITIAL_STATE__ = ${serialize(store.getState())}
        </script>
        <script src="bundle.js" ></script>
    </body>
  </html>
  `;
}
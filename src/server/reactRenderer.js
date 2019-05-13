import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import ejs from 'ejs';
import path from 'path';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';
import { renderRoutes } from 'react-router-config';

export default async (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>,
  );
  const helmet = Helmet.renderStatic();
  ejs.delimiter = '$';
  const title = helmet.title.toString();
  const meta = helmet.meta.toString();
  const initialState = serialize(store.getState());
  try {
    return await ejs.renderFile(
      path.resolve(__dirname, './../build/index.html'),
      {
        title,
        meta,
        initialState,
        content,
      });
  } catch (e) {
    throw e.toString();
  }

}
import '@babel/polyfill';
import 'text-encoding';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from '../client/Routes';
import reactRenderer from './reactRenderer';
import configureStore from './configureStore';

const app = express();

app.use(express.static('public'));

app.get('*', async (req, res) => {
  const store = configureStore({});
  const matchedRoutes = matchRoutes(Routes, req.path);
  const pendingPromises = matchedRoutes
    .map(({ route }) => (route.loadData ? route.loadData(store) : null))
    .map(pendingPromise => {
      if (pendingPromise) {
        return new Promise(resolve => (pendingPromise.then(resolve).catch(resolve)));
      }
    });
  await Promise.all(pendingPromises);
  const context = {};
  const content = await reactRenderer(req, store, context);
  if (context.url) {
    return res.redirect(301, context.url);
  }
  if (context.notFound) {
    res.status(404);
  }
  res.send(content);
});

app.listen(5000, () => {
  console.log('Listening from 5000');
});

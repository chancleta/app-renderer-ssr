import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersList from './pages/UsersListPage';
import NotFound404 from './components/NotFound404';

export default [
  {
    ...App,
    routes:
      [
        {
          ...HomePage,
          path: '/',
          exact: true,
        },
        {
          ...UsersList,
          path: '/users',
        },
        {
          ...NotFound404,
        },
      ],
  },
];
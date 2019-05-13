import React from 'react';

const NotFound404 = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (<h1>404</h1>);
};

export default { component: NotFound404 };
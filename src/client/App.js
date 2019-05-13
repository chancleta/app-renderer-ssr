import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import './test.css';
import './styles/app.scss';

const App = ({ route }) => (
  <div>
    <Header/>
    {renderRoutes(route.routes)}
  </div>
);

export default {
  component: App,
};
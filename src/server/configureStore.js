import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';


const axiosInstance = axios.create({}); // Create an authenticated custom axios config
export default (initialState) => {
  const store = createStore(reducers, initialState, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
  return store;
}
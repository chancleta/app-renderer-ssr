export const FETCH_USERS = 'FETCH_USERS';
import {auth} from 'advertor-protobuf';

export const fetchUsers = () => {
  return async (dispatch, getState, api) => {
    const res = await api.get('http://localhost:8080/user/all');
    const bitArray = new TextEncoder().encode(res.data);
    console.log(auth.Credentials.decode(bitArray));
    // dispatch({
    //   type: FETCH_USERS,
    //   payload: res,
    // });
  };
};
export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => {
  return async (dispatch, getState, api) => {
    const res = await api.get('https://react-ssr-api.herokuapp.com/users');
    dispatch({
      type: FETCH_USERS,
      payload: res,
    });
  };
};
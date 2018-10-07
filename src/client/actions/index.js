import axios from 'axios';
import '@babel/polyfill';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('https://react-ssr-api.herokuapp.com/users/xss');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
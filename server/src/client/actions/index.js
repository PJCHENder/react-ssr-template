import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
  const endPoint = new url('http://react-ssr-api.herokuapp.com');
  endPoint.pathname = 'users';
  const res = await axios.get(endPoint.href);

  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}

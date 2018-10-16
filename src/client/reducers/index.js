import { combineReducers } from 'redux';
import users from '@/client/reducers/users';
import auth from '@/client/reducers/auth';

export default combineReducers({
  users,
  auth
})

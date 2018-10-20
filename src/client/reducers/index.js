import { combineReducers } from 'redux';
import users from '@/client/reducers/users';
import auth from '@/client/reducers/auth';
import admins from '@/client/reducers/admins';

export default combineReducers({
  users,
  auth,
  admins
})

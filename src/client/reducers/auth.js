import { FETCH_CURRENT_USER } from '@/client/actions';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      // 如果使用者沒登入，則 payload.data 會是 undefined
      return action.payload.data || false;
    default:
      return state;
  }
}

import { FETCH_USERS } from '@/client/actions';

const defaultUsers = [
  {
    name: 'Aaron',
    id: 1
  },
  {
    name: 'Calvert',
    id: 2
  },
  {
    name: 'Andy',
    id: 3
  }
];

export default (state = defaultUsers, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

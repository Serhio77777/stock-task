import add from 'date-fns/add';
import uuidV4 from 'uuid/v4';
import * as types from '../actions/user/actionTypes';

const initialState = {
  toLogin: true,
  statements: [
    {
      id: uuidV4(),
      status: 'Approved',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lacus ut massa rutrum sagittis non gravida enim. Curabitur lectus lectus, vehicula sed vehicula ut, accumsan in ipsum. Fusce ultricies mi aliquet pharetra tincidunt. Proin porttitor nulla a auctor posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque odio turpis, mattis id porttitor vitae, fringilla eget dui. Quisque sodales enim purus, at feugiat augue molestie eu.',
      owner: 'test',
      amount: 342,
      date: add(new Date(), { months: 9 })
    },
    {
      id: uuidV4(),
      status: 'Rejected',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lacus ut massa rutrum sagittis non gravida enim. Curabitur lectus lectus, vehicula sed vehicula ut, accumsan in ipsum. Fusce ultricies mi aliquet pharetra tincidunt. Proin porttitor nulla a auctor posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque odio turpis, mattis id porttitor vitae, fringilla eget dui. Quisque sodales enim purus, at feugiat augue molestie eu.',
      owner: 'test',
      amount: 342,
      date: add(new Date(), {
        months: 9
      })
    },
    {
      id: uuidV4(),
      status: 'Waiting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lacus ut massa rutrum sagittis non gravida enim. Curabitur lectus lectus, vehicula sed vehicula ut, accumsan in ipsum. Fusce ultricies mi aliquet pharetra tincidunt. Proin porttitor nulla a auctor posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque odio turpis, mattis id porttitor vitae, fringilla eget dui. Quisque sodales enim purus, at feugiat augue molestie eu.',
      owner: 'test',
      amount: 342,
      date: add(new Date(), {
        months: 9
      })
    },
    {
      id: uuidV4(),
      status: 'Approved',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lacus ut massa rutrum sagittis non gravida enim. Curabitur lectus lectus, vehicula sed vehicula ut, accumsan in ipsum. Fusce ultricies mi aliquet pharetra tincidunt. Proin porttitor nulla a auctor posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque odio turpis, mattis id porttitor vitae, fringilla eget dui. Quisque sodales enim purus, at feugiat augue molestie eu.',
      owner: 'test1',
      amount: 342,
      date: add(new Date(), { months: 9 })
    },
    {
      id: uuidV4(),
      status: 'Rejected',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lacus ut massa rutrum sagittis non gravida enim. Curabitur lectus lectus, vehicula sed vehicula ut, accumsan in ipsum. Fusce ultricies mi aliquet pharetra tincidunt. Proin porttitor nulla a auctor posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque odio turpis, mattis id porttitor vitae, fringilla eget dui. Quisque sodales enim purus, at feugiat augue molestie eu.',
      owner: 'test1',
      amount: 342,
      date: add(new Date(), {
        months: 9
      })
    },
    {
      id: uuidV4(),
      status: 'Waiting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lacus ut massa rutrum sagittis non gravida enim. Curabitur lectus lectus, vehicula sed vehicula ut, accumsan in ipsum. Fusce ultricies mi aliquet pharetra tincidunt. Proin porttitor nulla a auctor posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque odio turpis, mattis id porttitor vitae, fringilla eget dui. Quisque sodales enim purus, at feugiat augue molestie eu.',
      owner: 'test1',
      amount: 342,
      date: add(new Date(), {
        months: 9
      })
    }
  ],
  users: [
    {
      id: uuidV4(),
      username: 'test',
      password: 'test',
      email: 'test@test',
      userType: 'ADMIN'
    },
    {
      id: uuidV4(),
      username: 'test1',
      password: 'test1',
      email: 'test1@test',
      userType: 'USER'
    },
    {
      id: uuidV4(),
      username: 'test2',
      password: 'test2',
      email: 'test2@test',
      userType: 'USER'
    }
  ],
  currentUserIndex: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LOGIN: {
      const userIndex = state.users.findIndex(user => user.username === action.user.username);
      let toLogin = true;
      if (userIndex >= 0 && state.users[userIndex].password === action.user.password) {
        toLogin = false;
      }
      return Object.assign({}, state, { toLogin, currentUserIndex: userIndex });
    }
    case types.REGISTRATION: {
      const users = [...state.users];
      users.push({
        ...action.user,
        id: uuidV4(),
        userType: 'USER'
      })
      return Object.assign({}, state, { users: [...users], toLogin: true, currentUserIndex: users.length - 1 });
    }
    case types.PROFILE_CHANGE: {
      const users = [...state.users];
      users[action.user.index].email = action.user.email;
      users[action.user.index].password = action.user.password;
      users[action.user.index].username = action.user.username;
      return Object.assign({}, state, { users: [...users] });
    }
    case types.CHANGE_STATEMENT: {
      const statements = [...state.statements];
      statements[action.statement.index].description = action.statement.description;
      statements[action.statement.index].amount = action.statement.amount;
      statements[action.statement.index].date = action.statement.date;
      return Object.assign({}, state, { statements: [...statements] });
    }
    case types.REMOVE_STATEMENT: {
      return Object.assign({}, state, {
        statements: [...state.statements.slice(0, action.statement.index), ...state.statements.slice(action.statement.index + 1)]
      });
    }
    case types.APPROVE_STATEMENT: {
      const statements = [...state.statements];
      console.log(action.statement)
      statements[action.statement.index].status = action.statement.status;
      return Object.assign({}, state, { statements: [...statements] });
    }
    case types.ADD_STATEMENT: {
      return Object.assign({}, state, { statements: [...state.statements, {
        id: uuidV4(),
        description: action.statement.description,
        amount: action.statement.amount,
        status: 'Waiting',
        date: action.statement.date,
        owner: action.statement.owner,
      }] });
    }
    default:
      break;
  }
  return state;
};

import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_NEW_DIRECT_MESSAGE,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
    return merge({}, _nullUser, {currentUser});
  case RECEIVE_ERRORS:
    const errors = action.errors;
    return merge({}, _nullUser, {errors});
  case RECEIVE_NEW_DIRECT_MESSAGE:
    let newState = merge([], state);
    const dmIndexes = newState.currentUser.directMessages.map(dm => dm.id);
    const newDmIndex = action.directMessage.id;
    if (!dmIndexes.includes(newDmIndex)) {
      newState.currentUser.directMessages.push(action.directMessage);
    }
    return newState;
  default:
    return state;
  }
};

export default SessionReducer;

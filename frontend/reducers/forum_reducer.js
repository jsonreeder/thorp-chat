import merge from 'lodash/merge';

import {
  RECEIVE_ALL_FORUMS,
  RECEIVE_SINGLE_FORUM,
  RECEIVE_SINGLE_MESSAGE
} from '../actions/forum_actions';

const ForumReducer = (state = {}, action) => {
  let newState = merge({}, state);

  switch (action.type) {
  case RECEIVE_ALL_FORUMS:
    return merge({}, newState, {
      forums: action.forums
    });
  case RECEIVE_SINGLE_FORUM:
    newState.currentForum = action.forum;
    return newState;
  case RECEIVE_SINGLE_MESSAGE:
    if (newState.currentForum) {
      newState.currentForum.messages.unshift(action.message);
    }
    return newState;
  default:
    return newState;
  }
};

export default ForumReducer;

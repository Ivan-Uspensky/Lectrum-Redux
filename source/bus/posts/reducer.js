import { List, fromJS } from 'immutable';
import { types } from './types';

const initialState = List();

const compareMaps = (map1, map2) => {
  let currentValue;
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, value] of map1) {
    currentValue = map2.get(key);
    if (currentValue !== value || (currentValue === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}

export const postsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case types.FILL_POSTS:
      return fromJS(action.payload);
    case types.CLEAR_POSTS:
      return state.clear();
    case types.CREATE_POST:
      return state.unshift(fromJS(action.payload));  
    case types.LIKE_POST:
      return state.updateIn([state.findIndex((post) => {
        return post.get('id') === action.payload.postId;
      }), 'likes'], (likes) => {
        return likes.unshift(action.payload.liker);
      });
    case types.UNLIKE_POST:
      return state.updateIn([state.findIndex((post) => {
        return post.get('id') === action.payload.postId;
      }), 'likes'], (likes) => {
        return likes.filter((like) => {
          if (!compareMaps(like, action.payload.liker)) {
            return like
          }
        })
      });
    default:
      return state;
  }
};
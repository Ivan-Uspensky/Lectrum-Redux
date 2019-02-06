import { formJS, List, fromJS } from 'immutable';
import { FILL_POSTS } from './types';

const initialState = List();

const list1 = List([1,2,3]);
const list2 = list1.push(4);

console.log(list1);
console.log(list1 === list2);

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_POSTS:
      return fromJS(action.payload);
    default:
      return state;
  }
};
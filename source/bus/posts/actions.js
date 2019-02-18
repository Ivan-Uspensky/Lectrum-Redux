import { types } from './types';

export const postActions = {

  fillPosts: (posts) => {
    return {
      type: types.FILL_POSTS,
      payload: posts
    };
  },

  clearPosts: () => {
    return {
      type: types.CLEAR_POSTS,
    };
  },
  
  fetchPostsAsync: () => {
    return {
      type: types.FETCH_POSTS_ASYNC
    };
  },

  createPostAsync: (data) => {
    return {
      type: types.CREATE_POST_ASYNC,
      payload: data
    };
  },

  deletePostAsync: (id) => {
    return {
      type: types.DELETE_POST_ASYNC,
      payload: id
    };
  },

}



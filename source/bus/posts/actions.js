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
  likePost: (likePostData) => {
    return {
      type: types.LIKE_POST,
      payload: likePostData
    };
  },
  unlikePost: (likePostData) => {
    return {
      type: types.UNLIKE_POST,
      payload: likePostData
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
  likePostAsync: (postId) => {
    return {
      type: types.LIKE_POST_ASYNC,
      payload: postId
    };
  },
  unlikePostAsync: (postId) => {
    return {
      type: types.UNLIKE_POST_ASYNC,
      payload: postId
    };
  },

}



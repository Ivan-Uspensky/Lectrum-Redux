import { FILL_POSTS, FETCH_POSTS_ASYNC, CREATE_POST_ASYNC } from './types';

import { api } from '../../REST';

export const fillPosts = (posts) => {
  return {
    type: FILL_POSTS,
    payload: posts
  };
};

export const fetchPostsAsync = () => async(dispatch) => {
  dispatch({
    type: FETCH_POSTS_ASYNC
  });
  const response = await api.posts.fetch();
  const result = await response.json();
  dispatch(fillPosts(result.data));
};

export const createPostAsync = (data) => async(dispatch) => {
  dispatch({
    type: CREATE_POST_ASYNC,
    payload: data
  });
  const response = await api.posts.create(data);
  const result = await response.json();
  if (result.message === 'the request has succeeded') {
    dispatch(fetchPostsAsync());
  }
};
import { types } from './types';

export const postActions = {

  fillPosts: (posts) => {
    return {
      type: types.FILL_POSTS,
      payload: posts
    };
  },
  
  // fetchPostsAsync: () => async(dispatch) => {
  //   dispatch({
  //     type: types.FETCH_POSTS_ASYNC
  //   });
  //   const response = await api.posts.fetch();
  //   const result = await response.json();
  //   dispatch(postActions.fillPosts(result.data));
  // },
  
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

}



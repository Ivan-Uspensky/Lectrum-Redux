import { socket } from '../../init/socket';
import { uiActions } from '../ui/actions';
import { postActions } from '../posts/actions';

export const socketActions = {
  listenConnection: () => (dispath) => {
    socket.on('connect', () => {
      dispath(uiActions.setOnlineState());
    });
    socket.on('disconnect', () => {
      dispath(uiActions.setOfflineState());
    });
  },
  listenPosts: () => (dispath, getState) => {
    socket.on('create', (event) => {
      const { data: post } = JSON.parse(event);
      dispath(postActions.createPost(post));
    });
    socket.on('like', (event) => {
      const { data, meta } = JSON.parse(event);
      const liker = getState()
        .users.find(user => user.get('id') === data.userId)
        .delete('avatar');

      if (meta.action === 'like') {
        dispath(postActions.likePost({
          postId: data.postId,
          liker,
          }));
      } else {
        dispath(postActions.unlikePost({
          ...data,
          liker: liker
        }));
      }
    });
    socket.on('remove', (event) => {
      const { data } = JSON.parse(event);
      dispath(postActions.deletePost(data));

    });
  }
}
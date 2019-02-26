import { socket } from '../../init/socket';
import { uiActions } from '../ui/actions';
import { postsActions } from '../posts/actions';

export const socketActions = {
  listenConnection: () => (dispath) => {
    socket.on('connect', () => {
      dispath(uiActions.setOnlineState());
    });
    socket.on('disconnect', () => {
      dispath(uiActions.setOfflineState());
    });
  },
  listenPosts: () => (dispath) => {
    socket.on('create', (event) => {
      console.log('event: ', event);
      const { data: post } = JSON.parse(event);
      dispath(postsActions.createPost(post));
    });
  }
}
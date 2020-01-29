import { routerActions } from 'react-router-redux';
import * as todosActions from '../features/todos/actions';
import * as postsActions from '../features/posts/actions';

export default {
  router: routerActions,
  todos: todosActions,
  posts: postsActions,
};

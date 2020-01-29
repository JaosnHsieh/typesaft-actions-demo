import { Post } from './types';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { loadPostsAsync } from './actions';

export const isLoadingPosts = createReducer(false as boolean)
  .handleAction([loadPostsAsync.request], (state, action) => true)
  .handleAction(
    [loadPostsAsync.success, loadPostsAsync.failure],
    (state, action) => false
  );

export const posts = createReducer([
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  ,
] as Post[]).handleAction(loadPostsAsync.success, (state, action) => {
  console.log(' loadPostsAsync.success action', action);
  return action.payload;
});
//   .handleAction(addTodo, (state, action) => [...state, action.payload])
//   .handleAction(removeTodo, (state, action) =>
//     state.filter(i => i.id !== action.payload)
//   );

const postsReducer = combineReducers({
  isLoadingPosts,
  posts,
});

export default postsReducer;
export type PostsState = ReturnType<typeof postsReducer>;

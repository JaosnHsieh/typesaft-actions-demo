import { Post } from './types';
import { createAsyncAction } from 'typesafe-actions';

// export const addTodo = createAction('ADD_TODO', (title: string) => ({
//   id: cuid(),
//   title,
// }))<Todo>();

// export const removeTodo = createAction('REMOVE_TODO')<string>();

export const loadPostsAsync = createAsyncAction(
  'LOAD_POSTS_REQUEST',
  'LOAD_POSTS_SUCCESS',
  'LOAD_POSTS_FAILURE'
)<undefined, Post[], string>();

// export const saveTodosAsync = createAsyncAction(
//   'SAVE_TODOS_REQUEST',
//   'SAVE_TODOS_SUCCESS',
//   'SAVE_TODOS_FAILURE'
// )<undefined, undefined, string>();

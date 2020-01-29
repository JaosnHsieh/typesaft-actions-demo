import { Epic } from 'redux-observable';
import { of, forkJoin } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';

import { loadPostsAsync } from './actions';
// import { loadTodosAsync} from '../todos/actions'
// import { getPosts } from './selectors';

export const loadPostsEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) => {
  console.log('loadPostsEpic');
  return action$.pipe(
    filter(isActionOf(loadPostsAsync.request)),
    switchMap(() =>
      forkJoin({
        posts: api.posts.loadPosts(),
        todos: api.todos.loadSnapshot(),
      }).pipe(
        map(vals => {
          return loadPostsAsync.success(vals.posts);
        }),
        catchError((message: string) => of(loadPostsAsync.failure(message)))
      )
    )
    // switchMap(() =>
    //   from(api.posts.loadPosts()).pipe(
    //     map(loadPostsAsync.success),
    //     catchError((message: string) => of(loadPostsAsync.failure(message)))
    //   )
    // )
  );
};

// export const saveTodosEpic: Epic<
//   RootAction,
//   RootAction,
//   RootState,
//   Services
// > = (action$, state$, { api }) =>
//   action$.pipe(
//     filter(isActionOf(saveTodosAsync.request)),
//     switchMap(() =>
//       from(api.todos.saveSnapshot(getTodos(state$.value.todos))).pipe(
//         map(saveTodosAsync.success),
//         catchError((message: string) => of(saveTodosAsync.failure(message)))
//       )
//     )
//   );

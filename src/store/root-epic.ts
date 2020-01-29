import { combineEpics } from 'redux-observable';

import * as todosEpics from '../features/todos/epics';
import * as postsEpics from '../features/posts/epics';

export default combineEpics(
  ...[...Object.values(todosEpics), ...Object.values(postsEpics)]
);

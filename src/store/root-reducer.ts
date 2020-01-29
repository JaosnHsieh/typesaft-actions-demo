import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import todosReducer from '../features/todos/reducer';
import postsReducer from '../features/posts/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  todos: todosReducer,
  posts: postsReducer,
});

export default rootReducer;

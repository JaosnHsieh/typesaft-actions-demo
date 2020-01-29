import * as React from 'react';

import TodosView from '../features/todos/components/TodosView';
import Posts from '../features/posts/components/Posts';

export default () => (
  <main>
    <h2>Welcome to "typesafe-actions" reference project implementation!</h2>
    <TodosView />

    <h2>Posts</h2>
    <Posts />
  </main>
);

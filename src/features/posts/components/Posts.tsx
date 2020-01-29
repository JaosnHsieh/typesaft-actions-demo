import { RootState } from 'typesafe-actions';
import * as React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors';
import * as actions from '../actions';

// import TodoListItem from './TodoListItem';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.posts.isLoadingPosts,
  posts: selectors.getPosts(state.posts),
});
const dispatchProps = {
  loadPosts: actions.loadPostsAsync.request,
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

function TodoList({ isLoading, posts = [], loadPosts }: Props) {
  return (
    <ul style={getStyle()}>
      <div>state.posts.isLoadingPosts</div>
      <p>{isLoading ? 'loading' : 'not loading'}</p>

      <button
        onClick={() => {
          console.log('loadPosts');
          loadPosts();
        }}
      >
        load Posts from api
      </button>
      <pre>
        <div>state.posts.posts</div>
        {JSON.stringify(posts, undefined, 2)}
      </pre>
      {/* {todos.map(todo => (
        <li key={todo.id}>
          <TodoListItem
            title={todo.title}
            onRemoveClick={() => removeTodo(todo.id)}
          />
        </li>
      ))} */}
    </ul>
  );
}

const getStyle = (): React.CSSProperties => ({
  textAlign: 'left',
  margin: 'auto',
  maxWidth: 500,
});

export default connect(mapStateToProps, dispatchProps)(TodoList);

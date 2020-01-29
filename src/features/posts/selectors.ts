// import { createSelector } from 'reselect';

import { PostsState } from './reducer';

export const getPosts = (state: PostsState) => state.posts;

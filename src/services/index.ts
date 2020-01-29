import * as logger from './logger-service';
import * as todos from './todos-api-client';
import * as posts from './posts-api-client';

export default {
  logger,
  api: {
    todos,
    posts,
  },
};

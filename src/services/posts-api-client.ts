import { Post } from '../features/posts/types';

// const posts: Post[] = [
//   {
//     userId: 1,
//     id: 11,
//     title: 'qqq',
//     body: 'bodyqqqq',
//   },
// ];

// export type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

export function loadPosts(): Promise<Post[]> {
  console.log('loadPosts');
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('data', data);

      /* <-- data inferred as { data: T }*/
      return data;
    });
}

// export function loadPosts(): Promise<Post[]> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(posts);
//     }, 500);
//   });
// }

// export function saveSnapshot(data: Post[]): Promise<undefined> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       todos = data;
//       resolve();
//     }, 500);
//   });
// }

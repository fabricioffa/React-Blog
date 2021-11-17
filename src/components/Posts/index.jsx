import P from 'prop-types';

import { Post } from '../Post';

export const Posts = ({ posts }) => {
  return (
    <div className="posts-container">
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: P.arrayOf(Object).isRequired,
};

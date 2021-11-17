import P from 'prop-types';
import { PostBtns } from '../PostBtns';

export const Post = ({ post }) => {
  return (
    <div>
      <div className="post-content">
        <img src={post.photo} alt="" />
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
      <PostBtns />
    </div>
  );
};

Post.propTypes = {
  post: P.object.isRequired,
};

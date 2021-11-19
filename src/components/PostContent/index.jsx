import P from 'prop-types';

export const PostContent = ({ post }) => {
  return (
    <div className="post-content">
      <img src={post.photo} alt="" />
      <h4>
        {post.title} {post.id}
      </h4>
      <p>{post.body}</p>
    </div>
  );
};

PostContent.propTypes = {
  post: P.object.isRequired,
};

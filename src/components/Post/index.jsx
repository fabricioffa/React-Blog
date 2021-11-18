import P from 'prop-types';
import { useState } from 'react';
import { CommentsSection } from '../CommentsSection';
import { PostBtns } from '../PostBtns';

export const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  const handleClick = (shouldOpen) => {
    if (shouldOpen) {
      setShowComments(shouldOpen);
      console.log('Entrei em handle, e open é', shouldOpen);
      return;
    }

    setShowComments(shouldOpen);
    console.log('Entrei em handle, e open é', shouldOpen);
  };

  return (
    <div className="post-card">
      <div className="post-content">
        <img src={post.photo} alt="" />
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
      <PostBtns showComments={showComments} onBtnClick={handleClick} />
      <CommentsSection onScreen={showComments} />
    </div>
  );
};

Post.propTypes = {
  post: P.object.isRequired,
};

import P from 'prop-types';

import { useState } from 'react';

import { CommentBox } from '../CommentBox';
import { CommentsSection } from '../CommentsSection';
import { PostBtns } from '../PostBtns';
import { PostContent } from '../PostContent';

export const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [showPost, setShowPost] = useState(true);

  const handleCommentsClick = (shouldOpen) => {
    if (shouldOpen) {
      setShowComments(shouldOpen);
      return;
    }

    setShowComments(shouldOpen);
  };

  const handleFlagClick = (shouldFlag) => {
    if (shouldFlag) {
      setShowPost(shouldFlag);
      return;
    }

    setShowPost(shouldFlag);
  };

  return (
    <div className="post-card">
      {showPost ? (
        <PostContent post={post} />
      ) : (
        <div>
          <h3>Hidden</h3>
          <p>Thanks for your denounce. We will verify the post&quot;s content.</p>
        </div>
      )}
      <PostBtns
        onCommentClick={handleCommentsClick}
        showComments={showComments}
        onFlagClick={handleFlagClick}
        showPost={showPost}
      />
      {showComments && <CommentBox />}
      {showComments && <CommentsSection postId={post.id} />}
    </div>
  );
};

Post.propTypes = {
  post: P.object.isRequired,
};

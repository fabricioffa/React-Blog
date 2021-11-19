import P from 'prop-types';
import { useState } from 'react';

export const PostBtns = ({ showComments = false, onCommentClick, onFlagClick, showPost }) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="post-btns">
      <button onClick={() => onCommentClick(!showComments)}>Comment</button>
      <button>Share</button>
      <button onClick={() => setLikes((prevLikes) => prevLikes + 1)}>Like {likes}</button>
      <button onClick={() => onFlagClick(!showPost)}>{showPost ? 'Flag' : 'Undo'}</button>
    </div>
  );
};

PostBtns.propTypes = {
  onCommentClick: P.func.isRequired,
  onFlagClick: P.func.isRequired,
  showComments: P.bool,
  showPost: P.bool,
};

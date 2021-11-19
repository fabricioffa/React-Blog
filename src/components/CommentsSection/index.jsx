import P from 'prop-types';
import { useEffect, useState } from 'react';
import { getComments } from '../../utils/getComments';

import { Comment } from '../Comment';

export const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(postId).then((data) => setComments(data));
  }, [postId]);

  return (
    <div className="comments-box">
      {comments.length ? comments.map((comment) => <Comment key={comment.id} comment={comment} />) : 'Loading...'}
      <button>Show more comments</button>
    </div>
  );
};

CommentsSection.propTypes = {
  postId: P.number.isRequired,
};

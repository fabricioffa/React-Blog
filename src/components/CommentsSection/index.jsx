import P from 'prop-types';

import { Comment } from '../Comment';

export const CommentsSection = ({ onScreen }) => {
  return <div className="comments-box">{onScreen && <Comment />}</div>;
};

CommentsSection.propTypes = {
  onScreen: P.bool.isRequired,
};

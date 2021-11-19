import P from 'prop-types';

export const Comment = ({ comment }) => (
  <div className="comment">
    <h5>{comment.name}</h5>
    <h5>{comment.email}</h5>
    <p>{comment.body}</p>
  </div>
);

Comment.propTypes = {
  comment: P.object.isRequired,
};

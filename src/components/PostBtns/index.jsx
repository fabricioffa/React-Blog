import P from 'prop-types';

export const PostBtns = ({ showComments = false, onBtnClick }) => {
  return (
    <div className="post-btns">
      <button
        onClick={() => {
          console.log('Chegou :', showComments, '\nSaiu: ', !showComments);
          onBtnClick(!showComments);
        }}
      >
        Comment
      </button>
      <button>Share</button>
      <button>Like</button>
      <button>Flag</button>
    </div>
  );
};

PostBtns.propTypes = {
  onBtnClick: P.func.isRequired,
  showComments: P.bool,
};

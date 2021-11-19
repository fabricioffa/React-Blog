import axios from 'axios';

export const getComments = async (postId) => {
  try {
    const { data: comments } = await axios.get('https://jsonplaceholder.typicode.com/comments');
    return comments.filter((comment) => comment.postId === postId);
  } catch (e) {
    console.error(e);
  }
};

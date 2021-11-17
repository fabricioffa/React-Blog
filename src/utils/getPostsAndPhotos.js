import axios from 'axios';

export const getPostsAndPhotos = async () => {
  try {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data: photos } = await axios.get('https://jsonplaceholder.typicode.com/photos');
    const postsAndPhotos = posts.map((post, index) => (post = { ...post, photo: photos[index].url }));

    return postsAndPhotos;
  } catch (e) {
    console.error('Meu Error', e);
  }
};

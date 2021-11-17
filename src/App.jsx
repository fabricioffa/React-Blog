import { useEffect, useState } from 'react';
import './App.css';
import { Posts } from './components/Posts';
import { getPostsAndPhotos } from './utils/getPostsAndPhotos';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsAndPhotos().then((data) => setPosts(data));
  }, []);

  return (
    <section>
      <Posts posts={posts} />
    </section>
  );
}

export default App;

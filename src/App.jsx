import { useEffect, useState } from 'react';
import './App.css';
import { Posts } from './components/Posts';
import { getPostsAndPhotos } from './utils/getPostsAndPhotos';

function App() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllposts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    getPostsAndPhotos().then((data) => setPosts(data));
  }, []);

  return (
    <section>
      <Posts posts={posts} />
      <button>Show more posts</button>
    </section>
  );
}

export default App;

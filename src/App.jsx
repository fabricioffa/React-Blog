import { useCallback, useRef } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { Posts } from './components/Posts';
import { getPostsAndPhotos } from './utils/getPostsAndPhotos';

function App() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [lastPostIndex, setLastPostIndex] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const postsPerPageRef = useRef(postsPerPage);

  const showMorePosts = useCallback(() => {
    setPosts(allPosts.slice(0, lastPostIndex + postsPerPage));
  }, [allPosts, lastPostIndex, postsPerPage]);

  useEffect(() => {
    getPostsAndPhotos().then((data) => {
      setAllPosts(data);
      setPosts(data.slice(0, postsPerPageRef.current));
    });
  }, []);

  useEffect(() => {
    showMorePosts();
  }, [lastPostIndex, showMorePosts]);

  useEffect(() => {
    postsPerPageRef.current = postsPerPage;
  }, [postsPerPage]);

  return (
    <section>
      <Posts posts={posts} />
      <button
        className="show-more-posts"
        onClick={() => {
          setLastPostIndex((prevIndex) => prevIndex + postsPerPage);
          showMorePosts();
        }}
      >
        Show more posts
      </button>
    </section>
  );
}

export default App;

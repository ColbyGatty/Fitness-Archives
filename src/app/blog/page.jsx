import { useEffect, useState } from 'react';
import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';

// FETCH DATA FROM API
const fetchData = async () => {
  const res = await fetch("https://fitness-archives.vercel.app/api/blog", { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedPosts = await fetchData();
        setPosts(fetchedPosts.reverse()); // Reverse the posts if needed right when data is fetched
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        // Handle errors, e.g., by setting state to show an error message
      }
    };

    getData();
  }, []); // The empty array ensures this effect runs only once when the component mounts

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

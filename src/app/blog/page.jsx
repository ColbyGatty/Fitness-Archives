import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

export async function getServerSideProps({ res }) {
  // Set HTTP headers to prevent caching
  res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');

  // Fetch data from API
  const posts = await getData();

  // Reverse the order of posts
  const reversedPosts = posts.reverse();

  // Return the posts as props
  return { props: { posts: reversedPosts } };
}

//FETCH DATA FROM API
const getData = async () => {
  const res = await fetch("https://fitness-archives.vercel.app/api/blog")

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const BlogPage = ({ posts }) => {
  return (
    <div>
      <div className={styles.container}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
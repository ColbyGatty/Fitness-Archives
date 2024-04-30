import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

//FETCH DATA FROM API
const getData = async () => {
  const res = await fetch("https://fitness-archives.vercel.app/api/blog", {cache: 'no-store', next: { revalidate: 0 }})

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()

}

const BlogPage = async () => {
  
  //FETCH DATA FROM API
  const posts = await getData()

  // Reverse the order of posts
  const reversedPosts = posts.reverse();

  return (
    <div>
  
    <div className={styles.container}>
      {reversedPosts.map((post) => (
        <div className={styles.post} key={post.id}>
      <PostCard post={post}/>
      </div>
  ))}
  </div>
  </div>
  );
}

export default BlogPage
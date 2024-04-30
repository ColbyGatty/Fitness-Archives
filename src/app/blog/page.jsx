import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

//FETCH DATA FROM API
const getData = async () => {
  const res = await fetch("https://fitness-archives.vercel.app/api/blog", {cache: 'force-no-store'})

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getStaticProps() {
  const posts = await getData()

  // Reverse the order of posts
  const reversedPosts = posts.reverse();

  return {
    props: {
      reversedPosts,
    },
    revalidate: 1, // Revalidate every 1 second
  }
}

const BlogPage = ({ reversedPosts }) => {
  return (
    <div>
      <div className={styles.container}>
        {reversedPosts.map((post) => (
          <div className={styles.post} key={post.id}>
            // ...
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPage;
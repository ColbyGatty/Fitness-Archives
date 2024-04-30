import { getPosts } from '@/lib/data';
import styles from './adminPosts.module.css';
import Image from 'next/image';
import { deletePost } from '@/lib/action';

const AdminPosts = async () => {

    const posts = await getPosts();

    return (
        <div>
            <h1 className={styles.postHeader}>Posts ({posts.length})</h1>
        <div className={styles.container}>
            {posts.map(post => (
                <div className={styles.post} key={post.id}>
                    <div className={styles.detail}>
                        <img src={post.img || "/noAvatar.png"} alt="" width={50} height={50}/>
                        <span className={styles.postTitle}>{post.title}</span>
                        </div>
                        <form action={deletePost}>
                            <input type="hidden" name="id" value={post.id}/>
                            <button className={styles.postButton}>Delete</button>
                        </form>
                </div>
            ))}
           
        </div>
            </div>
    )
}

export default AdminPosts;
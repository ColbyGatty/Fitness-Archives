import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = ({post}) => {
    return (
        <div className={`${styles.container} ${styles.flexColumn}`}>
        {post.img && 
            
                <img src={post.img} alt="Image"  className={styles.img}/>
            
        }
        <div>
            <div className={styles.tags}>
            <span className={styles.date}>{post.createdAt.toString().slice(0,10)}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.description}>{post.desc.length > 100 ? post.desc.substring(0, 100) + "..." : post.desc}</p>
            <div className={styles.btn}><Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link></div>
            </div>
        </div>
    </div>
    )
}

export default PostCard
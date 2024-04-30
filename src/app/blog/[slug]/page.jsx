
import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/postUser"
import { Suspense } from "react"
import { getPost } from "@/lib/data"

export const fetchCache = 'force-no-store';
// FETCH DATA FROM API
const getData = async (slug) => {
    const res = await fetch(`https://fitness-archives.vercel.app/api/blog/${slug}`, {cache: fetchCache})
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  
  };

export const generateMetadata = async ({params}) => {
    const {slug} = params; 

    //FETCH DATA FROM API
    const post = await getData(slug);

    //FETCH DATA WITHOUT API
    // const post = await getPost(slug);

    return {
        title: post.title,
        description: post.desc,
        link: post.link,
    }
};

const SinglePostPage = async ({params}) => {

    const {slug} = params; 

    //FETCH DATA FROM API
    // const post = await getData(slug);

    //FETCH DATA WITHOUT API
    const post = await getPost(slug);

    console.log(post);

    return (
        <div>
        <div className={styles.imgContainer}> 
        {post.img && <img className={styles.img} src={post.img} alt="Image" />}
        </div>
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                {post && (<Suspense fallback={<div>Loading...</div>}>
                <PostUser userId = {post.userId}/>
                </Suspense>
                )}
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published</span>
                    <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
                </div>
                </div>
                <pre className={styles.content}>{post.desc}</pre>
                {post.link && <a href={post.link} target="_blank" className={styles.link}>{post.link}</a>}
            </div>
        </div>
        </div>
    )
}

export default SinglePostPage
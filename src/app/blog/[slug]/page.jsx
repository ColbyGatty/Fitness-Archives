import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="https://images.pexels.com/photos/20253067/pexels-photo-20253067/free-photo-of-roshkodol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                <Image className={styles.userImage}src="https://images.pexels.com/photos/20253067/pexels-photo-20253067/free-photo-of-roshkodol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={50} height={50}/>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Author</span>
                    <span className={styles.detailValue}>Colby Gatty</span>
                </div>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Publised</span>
                    <span className={styles.detailValue}>03.26.2024</span>
                </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, quos et impedit nulla corporis dolorem debitis qui aliquam, corrupti aspernatur iure ab vero, odit eos error quisquam ut itaque?
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage
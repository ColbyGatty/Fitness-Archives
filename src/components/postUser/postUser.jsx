
import Image from 'next/image';
import { getUser } from '../../lib/data';
import styles from './postUser.module.css';

// FETCH DATA FROM API
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: 'no-store'})
  
//     if (!res.ok) {
//       throw new Error('Failed to fetch data')
//     }
  
//     return res.json()
  
//   }

const PostUser = async ({userId}) => {

    //FETCH DATA FROM API
    // const user = await getData(userId);

    //FETCH DATA WITHOUT API
    const user = await getUser(userId);

    return (
        <div className={styles.container}>
            <Image className={styles.userImage}src={user.img ? user.img : "/noavatar.png"} alt="Image" width={50} height={50}/>
                    <div className={styles.text}>
                    <span className={styles.title}>Author</span>
                    <span className={styles.username}>{user.username}</span>
                    </div>
                </div>
    )
}

export default PostUser
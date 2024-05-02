import { getUsers } from '@/lib/data';
import styles from './adminUsers.module.css';
import { deleteUser } from '@/lib/action';
import Image from 'next/image';

const AdminUsers = async () => {

  const users = await getUsers();

  return (
    <div>
        <h1 className={styles.userHeader}>Users ({users.length})</h1> {/* Display the number of users here */}
        <div className={styles.container}>
        {users.map((user) => (
            <div className={styles.user} key={user.id}>
                <div className={styles.detail}>
                    <img className={styles.avatarImg}
                    src={user.img || "/noAvatar.png"} 
                    alt=""
                    />
                    <span className={styles.username}>{user.username}</span>
                    </div>
                    <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id}/>
                        <button className={styles.postButton}>Delete</button>
                    </form>
            </div>
        ))}
       
        </div>
     </div>
  )
}

export default AdminUsers
import Image from 'next/image'
import styles from './contact.module.css'

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/contact.png" alt="Image" fill/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email Address"/>
          <input type="text" placeholder="Phone Number (Optional)"/>
          <textarea name='' id='' cols='30' rows='10' placeholder='Message' className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
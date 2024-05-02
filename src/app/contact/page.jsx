import Image from 'next/image'
import styles from './contact.module.css'
import LottieMail from '@/components/lottieAnimation/LottieMail';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <LottieMail className={styles.img} alt="Image" fill/>
      </div >
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Connect with Me!</h1>
        <p className={styles.description}>I love hearing from fellow fitness enthusiasts and researchers! 
          If you have questions about any content, suggestions for topics,
           or just want to chat about the science of lifting, please do not hesitate to reach out. 
           Use the form below to send a message.<br/><br/></p>   
        <form action="/api/send" method="GET" className={styles.form}>
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="text" id="email" name="email" placeholder="Email Address" />
          <input type="text" id="phone" name="phone" placeholder="Phone Number (Optional)" />
          <textarea id="message" name="message" cols='30' rows='10' placeholder='Message' className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;
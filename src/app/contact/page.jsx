import Image from 'next/image'
import styles from './contact.module.css'
import LottieMail from '@/components/lottieAnimation/LottieMail';

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

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
        <form action="https://api.web3forms.com/submit" method="POST" className={styles.form}>
          <input type="hidden" name="access_key" value="6270baef-8dbb-4ca9-831c-817ad3905976" />
          <input type="hidden" name="_subject" value="Fitness Archives" />
          <input type="text" name="_name" placeholder="Name" required/>
          <input type="text" name="email" placeholder="Email Address" required/>
          <input type="text" name="_phone" placeholder="Phone Number (Optional)"/>
          <textarea name="message" id='' cols='30' rows='10' required placeholder='Message' className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
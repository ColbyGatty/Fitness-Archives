import Image from 'next/image';
import styles from './home.module.css';
import LottieLifter from '@/components/lottieAnimation/LottieLifter';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>

        <div>
      <h1 className={styles.title}>The Fitness Archives</h1>
        <h4>- Your Personal Guide to Science-Based Fitness</h4>
        </div>

        <div>
      <p className={styles.description}>
      Join me in The Fitness Archives, where I bring together the latest and most reliable science-based lifting techniques and fitness insights. 
      As a fitness enthusiast committed to the power of knowledge, I've created this platform to help you stay updated with the newest research and methodologies in lifting. 
      Explore the growing library of curated videos, articles, and resources, all compiled into one place to give you ease of access to the best science-driven fitness content available. 
      </p>
      <div className={styles.buttons}>
        <a href="/about" className={styles.button}>Learn More</a>
        <a href="/contact" className={styles.button}>Contact</a>
      </div>
      </div>
      {/* <div className={styles.brands}>
        <Image src="/brands.png" alt="Image" fill className={styles.brandImg} />
      </div> */}
      </div>
      <div className={styles.imgContainer}>
        <LottieLifter className={styles.heroImg} fill/>
      </div>
    </div>
  )
}

export default Home;
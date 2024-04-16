import Image from "next/image"
import styles from "./about.module.css"

export const metadata = {
  title: "About Page",
  description: "About Page description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create ideas that are biggger, bolder, braver and better!</h1>
        <p className={styles.description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nostrum accusamus numquam ducimus tempore obcaecati quia beatae, 
          quis, dolor velit delectus recusandae, facilis molestias vel. 
          Aperiam porro non dolorem repellendus error.</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of Experience</p>
              </div>
              <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of Experience</p>
              </div>
              <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of Experience</p>
              </div>
            </div>
        </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="Image" fill className={styles.img}/>
      </div> 
    </div>
  );
};

export default AboutPage
import Image from "next/image"
import styles from "./about.module.css"
import LottieSearch from "@/components/lottieAnimation/LottieSearch";

export const metadata = {
  title: "About Page",
  description: "About Page description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Me & The Fitness Archives</h2>
        <h1 className={styles.title}>All Your Science-Backed Fitness in One Place.</h1>
        <p className={styles.description}> Hello, and welcome to the Fitness Archives! I'm Colby Gatty,
         the founder of this site and a passionate advocate for scientifically informed fitness practices. 
         With a deep interest in how scientific research can transform our training approaches, 
         I started the Fitness Archives to help fitness enthusiasts like you and me navigate the vast amount of information out there.
         <br/><br/>The Fitness Archives is more than just a blog;
        it's a commitment to understanding and sharing what truly works in the realm of fitness. 
        Here, you'll find a meticulously curated selection of the latest studies, expert analyses, 
        and content from across the fitness world, each chosen for its credibility and relevance to our goals.</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>New Posts</h1>
              <p>Every Single Week </p>
              </div>
              <div className={styles.box}>
              <h1>4+</h1>
              <p>Years of Training</p>
              </div>
              <div className={styles.box}>
              <h1>1 K+</h1>
              <p>Users to Date</p>
              </div>
            </div>
        </div>
      <div className={styles.imgContainer}>
      <LottieSearch className={styles.img}/>
      </div> 
    </div>
  );
};

export default AboutPage
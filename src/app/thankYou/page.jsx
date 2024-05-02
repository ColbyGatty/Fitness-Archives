import Image from "next/image"
import styles from "./thankYou.module.css"
import LottieCheck from "@/components/lottieAnimation/LottieCheck";

export const metadata = {
  title: "Thank You Page",
  description: "Thank You Page description",
};

const ThankYouPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}> I have received your email and appreciate you reaching out! </h2>
        <h1 className={styles.title}>Thank You for Your Message!</h1>
        <p className={styles.description}> I appreciate you taking the time to write to me.
        I will make sure to review your message carefully and respond as soon as possible.<br/><br/>

        While you are waiting, I encourage you to explore the extensive archives of the blog. 
        You will find a wealth of information on various fitness topics, 
        from workout tips and nutritional advice to in-depth discussions on wellness and bodybuilding strategies.
         Whether you are looking for beginner guidelines or advanced techniques, there is something for everyone.<br/><br/>
         
         Thank you once again for reaching out. 
         I look forward to answering your query and hope you find the Fitness Archives resources both useful and inspiring.<br/><br/>Best regards,<br/><br/>Colby Gatty</p>
        </div>
      <div className={styles.imgContainer}>
      <LottieCheck className={styles.img}/>
      </div> 
    </div>
  );
};

export default ThankYouPage;
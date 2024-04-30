import LoginForm from "@/components/loginForm/loginForm";
import { handleGoogleLogin } from "@/lib/action";
import styles from "./login.module.css";

const LoginPage = () => {

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
        <h1 className={styles.title}>Unlock Your Potential:<br/> <strong>Join Fitness Archives</strong> for Exclusive Access to the Science-Based Lifting Library.</h1>
        <form action={handleGoogleLogin}>
        <button className={styles.google}>Login with Google</button>
        </form>
        <LoginForm/>
        </div>
      </div>
    );
  };
  
  export default LoginPage
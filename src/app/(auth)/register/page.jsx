import styles from "./register.module.css"
import RegisterForm from "@/components/registerForm/registerForm"

const RegisterPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
        <h1 className={styles.title}>Gain access to the Fitness Archives: <strong>Register Now!</strong></h1>
       <RegisterForm/>
        </div>
      </div>
    )
  }
  
  export default RegisterPage
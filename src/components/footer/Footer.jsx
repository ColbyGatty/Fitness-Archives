import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>ColbyCreates</div>
            <div className={styles.text}>Creative Dashboard brought to you by Colby Gatty</div>
        </div>
    )
}

export default Footer
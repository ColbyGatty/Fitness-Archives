import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <a href="https://colbygattycreates.com/" className={styles.logo}>Colby Gatty Creates</a>
            <div className={styles.text}>Creative Dashboard brought to you by Colby Gatty</div>
        </div>
    )
}

export default Footer
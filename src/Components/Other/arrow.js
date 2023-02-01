import styles from './arrow.module.css';

function Arrow({ active }) {
    return (
        <div className={styles.extra}>
            <div className={styles.arrowContainer}>
                <div className={`${styles.arrow} ${active ? styles.arrowActive : styles.nothing}`} />
            </div>
        </div>
    )
}

export default Arrow;
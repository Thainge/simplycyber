import styles from './priceRow.module.css';

function PriceRow({ item }) {

    return (
        <div className={styles.row}>
            <div className={styles.rowTitle}>{item.title}</div>
            <div className={styles.rowList}>
                <div className={styles.rowItem}>
                    <div className={styles.first}>{item.firstVal}</div>
                    <div className={styles.extra}>{item.firstExtra}</div>
                </div>
                <div className={styles.rowItem}>
                    <div className={styles.second}>{item.secondVal}</div>
                    <div className={styles.extra}>{item.secondExtra}</div>
                </div>
            </div>
        </div>
    )
}

export default PriceRow;
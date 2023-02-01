import styles from './floatingItem.module.css';

function FloatingItem({ item, first, index }) {

    let style = styles.floatingObject1;

    if (first) {
        style = index === 1 ? styles.floatingObject2 :
            index === 2 ? styles.floatingObject3 :
                index === 3 ? styles.floatingObject4 :
                    index === 4 ? styles.floatingObject5
                        : styles.floatingObject1;
    } else {
        style = index === 1 ? styles.floatingObjectB2 :
            index === 2 ? styles.floatingObjectB3 :
                index === 3 ? styles.floatingObjectB4 :
                    index === 4 ? styles.floatingObjectB5
                        : styles.floatingObjectB1;
    }

    return (
        <>
            {
                first
                    ? <div className={`${styles.floatingObject} ${style}`}>
                        <img className={styles.image} src={item.image} />
                    </div>
                    : <div className={`${styles.floatingObject} ${style}`}>
                        <img className={styles.image} src={item.image} />
                    </div>
            }
        </>
    )
}

export default FloatingItem;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Arrow from './arrow';
import styles from './card.module.css';

function Card({ type }) {
    const [active, setActive] = useState(false);

    return (
        <>
            {
                type === '1'
                    ? <div className={`${styles.card} ${styles.firstCard}`}>
                        <h1 className={styles.cardH1}>Agile Project</h1>
                        <h2 className={styles.cardH2}>For complex projects with full customizations and unique designs</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Flexible development process.</li>
                            <li className={styles.listItem}>Dedicated Project Manager.</li>
                            <li className={styles.listItem}>Delivered in 3-5 weeks.</li>
                            <li className={styles.listItem}>Fixed price billing.</li>
                            <li className={styles.listItem}>Pay by milestone.</li>
                        </ul>
                        <Link to={'/contact'} className={styles.button} onMouseOver={() => setActive(() => true)} onMouseOut={() => setActive(() => false)}>
                            Contact Sales
                            <Arrow active={active} />
                        </Link>
                    </div>
                    : <div className={`${styles.card} ${styles.secondCard}`}>
                        <h1 className={`${styles.cardH1} ${styles.secondH1}`}>10-day express</h1>
                        <h2 className={`${styles.cardH2} ${styles.secondH2}`}>Fastest time to market for only</h2>
                        <h1 className={styles.cost}>$6 400</h1>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Minimum Viable Product.</li>
                            <li className={styles.listItem}>Dedicated Project Manager.</li>
                            <li className={styles.listItem}>10 day development cycle.</li>
                            <li className={styles.listItem}>Streamline Process.</li>
                            <li className={styles.listItem}>Low flat rate.</li>
                        </ul>
                        <Link to={'/contact'} className={`${styles.button} ${styles.button2}`} onMouseOver={() => setActive(() => true)} onMouseOut={() => setActive(() => false)}>
                            Contact Me
                            <Arrow active={active} />
                        </Link>
                    </div>
            }
        </>
    )
}

export default Card;
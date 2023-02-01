import { useState } from 'react';
import { Link } from 'react-router-dom';
import Arrow from './arrow';
import styles from './need.module.css';
import Fade from 'react-reveal/Fade';

function Need({ disableBorder }) {

    const [active, setActive] = useState(false);

    return (
        <div className={styles.container}>
            <div className={`${styles.center} ${disableBorder ? styles.noBorder : styles.nothing}`}>
                <Fade up distance='3em'>
                    <h2 className={styles.centerH2}>Need a designer?</h2>
                    <Link to="/contact" className={styles.button} onMouseOver={() => setActive(() => true)} onMouseOut={() => setActive(() => false)}>
                        <div className={styles.buttonText}>Let's work together</div>
                        <Arrow active={active} />
                    </Link>
                </Fade>
            </div>
        </div>
    )
}

export default Need;
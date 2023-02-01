import { useState } from 'react';
import Arrow from './arrow';
import styles from './moreRow.module.css';
import Fade from 'react-reveal/Fade';

function MoreRow({ item, index }) {
    const [active, setActive] = useState(false);

    let buttonBG = index === 0 ? styles.moreButton1 : index === 1 ? styles.moreButton2 : styles.moreButton3
    let buttonImg = index === 0 ? require('../../assets/blue.png') : index === 1 ? require('../../assets/purple.png') : require('../../assets/green.png')

    let DELAY = index * 200;

    return (
        <Fade up delay={DELAY} distance={'5em'}>
            <div className={styles.moreColumn}>
                <div className={`${styles.moreButton} ${buttonBG}`} onMouseOver={() => setActive(() => true)} onMouseOut={() => setActive(() => false)}>
                    <img className={styles.img} src={buttonImg} />
                    <div className={styles.buttonText}>{item.button}</div>
                    <Arrow active={active} />
                </div>
                <h2 className={styles.moreH2}>{item.title}</h2>
                <div className={styles.moreText}>{item.text}</div>
            </div>
        </Fade>
    )
}

export default MoreRow;
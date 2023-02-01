import { useState, useEffect } from 'react';
import { Fade } from 'react-reveal';
import styles from './floatingBox.module.css';
import FloatingItem from './floatingItem';

function importAll(r) {
    return r.keys().map(r);
}

function FloatingBox() {

    const images = importAll(require.context('../../assets/logos', false, /\.(png|jpe?g|svg)$/));

    const itemsArr = [
        {
            name: 'itemok',
            image: images[0]
        },
        {
            name: 'itemok',
            image: images[1]
        },
        {
            name: 'itemok',
            image: images[2]
        },
        {
            name: 'itemok',
            image: images[3]
        },
        {
            name: 'itemok',
            image: images[4]
        },
    ]

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(() => true);
        }, 10000)
    }, [])

    return (
        <div className={styles.integrate}>
            <Fade left distance="5em">
                <div className={styles.column}>
                    <h2 className={styles.h2}>Upgrade and integrate</h2>
                    <h1 className={styles.h1}>Upgrade or integrate existing applications</h1>
                    <div className={styles.floatingTextColumn}>
                        <div className={styles.floatingText}>If you already have existing applications that need upgraded, integrated, or converted you can contact us to start the process. We optimize code with methods such as typescript, or even legacy systems such as pure html/javascript websites into new and better libraries such as React.</div>
                    </div>
                </div>
            </Fade>
            <div className={styles.fallingBox}>
                <div className={styles.animateRise}>
                    <div className={styles.absoluteFloat}>
                        <div className={styles.relative}>
                            {
                                itemsArr.map((item, index) => (
                                    <FloatingItem key={index} item={item} index={index} first={true} />
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.absoluteFloatStart}>
                        <div className={styles.relative}>
                            {
                                itemsArr.map((item, index) => (
                                    <FloatingItem key={index} item={item} index={index} first={true} />
                                ))
                            }
                        </div>
                    </div>
                    {
                        show ? <div className={styles.absoluteFloat2}>
                            <div className={styles.relative}>
                                {
                                    itemsArr.map((item, index) => (
                                        <FloatingItem key={index} item={item} index={index} first={false} />
                                    ))
                                }
                            </div>
                        </div> : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default FloatingBox;
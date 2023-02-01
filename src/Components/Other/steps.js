import { useEffect, useState } from 'react';
import styles from './steps.module.css';
import { Bounce, Fade } from 'react-reveal';

function Steps() {

    const [playAnimation, setPlayAnimation] = useState({
        animation1: true,
        animation1: false,
        animation1: false,
        animation1: false,
    });

    useEffect(() => {
        startAnimationCycle();
        startBoxAnimation();
        startCircleAnimation();
    }, [])

    function startAnimationCycle() {
        setPlayAnimation(() => true);
        setTimeout(() => {
            setPlayAnimation(() => false);
        }, 2000)
        setInterval(() => {
            setPlayAnimation(() => true);
            setTimeout(() => {
                setPlayAnimation(() => false);
            }, 2000)
        }, 5000)
    }

    const [boxAnimation, setBoxAnimation] = useState(false);

    function startBoxAnimation() {
        setBoxAnimation((prev) => !prev);
        setInterval(() => {
            setBoxAnimation((prev) => !prev);
        }, 3000)
    }

    const [circleIndex, setCircleIndex] = useState(-1);

    const circles = [
        {},
        {},
        {}
    ]

    function startCircleAnimation() {
        for (let i = 0; i < 3; i++) {
            let DELAY = 700 * i;
            setTimeout(() => {
                setCircleIndex(() => i);
            }, DELAY)
        }
        setTimeout(() => {
            for (let i = 0; i < 3; i++) {
                let DELAY = 700 * i;
                let number = 1 - i;
                setTimeout(() => {
                    setCircleIndex(() => number);
                }, DELAY)
            }
        }, 4000);

        setInterval(() => {
            for (let i = 0; i < 3; i++) {
                let DELAY = 700 * i;
                setTimeout(() => {
                    setCircleIndex(() => i);
                }, DELAY)
            }
            setTimeout(() => {
                for (let i = 0; i < 3; i++) {
                    let DELAY = 700 * i;
                    let number = 1 - i;
                    setTimeout(() => {
                        setCircleIndex(() => number);
                    }, DELAY)
                }
            }, 4000);
        }, 7000)
    }

    return (
        <div className={styles.container}>
            <div className={styles.papa}>
                <Fade left distance={'3em'}>
                    <h2 className={styles.h2}>Why SimplyCyber</h2>
                    <h1 className={styles.h1}>A simple approach to software development</h1>
                </Fade>
                <div className={styles.stepsContainer}>
                    <div className={styles.miniRow}>
                        <Fade up distance={'3em'} delay={200}>
                            <div className={styles.step}>
                                <div className={styles.stepAnimation2}>
                                    <div className={styles.cirlceTriangleBox}>
                                        <div className={`${styles.triangleBox} ${playAnimation ? styles.triangleBoxAnimation : styles.nothing}`}>
                                            <div className={styles.triangles}>
                                                <div className={styles.triangleChild} />
                                                <div className={styles.triangleChild} />
                                                <div className={`${styles.triangleChild} ${playAnimation ? styles.triangleChildAnimation1 : styles.nothing}`} />
                                                <div className={`${styles.triangleChild} ${playAnimation ? styles.triangleChildAnimation2 : styles.nothing}`} />
                                                <div className={styles.triangleChild} />
                                                <div className={styles.triangleChild} />
                                            </div>
                                        </div>
                                        <div className={`${styles.circleBox} ${playAnimation ? styles.circleBoxAnimation : styles.nothing}`}>
                                            <div className={styles.circles}>
                                                <div className={`${styles.circleChild} ${playAnimation ? styles.circleChildAnimation : styles.nothing}`} />
                                                <div className={`${styles.circleChild} ${playAnimation ? styles.circleChildAnimation : styles.nothing}`} />
                                                <div className={`${styles.circleChild} ${playAnimation ? styles.circleChildAnimation : styles.nothing}`} />
                                                <div className={`${styles.circleChild} ${playAnimation ? styles.circleChildAnimation : styles.nothing}`} />
                                                <div className={`${styles.circleChild} ${playAnimation ? styles.circleChildAnimation : styles.nothing}`} />
                                                <div className={`${styles.circleChild} ${playAnimation ? styles.circleChildAnimation : styles.nothing}`} />
                                            </div>
                                        </div>
                                        <div className={`${styles.centerCircle} ${playAnimation ? styles.centerCircleAnimation : styles.nothing}`} />
                                    </div>
                                </div>
                                <div className={styles.stepTitle}>Business solutions</div>
                                <div className={styles.text}>
                                    We constantly make sure that the application aligns to your project goals and requirements. The most important part is the business problem being solved.
                                </div>
                            </div>
                        </Fade>
                        <Fade up distance={'3em'} delay={400}>
                            <div className={styles.step}>
                                <div className={styles.stepAnimation3}>
                                    <div className={styles.boxContainer}>
                                        <Fade distance={'1em'} top={!boxAnimation} left when={boxAnimation} opposite>
                                            <img className={styles.box} src={require('../../assets/box1.png')} />
                                        </Fade>
                                        <Fade distance={'1em'} top={boxAnimation} left when={!boxAnimation} opposite>
                                            <img className={styles.box} src={require('../../assets/box2.png')} />
                                        </Fade>
                                    </div>
                                </div>
                                <div className={styles.stepTitle}>Frequent Feedback</div>
                                <div className={styles.text}>
                                    We ensure that the end product meets your requirements and needs by holding meetings to confirm your business needs.
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className={styles.miniRow}>

                        <Fade up distance={'3em'} delay={600}>
                            <div className={styles.step}>
                                <div className={styles.stepAnimation4}>
                                    <div className={styles.stepCard}>
                                        <div className={styles.stepCircleContainer}>
                                            {
                                                circles.map((item, index) => (
                                                    <Fade left when={circleIndex >= index} key={index}>
                                                        <div className={styles.cardCircle}></div>
                                                    </Fade>
                                                ))
                                            }
                                            <div className={styles.step4Absolute}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.stepTitle}>Modern & responsive U/I</div>
                                <div className={styles.text}>
                                    Our applications are built using modern coding libraries, which allows us to build smooth and responsive web applications.
                                </div>
                            </div>
                        </Fade>
                        <Fade up distance={'3em'} delay={800}>
                            <div className={styles.step}>
                                <div className={styles.stepAnimation1}>
                                    <img src={require('../../assets/cog1.png')} className={styles.cog1} />
                                    <img src={require('../../assets/cog2.png')} className={styles.cog2} />
                                </div>
                                <div className={styles.stepTitle}>Clean Code</div>
                                <div className={styles.text}>
                                    We write clean code which decreases complexity, improves performance, and decreases downtime for new features.
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;
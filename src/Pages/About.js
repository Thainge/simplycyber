import Need from '../Components/Other/need';
import styles from './About.module.css';

function About() {

    return (
        <div className={styles.container}>
            <div className={styles.fuzzy}>
                <div className={styles.wave} />
                <div className={styles.header}>
                    <h1 className={styles.headerH1}>About Us</h1>
                    <h2 className={styles.headerH2}></h2>
                </div>
            </div>
            <div className={styles.content}>
                <div className={`${styles.section} ${styles.section1}`}>
                    <div className={styles.column}>
                        <h2 className={styles.h2}>Who we are</h2>
                        <h1 className={styles.h1}>What is SimplyCyber?</h1>
                        <div className={styles.textColumn}>
                            <div className={styles.text}>
                                SimplyCyber is a software development company which was created in January 2023 by the CEO Tobey Hainge. SimplyCyber's objective is to simplify application development process by developing and desiging secure, responsive, and modern web applications.
                            </div>
                            <div className={styles.text}>
                                Meet our CEO, Tobey Hainge, a fullstack application developer & cyber security professional.
                            </div>
                        </div>
                    </div>
                    <div className={styles.shieldBox}>
                        <img className={styles.shieldImg} src={require('../assets/picture.png')} />
                    </div>
                </div>

                <div className={`${styles.section} ${styles.section2}`}>
                    {/* <div className={styles.shieldBox}>
                        <div className={styles.shieldImg} src={require('../assets/contactbg.png')} />
                    </div> */}
                    <div className={`${styles.column} ${styles.column2}`}>
                        <h2 className={styles.h2}>What we do</h2>
                        <h1 className={styles.h1}>What does SimplyCyber do?</h1>
                        <div className={styles.textColumn}>
                            <div className={styles.text}>
                                We support small to large businesses in developing the software they need to support their customers. We primarly build web applications and will occasionally build mobile applications as well.
                            </div>
                            <div className={styles.text}>
                                With our primary tech stack being ReactJS, NodeJS, and MongoDB, we build smooth and modern web applications of all sizes using the latest coding standards. Our goal is to simplifiy the web.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.section3}`}>
                    <div className={styles.column}>
                        <h2 className={styles.h2}>How we help</h2>
                        <h1 className={styles.h1}>How can SimplyCyber help?</h1>
                        <div className={styles.textColumn}>
                            <div className={styles.text}>
                                SimplyCyber can create small to large applications for your small business or enterprise level platforms. Software development can be hard to get right, and can often lead to miscommunication.
                            </div>
                            <div className={styles.text}>
                                Our development process is simplified by using the agile development approach. This means that we will be able to constantly make sure that we are on the right track when desiging and developing the application to the client needs.
                            </div>
                        </div>
                    </div>
                    <div className={styles.shieldBox}>
                        <img className={styles.shieldImg} src={require('../assets/contactbg.png')} />
                    </div>
                </div>
            </div>

            <Need />
        </div>
    )
}

export default About;
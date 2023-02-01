import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Need from '../Components/Other/need';
import Phone from '../Components/Other/phone';
import Steps from '../Components/Other/steps';
import styles from './Home.module.css';

function Home() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerFlex}>
                    <Fade left distance={'10em'}>
                        <div className={styles.headerText}>
                            <h2 className={styles.headerH2}>SimplyCyber</h2>
                            <h1 className={styles.headerH1}>Software Simplified</h1>
                            <div className={styles.headerPara}>
                                SimplyCyber provides businesses of all kinds and sizes with secure software solutions using the latest coding frameworks. We utilize modern approaches to designing smooth applications to solve business problems.
                            </div>
                            <div className={styles.headerButtons}>
                                <div className={styles.button2}>Get started</div>
                            </div>
                        </div>
                    </Fade>
                    <Fade up delay={400} distance={'5em'}>
                        <div className={styles.phoneBox}>
                            <Phone type='1' />
                        </div>
                    </Fade>
                </div>
                <div className={styles.waveBox}>
                    <div className={styles.waveAnimation}>
                        <div className={styles.wave} />
                        <div className={styles.waveStatic} />
                    </div>
                </div>
            </div>
            <div className={styles.homeContainer}>
                <div className={`${styles.section} ${styles.phoneTextContainer}`}>
                    <Fade left distance={'10em'} delay={300}>
                        <div className={`${styles.column} ${styles.phoneRelative}`}>
                            <div className={`${styles.phoneBox} ${styles.phoneSecond}`}>
                                <Phone type='2' />
                            </div>
                            <div className={`${styles.phoneBox} ${styles.phoneSecond} ${styles.phoneAbsolute}`}>
                                <Phone type='3' />
                            </div>
                        </div>
                    </Fade>
                    <Fade right distance='10em'>
                        <div className={styles.column}>
                            <h2 className={styles.sectionH2}>Software solutions</h2>
                            <h1 className={styles.sectionH1}>Software solutions to solve your business problems</h1>
                            <div className={styles.sectionText}>We can help you through the process of designing and developing software to solve your business problems. By constantly communicating the project requirements and progress we ensure that the final product meets your needs.
                            </div>
                            <ul className={styles.unorderedList}>
                                <li className={styles.listItem}>
                                    <img src={require('../assets/calender.png')} className={styles.textIcon}></img>
                                    <div className={styles.LiText}>Modern design</div>
                                </li>
                                <li className={styles.listItem}>
                                    <img src={require('../assets/note.png')} className={styles.textIcon}></img>
                                    <div className={styles.LiText}>Solve business needs</div>
                                </li>
                                <li className={styles.listItem}>
                                    <img src={require('../assets/face.png')} className={styles.textIcon}></img>
                                    <div className={styles.LiText}>Smooth & responsive U/I</div>
                                </li>
                            </ul>
                            <button className={styles.linkButton}>Get Started</button>
                        </div>
                    </Fade>
                </div>

                <div className={`${styles.section} ${styles.section2}`}>
                    <Fade left distance={'5em'}>
                        <div className={`${styles.column} ${styles.column2}`}>
                            <h2 className={styles.h2}>Simplified developement</h2>
                            <h1 className={styles.h1}>A fully versatile approach to software development</h1>
                            <div className={styles.textColumn}>
                                <div className={styles.text}>
                                    We bring together everything that's required to build a client ready application that solves your business needs. By using the agile development approach you are able to easily communicate project requirements and changes as needed.
                                </div>
                                <div className={styles.text}>
                                    SimplyCyber also supports upgrading and integrating existing systems to newer and better systems. We also help companies solve problems with automation, which improves revinue.
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right distance={'5em'} delay={300}>
                        <div className={`${styles.shieldBox} ${styles.shieldBox2}`}>
                            <img className={`${styles.shieldImg} ${styles.shieldImg2}`} src={require('../assets/contactbg.png')} />
                        </div>
                    </Fade>
                </div>

                <div className={`${styles.section} ${styles.section3}`}>
                    <Steps />
                </div>

                <div className={`${styles.section} ${styles.section4}`}>
                    <Fade left distance={'5em'}>
                        <div className={`${styles.column} ${styles.column4}`}>
                            <h2 className={styles.sectionH2}>Fast delivery</h2>
                            <h1 className={styles.sectionH1}>Deliver more quickly using automation and clean code</h1>
                            <div className={styles.sectionText}>Not only do we ensure that your application meets your requirements and aligns with your business solution, we also help you improve solutions as we see them. We provide valuble insight on speeding up the speed of your applications by prioritizing automation over manual.</div>
                            <div>
                                <button className={`${styles.linkButton} ${styles.section4Button}`}>Get Started</button>
                            </div>
                        </div>
                    </Fade>
                    <Fade right distance={'5em'}>
                        <div className={`${styles.column} ${styles.phoneRelative}`}>
                            <div className={styles.earthContainer}>
                                <div className={styles.earth} />
                            </div>
                        </div>
                    </Fade>

                </div>

                <div className={styles.needBottom}>
                    <Need disableBorder={true} />
                </div>
            </div>
        </>
    );
}

export default Home;
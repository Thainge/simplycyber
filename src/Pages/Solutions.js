import MoreRow from '../Components/Other/moreRow';
import styles from './Solutions.module.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Need from '../Components/Other/need';
import FloatingBox from '../Components/Other/floatingBox';
import Screen from '../Components/Other/screen';

function Solutions() {

    const rows = [
        {
            button: 'button',
            title: 'Recurring subscriptions and invoicing',
            text: 'Subscriptions and invoicing with auto-reconciliation and smart recovery tools.',
        },
        {
            button: 'button',
            title: 'Recurring subscriptions and invoicing',
            text: 'Subscriptions and invoicing with auto-reconciliation and smart recovery tools.',
        },
    ]

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles.headerFlex}>
                    <Fade left delay={100} distance={'5em'}>
                        <div className={styles.headerText}>
                            <h2 className={styles.headerH2}>Solutions</h2>
                            <h1 className={styles.headerH1}>A simple approach to software solutions</h1>
                            <div className={styles.headerPara}>
                                SimplyCyber provides software development services to businesses in need of software solutions. We can provide you with software that suits your needs using the latest security standards and modern development approaches.
                            </div>
                            <div className={styles.headerButtons}>
                                <Link to={'/contact'} className={styles.button2}>Get Started</Link>
                            </div>
                        </div>
                    </Fade>
                    <Fade up delay={400} distance={'5em'}>
                        <div className={styles.screenBox}>
                            <Screen />
                        </div>
                    </Fade>
                </div>
                <div className={styles.wave} />
            </div>

            <div className={styles.content}>
                <div className={styles.section}>
                    <Fade left distance='5em' delay={600}>
                        <div className={styles.column}>
                            <h2 className={styles.sectionH2}>Build new applications</h2>
                            <h1 className={styles.sectionH1}>Desigin and develop new software solutions</h1>
                            <div className={styles.sectionText}>SimplyCyber can help your business need by providing additons to existing systems, adding new content to existing websites, or even building brand new applications from scratch. We can help build any type of web application to suit your needs.</div>
                            <ul className={styles.unorderedList}>
                                <li className={styles.listItem}>
                                    <img src={require('../assets/note.png')} className={styles.textIcon}></img>
                                    <div className={styles.LiText}>Beautiful designs</div>
                                </li>
                                <li className={styles.listItem}>
                                    <img src={require('../assets/face.png')} className={styles.textIcon}></img>
                                    <div className={styles.LiText}>Consumer ready</div>
                                </li>
                            </ul>
                            <div className={styles.buttonFlex}>
                                <Link to={'/contact'} className={styles.linkButton}>Get Started</Link>
                            </div>
                        </div>
                    </Fade>
                    <Fade right distance="5em" delay={800}>
                        <div className={styles.fill}>
                            <img src={require('../assets/logo.png')} className={styles.logoImage} />
                        </div>
                    </Fade>
                </div>

                <div className={styles.floatingContainer}>
                    <FloatingBox />
                </div>

                {/* <div className={styles.moreRow}>
                    {
                        rows.map((item, index) => (
                            <MoreRow item={item} index={index} key={index} />
                        ))
                    }
                </div> */}

                <div className={styles.finalBackground}>
                    <Fade up distance="5em">
                        <div className={styles.final}>
                            <div className={styles.finalImgBox}>
                                <img src={require('../assets/stats.png')} className={styles.finalImg} />
                            </div>
                            <div className={styles.finalFlex}>
                                <div className={styles.finalText}>SimplyCyber can help you <i className={styles.finalTextColor}>save</i> time and <i className={styles.finalTextColor}>increase</i> revenue by designing easy to use software solutions.</div>
                            </div>
                        </div>
                    </Fade>
                </div>

                <Need />
            </div>

        </div >
    )
}

export default Solutions;
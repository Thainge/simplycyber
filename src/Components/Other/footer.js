import { Link } from 'react-router-dom';
import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.wave} />
            <div className={styles.footer}>

                {/* Logo & copyright */}
                <div className={`${styles.column} ${styles.col1}`}>
                    <div className={styles.miniColumn}>
                        <Link to={'/'} className={styles.h1}>SimplyCyber</Link>
                        <div className={styles.text}><img src={require('../../assets/loc.png')} className={styles.icon} /> United States</div>
                        <div className={styles.text}><img src={require('../../assets/email.png')} className={styles.icon} /> support@simplycyber.com</div>
                        <div className={styles.text}><img src={require('../../assets/phone.png')} className={styles.icon} /> +1-910-321-8215</div>
                    </div>
                    <div className={styles.copyright}>© 2023 SimplyCyber LLC</div>
                </div>

                <div className={styles.twoColumns}>
                    {/* Solutions */}
                    <div className={`${styles.column} ${styles.col2}`}>
                        <h2 className={styles.h2}>Resources</h2>
                        <Link to={'/solutions'} className={styles.link}>Solutions</Link>
                        <Link to={'/pricing'} className={styles.link}>Pricing</Link>
                        <Link to={'/about'} className={styles.link}>About</Link>
                    </div>

                    {/* Contact */}
                    <div className={`${styles.column} ${styles.col4}`}>
                        <h2 className={styles.h2}>Have questions?</h2>
                        <Link to={'/contact'} className={styles.link}>Contact us</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
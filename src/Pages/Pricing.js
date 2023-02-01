import { Link } from 'react-router-dom';
import Card from '../Components/Other/card';
import Need from '../Components/Other/need';
import PriceRow from '../Components/Other/priceRow';
import styles from './Pricing.module.css';

function Pricing() {

    let list = [
        {
            title: 'Enterprise Projects',
            firstVal: '✔',
            secondVal: '✔',
            firstExtra: '',
            secondExtra: '',
        },
        {
            title: 'Small Businesss Projects',
            firstVal: '✔',
            secondVal: '✔',
            firstExtra: '',
            secondExtra: '',
        },
        {
            title: 'Maximum Viable Product',
            firstVal: '✔',
            secondVal: '✖',
            firstExtra: '',
            secondExtra: '',
        },
        {
            title: 'Agile Approach',
            firstVal: '✔',
            secondVal: '✖',
            firstExtra: '',
            secondExtra: '',
        },
    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.headerH1}>What type of project works best for you?</h1>
            <h2 className={styles.headerH2}>Always know what you’ll pay.</h2>
            <div className={styles.header}>
                <Card type={'1'} />
                <Card />
            </div>
            <div className={styles.absoluteBG} />

            <div className={styles.content}>
                <div className={styles.rowHeader}>
                    <div className={styles.rowHeaderCol}>
                        <h2 className={`${styles.rowHeaderH2} ${styles.firstH2}`}>Agile Project</h2>
                        <div className={styles.rowHeaderText}>Pay by milestone</div>
                        <Link to={'/contact'} className={`${styles.rowHeaderButton} ${styles.button1}`}>Contact Sales</Link>
                    </div>
                    <div className={styles.rowHeaderCol}>
                        <h2 className={`${styles.rowHeaderH2} ${styles.secondH2}`}>10-Day Express</h2>
                        <div className={styles.rowHeaderText}>$6,400</div>
                        <Link to={'/contact'} className={`${styles.rowHeaderButton} ${styles.button2}`}>Contact me</Link>
                    </div>
                </div>
                <div className={styles.list}>
                    {
                        list.map((item, index) => (
                            <PriceRow item={item} key={index} />
                        ))
                    }
                </div>
                <Need />
            </div>
        </div>
    )
}

export default Pricing;
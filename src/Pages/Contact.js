import { useState } from 'react';
import styles from './Contact.module.css';
import Fade from 'react-reveal/Fade';
import { useEffect, useRef } from 'react';
import { BarLoader } from 'react-spinners';
import { sendEmail } from '../Hooks/email';

function Contact() {
    const [formValues, setFormValues] = useState({
        fname: '',
        lname: '',
        email: '',
        interest: '',
        budget: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send to nodeJS server to send email
        setLoading(() => true);
        sendEmail(formValues);
        setTimeout(() => {
            setSubmitted(() => true);
            setLoading(() => false);
        }, 1000)
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setFormValues((prev) => {
            let newData = { ...prev, [name]: value };
            return newData;
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.fuzzy}>
                <div className={styles.wave} />
                <div className={styles.lettersContainer}>
                    <div className={styles.lettersList}>
                        <Fade delay={600}><i>L</i></Fade>
                        <Fade delay={900}><i>e</i></Fade>
                        <Fade delay={1200}><i>t</i></Fade>
                        <Fade delay={1500}><i>s</i></Fade>
                        <Fade delay={1200}><i>W</i></Fade>
                        <Fade delay={900}><i>o</i></Fade>
                        <Fade delay={600}><i>r</i></Fade>
                        <Fade delay={600}><i>k</i></Fade>
                        <Fade delay={900}><i>T</i></Fade>
                        <Fade delay={1200}><i>o</i></Fade>
                        <Fade delay={600}><i>g</i></Fade>
                        <Fade delay={1500}><i>e</i></Fade>
                        <Fade delay={1200}><i>t</i></Fade>
                        <Fade delay={600}><i>h</i></Fade>
                        <Fade delay={900}><i>e</i></Fade>
                        <Fade delay={600}><i>r</i></Fade>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <img src={require('../assets/contactbg.png')} className={styles.backImg} />
                <div className={styles.column}>
                    <Fade left distance="5em">
                        <h2 className={styles.sectionH2}>contact</h2>
                        <h1 className={styles.sectionH1}>Get in touch — let’s work together.</h1>
                    </Fade>
                </div>
                <form className={styles.form} id="contact-form" onSubmit={handleSubmit}>
                    <div className={styles.text}>Got a project? Drop me a line if you want to work together on something exciting.</div>
                    <div className={styles.row}>
                        <label className={styles.label}>
                            First Name*
                            <input maxLength={20} required className={styles.input} onChange={handleChange} name='fname' type='text' placeholder='What is your first name?' />
                        </label>
                        <label className={styles.label}>
                            Last Name*
                            <input maxLength={20} required className={styles.input} onChange={handleChange} name='lname' type='text' placeholder='What is your last name?' />
                        </label>
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label}>
                            Email Address*
                            <input maxLength={40} required className={styles.input} onChange={handleChange} name='email' type='text' placeholder='What is your email address?' />
                        </label>
                        <div className={styles.selectBox}>
                            <select name='interest' className={styles.select} onChange={handleChange} defaultValue={'default'}>
                                <option value={'default'} disabled> What are you interested in?</option>
                                <option>Need help with a one-off project</option>
                                <option>Looking for a long term partnership</option>
                                <option>Want to hire me full-time</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.selectBox}>
                        <select name='budget' className={styles.select} onChange={handleChange} defaultValue={'default'}>
                            <option value={'default'} disabled>What's your budget?</option>
                            <option>$0-$1000</option>
                            <option>$1000 - $2500</option>
                            <option>$2500 - $5000</option>
                            <option>$5000 - $10000</option>
                            <option>$10000 or more</option>
                        </select>
                    </div>
                    <label className={`${styles.label} ${styles.textAreaBox}`}>
                        Message:
                        <textarea maxLength={500} name='message' onChange={handleChange} className={styles.textArea} placeholder='What is your message?' />
                        <div className={styles.textareaBottom}>
                            <i className={styles.messageEnd}>Max 500 characters</i>
                            <i className={styles.messageEnd}>{500 - formValues.message.length} characters left</i>
                        </div>
                    </label>
                    <button form='contact-form' className={`${styles.submit} ${submitted || loading ? styles.submitted : styles.nothing}`}>

                        {submitted ? <div className={styles.submitBG} /> : <></>}

                        <Fade up distance={'1em'} duration={500} delay={1000} when={submitted && !loading}>
                            <div className={styles.box}>
                                Message sent!
                            </div>
                        </Fade>
                        <Fade duration={500} when={!submitted && !loading}>
                            <div className={styles.box}>
                                <i className={styles.email}>✉</i> Send Message
                            </div>
                        </Fade>
                        <Fade delay={300} when={loading}>
                            <div className={styles.box}>
                                <BarLoader speedMultiplier={2} size={7} color={'white'} />
                            </div>
                        </Fade>
                    </button>
                </form >
            </div >
        </div >
    )
}

export default Contact;
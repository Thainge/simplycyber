import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Pricing from '../Pages/Pricing';
import Solutions from '../Pages/Solutions';
import Footer from './Other/footer';
import styles from './Router.module.css';
import { Fade } from 'react-reveal';

function RouterComponent() {
    const ref = useRef();

    const [menuOpen, setMenuOpen] = useState(false);

    useOnClickOutside(ref, setMenuOpen);

    return (
        <>
            {/* Navbar */}
            <div className={styles.navContainer}>
                <ul className={styles.navBar}>
                    <Link className={styles.navItem} to={'/'}>Home</Link>
                    <Link className={styles.navItem} to={'/solutions'}>Solutions</Link>
                    <Link className={styles.navItem} to={'/pricing'}>Pricing</Link>
                    <Link className={styles.navItem} to={'/about'}>About</Link>
                    <Link className={styles.navItem} to={'/contact'}>Contact</Link>
                </ul>
                <div className={styles.specialNav}>
                    <Link className={styles.specialLink} to={'/'}>
                        SimplyCyber
                    </Link>
                </div>
            </div>
            <div className={styles.navMenu} ref={ref}>
                <div onClick={() => setMenuOpen((prev) => !prev)} className={styles.imgBox}>
                    <img src={require('../assets/menu.png')} className={styles.menuIcon} />
                </div>
                <Fade duration={300} up distance={'2em'} when={menuOpen}>
                    <ul className={styles.menuList}>
                        <Link onClick={() => setMenuOpen(() => false)} className={`${styles.navItem} ${styles.menuItem}`} to={'/'}>Home</Link>
                        <Link onClick={() => setMenuOpen(() => false)} className={`${styles.navItem} ${styles.menuItem}`} to={'/solutions'}>Solutions</Link>
                        <Link onClick={() => setMenuOpen(() => false)} className={`${styles.navItem} ${styles.menuItem}`} to={'/pricing'}>Pricing</Link>
                        <Link onClick={() => setMenuOpen(() => false)} className={`${styles.navItem} ${styles.menuItem}`} to={'/about'}>About</Link>
                        <Link onClick={() => setMenuOpen(() => false)} className={`${styles.navItem} ${styles.menuItem}`} to={'/contact'}>Contact</Link>
                    </ul>
                </Fade>
            </div>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </>
    );
}

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(() => false);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}

export default RouterComponent;
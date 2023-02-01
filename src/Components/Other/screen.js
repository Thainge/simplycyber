import { useEffect, useMemo, useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import styles from './screen.module.css';
import ScreenBackground from './screenBackground';

function importAll(r) {
    return r.keys().map(r);
}

function Screen({ second }) {
    const images = importAll(require.context('../../assets/screens', false, /\.(png|jpe?g|svg)$/));

    const [index, setIndex] = useState(0);
    const [shownIndex, setShownIndex] = useState(0);
    const [playScreen, setPlayScreen] = useState(false);

    let list = [
        {
            image: <img className={styles.contentImage} src={require('../../assets/logoNoText.png')} />,
            text: <Link to={'/'} className={styles.buttonScreen}>SimplyCyber</Link>
        },
        {
            image: <img className={styles.buttonImage} src={require('../../assets/locSecond.png')} />,
            text: <Link to={'/pricing'} className={styles.buttonScreen}>Check Pricing</Link>
        },
        {
            image: <img className={styles.buttonImage} src={require('../../assets/phoneSecond.png')} />,
            text: <Link to={'/contact'} className={styles.buttonScreen}>Contact Us</Link>
        },
    ]

    const [firstInterval, setFirstInterval] = useState(null);

    const [screenIndex, setScreenIndex] = useState(0);
    const [intervalRef, setIntervalRef] = useState(false);
    const [playing, setPlaying] = useState(true);
    const [showImage, setShowImage] = useState(false);

    const [activeOverlay, setActiveOverlay] = useState(true);
    const [canClickOverlay, setCanClickOverlay] = useState(true);

    const [canClick, setCanClick] = useState(true);

    const startScreenPlay = () => {
        const intRef = setInterval(() => {
            if (playing) {
                setScreenIndex((prev) => {
                    let newIndex = prev + 1;

                    if (newIndex === images.length) {
                        newIndex = 0;
                    }

                    return newIndex;
                });
            }
        }, 3000);

        setIntervalRef(() => intRef);
    }

    function playFirstScreen() {
        setTimeout(() => {
            setPlayScreen(() => true);
        }, 1500);

        const firstInt = setInterval(() => {
            // Hide old
            setPlayScreen(() => false);
            setIndex((prevIndex) => {
                let newIndex = prevIndex + 1;

                if (newIndex > list.length - 1) {
                    newIndex = 0;
                }

                setShownIndex(() => newIndex);

                return newIndex;
            });

            // Delay showing new one for x seconds
            setTimeout(() => {
                setPlayScreen(() => true);
            }, 1000);

        }, 4000)

        setFirstInterval(() => firstInt);
    }

    function toggleOverlay() {
        if (canClickOverlay) {
            setCanClickOverlay(() => false);
            setTimeout(() => {
                setCanClickOverlay(() => true);
            }, 800);
            setActiveOverlay((prev) => !prev);
        }
    }

    function navToIndexFirst(index) {
        setPlayScreen(() => false);
        setTimeout(() => {
            setPlayScreen(() => true);
        }, 700)
        clearInterval(firstInterval);
        setIndex(() => index);
        playFirstScreen();
    }

    useEffect(() => {
        playFirstScreen();
        startScreenPlay();
        setTimeout(() => {
            setActiveOverlay(() => false);
        }, 1500)
    }, [])

    function pauseStartSlides() {
        if (playing && !showImage) {
            setPlaying(() => false);
            setShowImage(() => true);
            setTimeout(() => {
                setShowImage(() => false);
            }, 500);
            clearInterval(intervalRef);
        } else if (!playing && !showImage) {
            setPlaying(() => true);
            setShowImage(() => true);
            setTimeout(() => {
                setShowImage(() => false);
            }, 500);
            startScreenPlay();
        }
    }

    function navToIndex(index) {
        if (canClick) {
            setCanClick(() => false);
            setTimeout(() => {
                setCanClick(() => true);
            }, 700);
            clearInterval(intervalRef);
            setPlaying(() => true);
            setScreenIndex(() => index);
            startScreenPlay();
        }
    }

    return (
        <>
            {
                second
                    ? <div className={styles.monitor}>
                        <div className={styles.screenContainer}>
                            <div className={styles.screen}>
                                <div className={`${styles.browser} ${styles.browser2}`}>
                                    <div className={styles.browserRelative}>
                                        <div className={styles.tabs}>
                                            {
                                                images.map((item, index) => (
                                                    <div onClick={() => navToIndex(index)} className={`${styles.tab} ${screenIndex.toString() === index.toString() ? styles.tabActive : styles.nothing}`} key={index}>
                                                        <div className={styles.browserTabCircle} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className={styles.contentBox}>
                                            <div className={`${styles.contentScreen} ${styles.contentScreen2}`}>
                                                {
                                                    images.map((item, index) => (
                                                        <ScreenBackground screenIndex={screenIndex} item={item} index={index} key={index} />
                                                    ))
                                                }
                                                <div className={styles.overlayImageBox}>
                                                    <div className={`${styles.imageContainer} ${showImage && playing ? styles.fadeIn : styles.nothing} ${showImage && !playing ? styles.fadeOut : styles.nothing}`}>
                                                        <img className={styles.overlayImage} src={playing ? require('../../assets/play.png') : require('../../assets/pause.png')} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.bottomScreen}>
                            <div className={styles.buttonBox}>
                                <div className={styles.button} onClick={pauseStartSlides} />
                            </div>
                        </div>
                        <img src={require('../../assets/monitorBottom.png')} className={styles.monitorBottom} />
                    </div>
                    : <div className={styles.monitor}>
                        <div className={styles.screenContainer}>
                            <div className={styles.screen}>
                                <Fade duration={800} left opposite when={activeOverlay}>
                                    <div className={styles.absoluteOverlay}>
                                        <div className={styles.centerOverlay}>
                                            <img className={styles.centerOverlayImage} src={require('../../assets/logoNoText.png')} />
                                            <div className={styles.centerOverlayText}>SimplyCyber</div>
                                        </div>
                                    </div>
                                </Fade>
                                <div className={styles.browser}>
                                    <div className={styles.browserRelative}>
                                        <div className={`${styles.tabs} ${!activeOverlay ? styles.activeTabs : styles.fadeTabIn}`}>
                                            {
                                                list.map((item, itemIndex) => (
                                                    <div onClick={() => navToIndexFirst(itemIndex)} className={`${styles.tab} ${index.toString() === itemIndex.toString() ? styles.tabActive : styles.nothing}`} key={itemIndex}>
                                                        <div className={styles.browserTabCircle} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className={`${styles.contentBox} ${!activeOverlay ? styles.contentBox2 : styles.fadeContentBox}`}>
                                            <div className={styles.contentScreen}>
                                                <Fade up duration={500} distance={'1em'} when={playScreen}>
                                                    {list[index].image}
                                                </Fade>
                                                <Fade up duration={500} distance={'1em'} when={playScreen}>
                                                    <div className={`${styles.screenText} ${!activeOverlay ? styles.screenActive : styles.screenFade}`}>
                                                        {list[index].text}
                                                    </div>
                                                </Fade>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.bottomScreen}>
                            <div className={styles.buttonBox}>
                                <div className={styles.button} onClick={toggleOverlay} />
                            </div>
                        </div>
                        <img src={require('../../assets/monitorBottom.png')} className={styles.monitorBottom} />
                    </div>
            }
        </>
    )
}

export default Screen;
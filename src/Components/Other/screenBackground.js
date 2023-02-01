import styles from './screenBackground.module.css';
import Slide from 'react-reveal/Slide';

function ScreenBackground({ screenIndex, item, index }) {
    const isSame = screenIndex === index ? true : false;
    return (
        <Slide left opposite duration={1000} when={isSame}>
            <div className={styles.fadeImg}
                style={{
                    backgroundImage: "url(" + item + ")"
                }}
            />
        </Slide>
    )
}

export default ScreenBackground;
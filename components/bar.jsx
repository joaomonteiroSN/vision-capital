import { logos } from '../data';
import { logosTwo } from '../data';
import styles from '../src/app/page.module.css'


export function Bar() {

    return (
        <div className={styles.bar}>
            <div className={styles.titleBar}>
                <hr></hr>
                <h3>In the pipeline</h3>
                <hr></hr>
            </div>
            <div className={styles.barImg}>
                { logos.map(imgUrl => <img src={imgUrl.src} alt={imgUrl.alternative} />)}
            </div>
        </div>
    );
}
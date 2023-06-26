import { cardInfo } from '../data';
import styles from '../src/app/page.module.css'


export function Card(props) {

    return (
        <div className={styles.cardWrapper}>
            <span>{props.s}</span><p>{props.p}</p>
        </div>
        
        // <ul className={styles.cardPurple}>
        // {/* {cardInfo.map(item => <li>{item.id}
        //     <p>{item.description}</p>
        // </li>)} */}
        // </ul>
    );
}
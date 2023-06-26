import { cardInfo } from '../data';
import styles from '../src/app/page.module.css'


export function Card() {

    return (
        <div className={styles.cardWrapper}>
            <span>01</span><p>VCs don't care about your DeFi idea – only their gains</p>
        </div>
        
        // <ul className={styles.cardPurple}>
        // {/* {cardInfo.map(item => <li>{item.id}
        //     <p>{item.description}</p>
        // </li>)} */}
        // </ul>
    );
}
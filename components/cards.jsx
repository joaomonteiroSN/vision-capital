import { cardInfo } from '../data';
import styles from '../src/app/page.module.css'


export function Card() {

    return (
        <ul className={styles.cardPurple}>
            {cardInfo.map(item => <li>{item.id}
                <p>{item.description}</p>
            </li>)}
        </ul>
    );
}
import styles from '../src/app/page.module.css'

export function DarkButton(props) {
    return (
      <button className={styles.darkButton}>{props.s}</button>
    );
}
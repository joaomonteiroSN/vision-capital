import styles from '../src/app/page.module.css'

export function LightButton(props) {
    return (
      <button className={styles.lightButton}>{props.text}</button>
    );
}
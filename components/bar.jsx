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
                <img className={styles.barLogos} src="harvard-logo.svg" alt="harvard logo" />
                <img className={styles.barLogos} src="microsoft-logo.svg" alt="microsoft logo" />
                <img className={styles.barLogos} src="nasa-logo.svg" alt="nasa logo" />
                <img className={styles.barLogos} src="yale-logo.svg" alt="yale university logo" />
                <img className={styles.barLogos} src="payoneer-logo.svg" alt="payoneer logo" />
            </div>
        </div>
    );
}
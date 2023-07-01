import styles from '../src/app/page.module.css'


export function Bar(props) {

    const logos = props.logos;
    return (
        <div className={styles.bar}>
            <div className={styles.titleBar}>
                <hr></hr>
                <h3>{props.h3}</h3>
                <hr></hr>
            </div >
            <div className={styles.barImg}>
                {logos?.map(logo => <img src={logo.src}></img>)}
            </div>
        </div>
    );
}
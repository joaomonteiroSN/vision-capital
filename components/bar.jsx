import styles from '../src/app/page.module.css'


export function Bar(props) {

    return (
        <div>
            <img src={props.src} alt={props.alt} />
        </div>
    );
}
// import { toDoCardInfo } from '../data';
import styles from '../src/app/page.module.css'


export function ToDoCard(props) {

    return (
        <div className={styles.cardToDo}>
            <img src="todo.svg" alt="image of checked mark" />
            <div>
                <p>{props.p}</p>
                <span>{props.span}</span>
            </div>
        </div>

        // <ul className={styles.cardToDo}>

        //     {toDoCardInfo.map(item => <li>{item.info}
        //         <img src='todo.svg'></img></li>)}
        // </ul>
    );
}
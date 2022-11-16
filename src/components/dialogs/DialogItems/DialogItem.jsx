import { NavLink } from 'react-router-dom'
import styles from './DialogItem.module.css'
const DialogItem = (props) => {
    let classNames = require('classnames')
    return (
        <div style={{ maxHeight: '100px' }} >
            <NavLink to={`/dialogs/${props.id}`} className={item => item.isActive ? classNames(styles.dialog, styles.active) : styles.dialog}>
                <img className={styles.avatar} src={props.ava} alt="" />
                <span className={styles.name}>{props.name}</span>
                <span className={styles.surname}>{props.surname}</span>
            </NavLink >
        </div>
    )
}
export default DialogItem
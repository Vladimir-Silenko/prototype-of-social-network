import styles from './person.module.css'
const Person = (props) => {
    return (
        <div className={styles.person}>
            <img src={props.photo} alt="" className={styles.photo} />
            <span className={styles.name}>{props.name}</span>
        </div>
    )
}
export default Person
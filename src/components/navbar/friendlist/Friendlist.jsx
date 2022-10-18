import styles from './Friendlist.module.css'
import Person from './person/person'
const Friendlist = (props) => {

    let friendlist = props.friendsData.map(item => <Person name={item.name} key={item.id} photo={item.ava} />)
    return <div className={styles.friendlist}>
        <h3 className={styles.friendlist__header}>Friends</h3>
        {friendlist}
    </div>
}
export default Friendlist;
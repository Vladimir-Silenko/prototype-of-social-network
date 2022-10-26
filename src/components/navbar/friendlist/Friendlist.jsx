import styles from './Friendlist.module.css'
import Person from './person/person'
import { useSelector } from 'react-redux'
const Friendlist = (props) => {
    // debugger
    const myFriends = useSelector(state => state.navbar)
    let friendlist = myFriends.friends.map(item => <Person name={item.name} key={item.id} photo={item.ava} />)
    return <div className={styles.friendlist}>
        <h3 className={styles.friendlist__header}>Friends</h3>
        {friendlist}
    </div>
}
export default Friendlist;
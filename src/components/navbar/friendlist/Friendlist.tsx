import styles from './Friendlist.module.css'
import Person from './person/person'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../../redux/redux-store'
import { userIconType } from '../../../redux/navbar-reducer'
const Friendlist = () => {
    const myFriends: any = useSelector<AppStateType>(state => state.navbar)
    let friendlist = myFriends.friends.map((item: userIconType) => <Person name={item.name} key={item.id} photo={item.ava} />)
    return <div className={styles.friendlist}>
        <h3 className={styles.friendlist__header}>Friends</h3>
        {friendlist}
    </div>
}
export default Friendlist;
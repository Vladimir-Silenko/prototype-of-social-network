import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import { authReducerAC, } from '../../redux/auth-reducer'
import { AuthData } from '../../redux/auth-reducer';
// import { toggleIsFetchingAC } from '../../redux/users-reducer';
import Header from './header';
import styles from './header.module.css'
const HeaderContainer = (props) => {
    let st = useSelector(state => state.auth)
    let dispatch = useDispatch()
    return <div className={styles.header}>
        <Header />
    </div>
}
export default HeaderContainer;
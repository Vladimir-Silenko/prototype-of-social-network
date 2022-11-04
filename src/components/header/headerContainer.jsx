import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { authReducerAC, } from '../../redux/auth-reducer'
// import { toggleIsFetchingAC } from '../../redux/users-reducer';
import Header from './header';
import styles from './header.module.css'
const HeaderContainer = (props) => {
    let st = useSelector(state => state.auth)
    let dispatch = useDispatch()
    const getData = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
            .then(response => {
                let { id, email, login } = response.data.data
                dispatch(authReducerAC(id, email, login))
                console.log(response.data.data)
            })
    }

    return <div className={styles.header}>
        <Header getData={getData} />
    </div>
}
export default HeaderContainer;
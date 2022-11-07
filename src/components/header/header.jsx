import { AuthData } from '../../redux/auth-reducer';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css'
const Header = (props) => {
    // debugger
    const dispatch = useDispatch()
    return <header className={styles.header}>
        <h1 className={styles.MySocial}>MySocial</h1>
        <div>
            <NavLink onClick={() => dispatch(AuthData())} className={styles.login} to="./login">LOG IN</NavLink>
        </div>
    </header>
}
export default Header;
import { NavLink } from 'react-router-dom';
import styles from './header.module.css'
const Header = (props) => {
    // debugger
    return <header className={styles.header}>
        <h1 className={styles.MySocial}>MySocial</h1>
        <div>
            <NavLink onClick={() => props.getData()} className={styles.login} to="./login">LOG IN</NavLink>
        </div>
    </header>
}
export default Header;
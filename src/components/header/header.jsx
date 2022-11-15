import { AuthData } from '../../redux/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
const Header = (props) => {
    // debugger

    const auth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    useEffect(() => dispatch(AuthData()), [null])
    return <header className={styles.header}>
        <h1 className={styles.MySocial}>MySocial</h1>
        <div>
            <NavLink className={styles.login} to="./login">LOG IN</NavLink>
        </div>
    </header>
}
export default Header;
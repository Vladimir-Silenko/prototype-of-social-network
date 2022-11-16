import { AuthData, Logout } from '../../redux/auth-reducer';
import { useDispatch, useSelector, } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css'
import { useEffect, useState } from 'react';
import { Btn } from '../reusable/button';
import { setCurrentPageAC } from '../../redux/users-reducer';
const Header = (props) => {
    // debugger
    const auth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(AuthData())
        console.log(auth)
    }, [])
    return <header className={styles.header}>
        <h1 className={styles.MySocial}>MySocial</h1>
        <div>
            {
                !auth ? <NavLink className={styles.login} to="./login">login</NavLink>
                    : <Btn onClick={() => {
                        dispatch(Logout())
                    }} >logout</Btn>
            }

        </div>
    </header>
}
export default Header;
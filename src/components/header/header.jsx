import { Logout } from '../../redux/auth-reducer';
import { useDispatch, useSelector, } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css'
import { Btn } from '../reusable/button';
import { useEffect } from 'react';
import { useState } from 'react';
const Header = (props) => {
    // debugger
    const auth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    return <div className={styles.header}>

        <header className={styles.header}>
            <h1 className={styles.MySocial}>MySocial</h1>
            <div>
                {
                    !auth ? <NavLink className={styles.login} to="./login"></NavLink>
                        : <Btn style={{ margin: '13px 0 0 930px' }} onClick={() => {
                            dispatch(Logout())
                        }} >logout</Btn>
                }

            </div>
        </header>
    </div>
}
export default Header;
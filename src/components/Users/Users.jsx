import styles from './Users.module.css'
import { useEffect, } from 'react'
import { NavLink } from 'react-router-dom'
import { GetUsersThunkCreator, OnpageChanged, Follow, UnFollow } from '../../redux/users-reducer'
import { useDispatch, useSelector } from 'react-redux'
import loader from '../../photo/loader.gif'
import { Navigate } from 'react-router-dom'
const Users = (props) => {
    // debugger
    const st = useSelector(state => state.users)
    const auth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const classNames = require('classnames')
    const pagesCount = Math.ceil(st.totalCount / st.pageSize) //вычисляем количество страниц, и округляем
    const userPhotoUrl = 'https://thumbs.dreamstime.com/b/%D0%BE%D1%87%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9-%D0%BC-%D0%B0-%D0%B5%D0%BD%D0%B5%D1%86-39968623.jpg'
    useEffect(() => {
        dispatch(GetUsersThunkCreator(st.currentPage, st.pageSize))
    }, [null]) //рендеринг юзеров

    let pages = []
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }
    console.log(auth)
    // if (auth === false) return <Navigate to='../login' />
    return <div>
        {st.isFetching ? <img className={styles.loader} src={loader} /> : null}
        <div className={styles.page_wrap}> <button className={styles.pageSwitch__btn}>{'<<'}</button> <div className={styles.page}> {pages.map(item => {

            return <span
                onClick={() => dispatch(OnpageChanged(item))}
                className={st.currentPage === item ? classNames(styles.pageItem, styles.selectedItem)
                    : classNames(styles.pageItem)}>
                {item}
            </span>
        })}

        </div><button className={styles.pageSwitch__btn}>{'>>'}</button> </div>

        {st.users.map(u => <div className={styles.user}>
            <span>

                <NavLink to={`../profile/${u.id}`}>
                    <div className={styles.photo_container}><img
                        className={styles.photo}
                        src={u.photos.small != null ? u.photos.small : userPhotoUrl} />
                    </div>
                </NavLink>

                <div className={styles.follow_btn}>
                    {u.followed ?
                        <button disabled={st.toggleFollowing.some(id => id === u.id)} onClick={() => { dispatch(UnFollow(u.id)) }}>unfollow</button>
                        : <button disabled={st.toggleFollowing.some(id => id === u.id)} onClick={() => { dispatch(Follow(u.id)) }}>follow</button>}

                </div>

            </span>

            <span className={styles.personal_data}>
                <div className={styles.name}>{u.name}</div>
                <div className={styles.status}>{u.status}</div>
            </span>

            <span className={styles.location}>{"u.location.city"}, {"u.location.country"}</span>

        </div>)}
    </div>
}
export { Users, }
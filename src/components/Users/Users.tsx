import styles from './Users.module.css'
import React from 'react'
import { useEffect, } from 'react'
import { NavLink } from 'react-router-dom'
import { GetUsersThunkCreator, Follow, UnFollow, UsersInitialstateType, UserType } from '../../redux/users-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { useRedirect } from '../../hooks/useRedirect'
import { useAuth } from '../../redux/selectors'
import { Paginator } from './Paginator'
import loader from '../../photo/loader.gif'
const Users: React.FC = () => {
    const st: UsersInitialstateType = useSelector((state: any) => state.users)
    const dispatch: any = useDispatch()
    const pagesCount: number = Math.ceil(st.totalCount / st.pageSize) //вычисляем количество страниц, и округляем
    const userPhotoUrl = 'https://thumbs.dreamstime.com/b/%D0%BE%D1%87%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9-%D0%BC-%D0%B0-%D0%B5%D0%BD%D0%B5%D1%86-39968623.jpg'
    const redirect = useRedirect()
    useEffect(() => {
        dispatch(GetUsersThunkCreator(st.currentPage, st.pageSize))
    }, [null]) //рендеринг юзеров

    let pages = []
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }

    if (!useAuth()) return redirect

    return <div>

        <Paginator pagesCount={pagesCount} dispatch={dispatch} st={st} />

        {st.isFetching ? <img className={styles.loader} src={loader} /> : null}

        {st.users.map((u: UserType) => <div key={u.id} className={styles.user}>
            <span>
                <NavLink to={`../profile/${u.id}`}>
                    <div className={styles.photo_container}><img
                        className={styles.photo}
                        src={u.photos.small != null ? u.photos.small : userPhotoUrl} />
                    </div>
                </NavLink>

                <div className={styles.follow_btn}>
                    {u.followed ?
                        <button disabled={st.toggleFollowing.some((id: number) => id === u.id)} onClick={() => { dispatch(UnFollow(u.id)) }}>unfollow</button>
                        : <button disabled={st.toggleFollowing.some((id: number) => id === u.id)} onClick={() => { dispatch(Follow(u.id)) }}>follow</button>}

                </div>

            </span>

            <span className={styles.personal_data}>
                <div className={styles.name}>{u.name}</div>
                <div className={styles.status}>{u.status}</div>
            </span>

            <span className={styles.location}>{u.id}, { }</span>

        </div>)}
    </div>
}
export { Users }
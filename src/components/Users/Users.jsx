import styles from './Users.module.css'
import axios from 'axios'
import { useEffect, } from 'react'
import { NavLink } from 'react-router-dom'
const Users = (props) => {
    // debugger
    const classNames = require('classnames')
    const pagesCount = Math.ceil(props.st.totalCount / props.st.pageSize) //вычисляем количество страниц, и округляем
    useEffect(() => { props.GetUsers(props.st, props.SetUsers, props.st.currentPage, props.st.pageSize) }, [null]) //рендеринг юзеров
    let pages = []
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }


    return <div>

        <div className={styles.page}> {pages.map(item => {

            return <span
                onClick={() => props.OnpageChanged(props.SetCurrent, props.SetUsers, item)}
                className={props.st.currentPage === item ? classNames(styles.pageItem, styles.selectedItem)
                    : classNames(styles.pageItem)}>
                {item}
            </span>
        })}
        </div>

        {props.st.users.map(u => <div className={styles.user}>
            <span>

                <NavLink to={`../profile/${u.id}`}>
                    <div className={styles.photo_container}><img
                        className={styles.photo}
                        src={u.photos.small != null ? u.photos.small : props.userPhotoUrl} />
                    </div>
                </NavLink>

                <div className={styles.follow_btn}>
                    {u.followed ? <button onClick={() => {

                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {
                                withCredentials: true,
                                headers: { "API-KEY": '9a9f90f9-3ad2-4322-91d2-0bb20b5233fa' }
                            }
                        ).then(response => {

                            if (response.data.resultCode == 0) {
                                props.UnFollow(u.id)
                            }
                        })
                    }}>unfollow</button>


                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {},
                                {
                                    withCredentials: true,
                                    headers: { "API-KEY": '9a9f90f9-3ad2-4322-91d2-0bb20b5233fa' }
                                }
                            ).then(response => {
                                if (response.data.resultCode == 0) {
                                    props.Follow(u.id)

                                }
                            })
                        }}>follow</button>}

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
export { Users }
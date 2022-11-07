import styles from './Users.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { followAC, unFollowAC, toggleIsFollowingAC, } from '../../redux/users-reducer'
import { Users } from './Users'
import loader from '../../photo/loader.gif'
import { FollowUser, UnFollowUser } from '../../api/useApi'
const UsersContainer = () => {
    const st = useSelector(state => state.users)
    const dispatch = useDispatch()
    const userPhotoUrl = 'https://thumbs.dreamstime.com/b/%D0%BE%D1%87%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9-%D0%BC-%D0%B0-%D0%B5%D0%BD%D0%B5%D1%86-39968623.jpg'
    const toggleIsFollowing = (isFetching, userId) => dispatch(toggleIsFollowingAC(isFetching, userId))

    const Follow = (userId) => {
        toggleIsFollowing(true, userId)
        FollowUser(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(followAC(userId))
                toggleIsFollowing(false, userId)
            }
        })
    }

    const UnFollow = (userId) => {
        toggleIsFollowing(true, userId)
        UnFollowUser(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unFollowAC(userId))
                toggleIsFollowing(false, userId)
            }
        })

    }
    return (<>
        {st.isFetching ? <img className={styles.loader} src={loader} /> : null}
        <Users
            toggleIsFollowing={toggleIsFollowing}
            Follow={Follow}
            UnFollow={UnFollow}
            st={st}
            userPhotoUrl={userPhotoUrl}
        />
    </>
    )

}

export { UsersContainer }

import styles from './Users.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
    followAC, unFollowAC, setUsersAC,
    setCurrentPageAC, setTotalCountAC, toggleIsFetchingAC
} from '../../redux/users-reducer'
import { Users } from './Users'
import loader from '../../photo/loader.gif'
import { ChangeUserPage, FollowUser, GetAllUsers, UnFollowUser } from '../../api/useApi'
const UsersContainer = () => {
    const st = useSelector(state => state.users)
    const dispatch = useDispatch()
    const userPhotoUrl = 'https://thumbs.dreamstime.com/b/%D0%BE%D1%87%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9-%D0%BC-%D0%B0-%D0%B5%D0%BD%D0%B5%D1%86-39968623.jpg'
    const SetUsers = (users) => dispatch(setUsersAC(users))
    const SetCurrent = (currentPage) => dispatch(setCurrentPageAC(currentPage))
    const toggleIsFetching = (isFetching) => dispatch(toggleIsFetchingAC(isFetching))

    const Follow = (userId) => {
        FollowUser(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(followAC(userId))
            }
        })
    }

    const UnFollow = (userId) => {
        UnFollowUser(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unFollowAC(userId))
            }
        })

    }

    const GetUsers = (func, current, pageSize) => {
        toggleIsFetching(true);
        GetAllUsers(current, pageSize).then(data => {
            toggleIsFetching(false);
            func(data.items)
            dispatch(setTotalCountAC(data.totalCount))

        })
    }
    let OnpageChanged = (current, users, pageNumber,) => {
        current(pageNumber)
        toggleIsFetching(true);
        ChangeUserPage(pageNumber, st.pagesize).then(data => {
            toggleIsFetching(false);
            users(data.items);
        })
    }
    return (<>
        {st.isFetching ? <img className={styles.loader} src={loader} /> : null}
        <Users OnpageChanged={OnpageChanged}
            toggleIsFetching={toggleIsFetching}
            GetUsers={GetUsers}
            Follow={Follow}
            UnFollow={UnFollow}
            SetUsers={SetUsers}
            SetCurrent={SetCurrent}
            st={st}
            userPhotoUrl={userPhotoUrl}
        />
    </>
    )

}

export { UsersContainer }

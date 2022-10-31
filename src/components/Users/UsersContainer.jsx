import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from '../../redux/users-reducer'
import { Users } from "./Users"

const UsersContainer = () => {
    const userPhotoUrl = 'https://thumbs.dreamstime.com/b/%D0%BE%D1%87%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9-%D0%BC-%D0%B0-%D0%B5%D0%BD%D0%B5%D1%86-39968623.jpg'
    const Follow = (userId) => dispatch(followAC(userId))
    const UnFollow = (userId) => dispatch(unFollowAC(userId))
    const SetUsers = (users) => dispatch(setUsersAC(users))
    const SetCurrent = (currentPage) => dispatch(setCurrentPageAC(currentPage))
    const st = useSelector(state => state.users)
    const dispatch = useDispatch()
    const GetUsers = (state, func, current, pageSize) => {
        if (state.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${current}&count=${pageSize}`).then(response => {
                func(response.data.items)
                dispatch(setTotalCountAC(response.data.totalCount))
                console.log(response.data.totalCount)
            })
        };
    }

    let OnpageChanged = (current, users, pageNumber) => {
        current(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${st.pageSize}`).then(response => {
            users(response.data.items);
        })
    }
    return (
        <Users OnpageChanged={OnpageChanged}
            GetUsers={GetUsers}
            Follow={Follow}
            UnFollow={UnFollow}
            SetUsers={SetUsers}
            SetCurrent={SetCurrent}
            st={st}
            userPhotoUrl={userPhotoUrl}
        />
    )

}

export { UsersContainer }

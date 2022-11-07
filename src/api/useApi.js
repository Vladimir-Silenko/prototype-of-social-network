import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    "API-KEY": '9a9f90f9-3ad2-4322-91d2-0bb20b5233fa'
})
const ChangeUserPage = (pageNumber, pageSize) => {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response => response.data)
}

const FollowUser = (userId) => {
    return instance.post(`follow/${userId}`).then(response => response.data)
}

const UnFollowUser = (userId) => {
    return instance.delete(`follow/${userId}`).then(response => response.data)
}

const GetAllUsers = (current, pageSize) => {
    return instance.get(`users?page=${current}&count=${pageSize}`).then(response => response.data)
}
const AuthMe = () => {
    return (instance.get('auth/me')).then(response => response.data)
}

export { ChangeUserPage, FollowUser, UnFollowUser, GetAllUsers, AuthMe }
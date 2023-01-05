import axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    "API-KEY": '9a9f90f9-3ad2-4322-91d2-0bb20b5233fa'
})
const UserApi = {
    ChangeUserPage: (pageNumber, pageSize) => {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    },

    FollowUser: (userId) => {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    UnFollowUser: (userId) => {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },

    GetAllUsers: (current, pageSize) => {
        return instance.get(`users?page=${current}&count=${pageSize}`).then(response => response.data)
    },
}
const profileApi = {
    GetProfile(params) {
        return instance.get(`profile/${params.userId}`).then(response => response.data)
    },
    getStatus(params) {
        return instance.get(`profile/status/${params.userId}`).then(response => response)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status }).then(response => response)
    },
    savePhoto(photo) {
        let formData = new FormData()
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {
            'Content-Type': 'multipart/form-data'
        }).then(response => response)
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile).then(response => response)
    },
}

const authApi = {
    AuthMe() {
        return instance.get('auth/me').then(response => response)
    },
    LoginMe(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    LogoutMe() {
        return instance.delete('auth/login')
    },

}

const securityApi = {
    GetCaptcha() {
        return instance.get('security/get-captcha-url').then(response => response)
    },
}



export { profileApi, UserApi, authApi, securityApi }
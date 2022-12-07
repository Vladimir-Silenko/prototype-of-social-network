import { useSelector } from "react-redux"

export const useAuth = () => {
    const auth = useSelector(state => state.auth.isAuth)
    return auth
}
export const MyStatus = () => {
    return useSelector(state => state.profile.status)

}
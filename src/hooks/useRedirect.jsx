
import { Navigate } from "react-router-dom"

export const useRedirect = (auth) => {
    return <Navigate to="../login" />
}
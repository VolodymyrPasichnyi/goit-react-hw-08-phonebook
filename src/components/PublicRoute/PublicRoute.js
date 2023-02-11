import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router"
import { selectToken } from "redux/auth/authSelector"


export const PublicRoute = ({ children }) => {
    const { state } = useLocation()
    const isAuth = useSelector(selectToken)
    if(isAuth) return <Navigate to={state ? state : '/'}/>
    return children
}
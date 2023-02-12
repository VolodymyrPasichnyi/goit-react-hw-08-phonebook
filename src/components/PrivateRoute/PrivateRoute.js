import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectToken } from "redux/auth/authSelector"


export const PrivateRoute = ({ children }) => {
    const isAuth = useSelector(selectToken)
    if(!isAuth) return <Navigate to={'/login'}/>
    return children
}
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectToken } from "redux/auth/authSelector"



export const PrivateRoute = ({ children }) => {
    const isRegister = useSelector(selectToken)
    return (
        !isRegister ? <Navigate to={'/'}/> : children
    )
}
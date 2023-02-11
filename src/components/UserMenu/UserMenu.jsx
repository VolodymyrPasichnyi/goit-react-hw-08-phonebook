import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/authOperations"
import { selectUserName } from "redux/auth/authSelector"

export const UserMenu = () => {
    const dispatch = useDispatch()
    const name = useSelector(selectUserName)

    return(
        <div>
            <p>Welcome: {name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
        </div>
    )
}
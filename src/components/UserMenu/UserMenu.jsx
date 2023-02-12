import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/authOperations"
import { selectUserName } from "redux/auth/authSelector"
import css from '../UserMenu/UserMenu.module.css'


export const UserMenu = () => {
    const dispatch = useDispatch()
    const name = useSelector(selectUserName)

    return(
        <div className={css.div}>
            <p className={css.user}>User: {name}</p>
            <button type="button" className={css.btn} onClick={() => dispatch(logOut())}>Logout</button>
        </div>
    )
}
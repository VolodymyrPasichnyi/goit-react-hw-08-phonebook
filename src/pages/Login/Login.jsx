import { useState } from "react"
import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/authOperations"
import css from '../Login/Login.module.css'


const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleChange = ({target}) => {
        const { name, value } = target
        if(name === 'email') {
            setEmail(value)
        } else {
            setPassword(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(logIn({ email, password }))
        setEmail('')
        setPassword('')
    }

    return (
    <div>
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>Email</label>
            <input 
                type="email"
                name="email"
                className={css.label}
                value={email}
                onChange={handleChange}
            />
            <label className={css.label}>Password</label>
            <input
                type="password"
                name="password"
                className={css.label}
                value={password}
                onChange={handleChange}
            />
            <button type="submit" className={css.formBtn} >Log In</button>
        </form>
    </div>
    )
}

export default Login
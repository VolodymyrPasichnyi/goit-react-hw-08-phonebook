import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "redux/auth/authOperations"
import css from '../Register/Register.module.css'


const Register = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = ({target}) => {
        const { name, value } = target
        if(name === 'email') {
            setEmail(value)
        } else if (name === 'name') {
            setName(value)
        } else {
            setPassword(value)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register({ name, email, password }))
        setName('')
        setEmail('')
        setPassword('')
    }
  
    return (
       <div> 
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label} >Name</label>
                <input 
                    type="text"
                    name="name"
                    className={css.label}
                    value={name}
                    onChange={handleChange}
                />
                <label className={css.label}>Email</label>
                <input
                    type="text"
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
                <button type="submit" className={css.formBtn}>Sign up</button>
            </form>
    </div>
    )
}

export default Register
import { useState } from "react"
import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/authOperations"


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
        <form onSubmit={handleSubmit}>
            <label >Email</label>
            <input 
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default Login
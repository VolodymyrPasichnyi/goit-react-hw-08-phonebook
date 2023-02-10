import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "redux/auth/authOperations"



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
            <form onSubmit={handleSubmit}>
                <label >Name</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type="text"
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

export default Register
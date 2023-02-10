import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "redux/auth/authOperations"



const Register = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


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
                />
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                />
                <label>Password</label>
                <input
                    type="text"
                    name="password"
                />
                <button type="submit">Submit</button>
            </form>
    </div>
    )
}

export default Register
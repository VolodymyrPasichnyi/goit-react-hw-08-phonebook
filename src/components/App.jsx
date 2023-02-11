import { Route, Routes } from "react-router"
import Home from "pages/Home/Home"
import Register from "pages/Register/Register"
import Login from "pages/Login/Login"
import Contacts from "pages/Contacts/Contacts"
import { Navigation } from "./Navigation/Navigation"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchCurrentUser } from "redux/auth/authOperations"


export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])


  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/contacts' element={<Contacts />}/>
        </Route>

      </Routes>
    </div>
  )
}




import { Route, Routes } from "react-router"
import { Navigation } from "./Navigation/Navigation"
import { useDispatch, useSelector } from "react-redux"
import { lazy, useEffect } from "react"
import { fetchCurrentUser } from "redux/auth/authOperations"
import { PrivateRoute } from "./PrivateRoute/PrivateRoute"
import { selectToken } from "redux/auth/authSelector"

const Home = lazy(() => import('../pages/Home/Home'))
const Register = lazy(() => import('../pages/Register/Register'))
const Login = lazy(() => import('../pages/Login/Login'))
const Contacts = lazy(() => import('../pages/Contacts/Contacts'))

export const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectToken)

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
          <Route path='/contacts' element={<PrivateRoute><Contacts /></PrivateRoute>}/>
          <Route path='*' element={isAuth ? <}/>
        </Route>
      </Routes>
    </div>
  )
}


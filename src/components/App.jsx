import { Route, Routes } from "react-router"
import { Navigation } from "./Navigation/Navigation"
import { useDispatch } from "react-redux"
import { lazy, useEffect } from "react"
import { fetchCurrentUser } from "redux/auth/authOperations"

const Home = lazy(() => import('../pages/Home/Home'))
const Register = lazy(() => import('../pages/Home/Home'))
const Home = lazy(() => import('../pages/Home/Home'))
const Home = lazy(() => import('../pages/Home/Home'))

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




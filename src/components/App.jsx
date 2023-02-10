import { Route, Routes } from "react-router"
import Home from "pages/Home/Home"
import Register from "pages/Register/Register"
import Login from "pages/Login/Login"
import Contacts from "pages/Contacts/Contacts"


export const App = () => {
  // const isLoading = useSelector(selectIsLoading)
  // const error = useSelector(selectError)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchContacts())
  // }, [dispatch])


  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/contacts' element={<Contacts />}/>
      </Routes>
    </div>
  )
}




import { Loader } from "components/Loader/Loader"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux/auth/authSelector"
import { StyledLink } from "./Navigation.styled"


export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
    <>
      <header>
        <nav >
          <StyledLink to='/'>Home</StyledLink >  
          <StyledLink to='/contacts'>Contacts</StyledLink >
          {isLoggedIn ? 
            <div>
              <UserMenu/>
            </div> 
            : <div>
              <StyledLink to='/register' >Signup</StyledLink > 
              <StyledLink to='/login'>Login</StyledLink >
            </div>
            }
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet/>
      </Suspense>
    </>
    )
}

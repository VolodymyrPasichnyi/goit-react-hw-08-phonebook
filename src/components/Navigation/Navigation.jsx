import { Loader } from "components/Loader/Loader"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import css from '../Navigation/Navigation.module.css'
import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux/auth/authSelector"
import { StyledLink } from "./Navigation.styled"


export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
    <>
      <header className={css.header}>
        <nav >
          <StyledLink to='/'>Home</StyledLink >  
          {isLoggedIn ? 
            <div>
              <StyledLink to='/contacts'>Contacts</StyledLink >
              <UserMenu/>
            </div> 
            : <div>
              <StyledLink to='/register' >Sign up</StyledLink > 
              <StyledLink to='/login'>Log in</StyledLink >
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

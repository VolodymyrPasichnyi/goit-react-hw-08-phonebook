// import { Loader } from "components/Loader/Loader"
// import { Suspense } from "react"
// import { Outlet } from "react-router-dom"
import { StyledLink } from "./Layout.styled"


export const Navigation = () => {
    return (
    <>
      <header>
        <nav >
            <StyledLink to='/' >Home</StyledLink >  
            <StyledLink to='/contacts'>Contacts</StyledLink >
        </nav>
      </header>
      {/* <Suspense fallback={<Loader />}>
        <Outlet/>
      </Suspense> */}
    </>
    )
}

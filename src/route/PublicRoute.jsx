import { Navigate, useLocation } from "react-router"
import { useAuth } from "../hooks/useAuth"
import Loading from "../components/Loading"

const PublicRoute = ({children}) => {
    const {currentUser, loading} = useAuth()
    const location = useLocation()

    if(loading) return <Loading />

    console.log(currentUser?.emailVerified);
    
    // If user exists and email is verified, redirect to home
    if (currentUser && currentUser.emailVerified) {
        return <Navigate to={"/"} state={{from: location}} replace />
    }
    
    // If user exists but email is NOT verified, redirect to login
    if (currentUser && currentUser.emailVerified === false) {
        return <Navigate to={"/auth/login"} state={{from: location}} replace />
    }
  
    // If no user, allow access to public route
    return children
}

export default PublicRoute
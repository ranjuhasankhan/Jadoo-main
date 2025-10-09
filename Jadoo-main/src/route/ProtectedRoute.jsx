import { Navigate, useLocation } from "react-router"
import { useAuth } from "../hooks/useAuth"
import Loading from "../components/Loading"

const ProtectedRoute = ({children}) => {
    const {currentUser, loading} = useAuth()
    const location = useLocation()

    if(loading) return <Loading />

    if (
        currentUser?.providerData[0]?.providerId === "github.com" || 
        currentUser?.providerData[0]?.providerId === "facebook.com" ||
        currentUser?.isAnonymous

    ) {
        return children
    }
  
    if (!currentUser) {
        return <Navigate to={"/auth/login"} state={{from: location}} replace />
    }

        // If user exists but email is NOT verified, redirect to login
    if (currentUser && currentUser.emailVerified === false) {
        return <Navigate to={"/auth/login"} state={{from: location}} replace />
    }

    return children
}

export default ProtectedRoute
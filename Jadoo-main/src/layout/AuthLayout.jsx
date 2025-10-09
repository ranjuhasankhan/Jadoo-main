import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const AuthLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default AuthLayout

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"

const DefaultLayout = () => {
    return (
    <div>
        <div className="flex flex-col">
            <Navbar />
            <Outlet />
        </div>
    </div>
    )
}

export default DefaultLayout
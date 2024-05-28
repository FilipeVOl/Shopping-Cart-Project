import Navbar from "../components/Navbar"
import Home from "../pages/Home";

export default function HomeLayout() {
    return (
    <div>
        <div className="flex flex-col">
            <Navbar />
            <Home />
        </div>
    </div>
    )
}
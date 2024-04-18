import Navbar from "../components/Navbar"
import {Link} from "react-router-dom"
const Home = () => {
    return(
        <div>
            <Navbar/>
            <Link to="/login">Login</Link>
            <h1>Home</h1>
        </div>
    )
}

export default Home
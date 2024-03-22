import Carousal from "./Carousal"
import Leaderboards from "./Leaderboards"
import About from "./About"
import Footer from "./footer"
import Navbar from "../../Navbar/navbar"
import { useAuth } from "../../../src/AuthProvider"

const LandingPage = () => {

    const user = useAuth();
    console.log(user)
    return(
        <>
            <Navbar/>
            <Carousal/>
            <About/>
            <Leaderboards/>
            <Footer/>
        </>
    )
}

export default LandingPage
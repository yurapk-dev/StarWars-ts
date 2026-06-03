import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import {navItems} from "../utils/constants.ts";
import {Route, Routes} from "react-router";

const Main = () => {

    return (
        <Routes>
            {[`/`, `/${navItems[0]}`].map(p => <Route key={p} path={p} element={<Home/>}/>)}
            <Route path={`/${navItems[1]}`} element={<AboutMe/>}/>
            <Route path={`/${navItems[2]}`} element={<StarWars/>}/>
            <Route path={`/${navItems[3]}`} element={<Contact/>}/>
        </Routes>
    )

}

export default Main;
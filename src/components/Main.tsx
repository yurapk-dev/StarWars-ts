import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import {navItems} from "../utils/constants.ts";
import {Route, Routes} from "react-router";
import ErrorPage from "./ErrorPage.tsx";


const Main = () => {

    return (
        <Routes>
            {[`/`, `/:heroId`, `/${navItems[0]}`, `/${navItems[0]}/:heroId`].map(p => <Route key={p} path={p} element={<Home/>}/>)}
            {[`/${navItems[1]}`,`/${navItems[1]}/:heroId`].map(p=><Route key ={p} path ={p} element ={<AboutMe/>}/>)}
            <Route path={`/${navItems[1]}`} element={<AboutMe/>}/>
            <Route path={`/${navItems[2]}`} element={<StarWars/>}/>
            <Route path={`/${navItems[3]}`} element={<Contact/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )

}

export default Main;
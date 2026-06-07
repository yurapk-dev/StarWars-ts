import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {

    return (
        <NavLink to={`/${itemTitle.toLowerCase()}`}>
            <Button>{itemTitle}</Button>
        </NavLink>
    )
}

export default NavItem;
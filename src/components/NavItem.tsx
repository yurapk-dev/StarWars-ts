import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import Button from "./ui/Button.tsx";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {changePage} = useContext(SWContext);

    return <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>
}

export default NavItem;
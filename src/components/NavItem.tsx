import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {changePage} = useContext(SWContext)

    return (
        <div onClick={() => changePage(itemTitle)}
             className="bg-danger rounded-md px-3
             cursor-pointer text-center hover:bg-red-500 hover:text-white"
        >{itemTitle}</div>
    )
}

export default NavItem;
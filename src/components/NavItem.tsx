import Button from "./ui/Button.tsx";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {

    return (
        <a href={`/${itemTitle.toLowerCase()}`}>
            <Button>{itemTitle}</Button>
        </a>
    )
}

export default NavItem;
interface ButtonProps {
    children: string;
    className?: string;
    callback?: () => void;
}

const Button = ({children, className, callback}: ButtonProps) => {
    return (
        <div
            onClick={callback ?? (() => {})}
            className={`bg-danger rounded-md px-3
             cursor-pointer text-center hover:bg-red-500 hover:text-white ${className ?? ''}`}
        >{children}</div>
    );
};

export default Button;
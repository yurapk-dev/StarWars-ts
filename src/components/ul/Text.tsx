const Text = ({children}: {children:string}) => {
    return (
        <p className="text-justify text-3xl leading-normal tracking-widest">
            {children}
        </p>
    );
};

export default Text;
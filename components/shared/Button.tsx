interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    primary?: boolean;
    navbar?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, primary, navbar, ...props }) => {
    return (
        <button 
            {...props}
            className={`
                    relative z-20 text-lg font-semibold rounded transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_35px_rgba(249,115,22,0.3)] active:scale-95 cursor-pointer select-none
                    ${primary ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700" : ""}
                    ${navbar ? "px-[15px] py-[5px] hidden lg:block" : "px-6 py-2"}
                `}
        >
            {children}
        </button>
    );
};

export default Button;

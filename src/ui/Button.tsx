import {PropsWithChildren} from "react";
import {WithClassName} from "../types/types.ts";

interface ButtonProps extends PropsWithChildren, WithClassName{
    isDisabled?: boolean,
    onClick: () => void
}

const Button = ({children, className, isDisabled=false, onClick}: ButtonProps) => {
    return (
        <button
            disabled={isDisabled}
            onClick={onClick}
            className={`text-center w-full bg-theme-neutral-7 text-white py-[10px] rounded-[8px] ${className}`}
        >
            {children}
        </button>
    )
}


export default Button
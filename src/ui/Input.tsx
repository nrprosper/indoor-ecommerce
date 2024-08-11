import {WithClassName} from "../types/types.ts";

interface InputProps extends WithClassName{
    type?: string,
    label: string
}

const Input = ({type="text", label, className}: InputProps) => {
    return (
        <div className={`input-group w-full  border-b border-theme-neutral-3 ${className}`}>
            <input
                type={type}
                className={`w-full px-2 text-theme-neutral-6 border-0 outline-none h-10`}
                required
            />
            <label className=" text-theme-neutral-4 ">{label}</label>
        </div>
    )
}

export default Input;

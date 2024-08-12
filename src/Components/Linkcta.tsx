import {Link} from "react-router-dom";
import {PropsWithChildren} from "react";
import {FaArrowRightLong as ArrowRight} from "react-icons/fa6";

type variant = "blue"|"black"
interface LinkctaProps extends PropsWithChildren {
    to: string,
    variant?: variant
    className?: string
}

const variantStyles : Record<variant, string> = {
    blue: "text-theme-blue link-action-blue",
    black: "text-theme-neutral-7 link-action-black"
}


const Linkcta = ({children, className, variant="black", to}: LinkctaProps) => {
    return(
        <Link to={to}
              className={`link-action relative flex items-center gap-1 font-medium py-0.5 hover:gap-2 transition-all ${variantStyles[variant]} ${className}`}>
            <span>{children}</span>
            <ArrowRight size={18}/>
        </Link>
    )
}


export default Linkcta;
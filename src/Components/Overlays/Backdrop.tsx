import {PropsWithChildren} from "react";
import {motion} from "framer-motion";
import {WithClassName} from "../../types/types.ts";

interface BackdropProps extends PropsWithChildren, WithClassName{
    onClick?: () => void
}

const Backdrop = ({children, className, onClick}: BackdropProps) => {
    return (
        <motion.div
            onClick={onClick}
            className={`fixed z-10 left-0 top-0 w-full h-full bg-black/70 flex items-center ${className}`}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            {children}
        </motion.div>
    )
}


export default Backdrop;
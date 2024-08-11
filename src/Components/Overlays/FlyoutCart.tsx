import {createContext, PropsWithChildren, ReactNode, useContext, useEffect} from "react";
import {motion} from "framer-motion"
import Backdrop from "./Backdrop.tsx";
import {IoClose as Close} from "react-icons/io5";

interface FlyoutContext{
    handleClose: () => void
}

interface FlyoutProvider extends PropsWithChildren {
    handleClose: () => void
}

interface FlyoutCartProps extends PropsWithChildren {
    handleClose: () => void;
}

const FlyoutContext = createContext<FlyoutContext | undefined>(undefined)

const useFlyoutContext = () => {
    const context = useContext(FlyoutContext);
    if(!context) {
        throw new Error('useFloutContext must be used within a FlyoutCart Component');
    }
    return context;
}



const FlyoutProvider = ({children, handleClose}: FlyoutProvider) => {
    return(
        <FlyoutContext.Provider value={{ handleClose }}>
            {children}
        </FlyoutContext.Provider>
    )
}
const FlyoutCartTitle = ({children}: {children: ReactNode}) => {
    const {handleClose} = useFlyoutContext();
    return (
        <div className="flex items-center justify-between">
            <h3 className="font-medium text-[1.75rem]">{children}</h3>
            <span onClick={handleClose} className="cursor-pointer">
                <Close size={24} />
            </span>
        </div>
    )
}


const FlyoutCart = ({handleClose, children}: FlyoutCartProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleClose]);
    return(
        <Backdrop onClick={handleClose} className="justify-end">
            <FlyoutProvider handleClose={handleClose}>
                <motion.div
                    initial={{x: 500}}
                    animate={{x: 0}}
                    exit={{x: 500}}
                    className="h-full w-[413px] bg-white py-10 px-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </motion.div>
            </FlyoutProvider>
        </Backdrop>
    )
}

FlyoutCart.Title = FlyoutCartTitle;
export default FlyoutCart;
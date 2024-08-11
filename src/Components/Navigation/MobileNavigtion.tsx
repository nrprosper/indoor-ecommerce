import {createContext, PropsWithChildren, useEffect} from "react";
import Backdrop from "../Overlays/Backdrop.tsx";
import {motion} from "framer-motion";
import {IoClose as Close} from "react-icons/io5";
import {search} from "../../Constants/icons.ts";
import navigation, {NavLink} from "./Navigation.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import CartCount from "../CartCount.tsx";
import Button from "../../ui/Button.tsx";

type Link = {
    label: string,
    path: string
}

interface MobileNavigationProps {
    links: Link[],
    handleClose: () => void
}

interface NavigationContext {
    handleClose: () => void
}

interface NavigationProvider extends PropsWithChildren {
    handleClose: () => void
}


const NavigationContext = createContext<NavigationContext| undefined>(undefined);

const NavigationProvider = ({children, handleClose}: NavigationProvider) => {
    return (
        <NavigationContext.Provider value={{handleClose}}>
            {children}
        </NavigationContext.Provider>
    )
}

const MobileNavigation = ({links, handleClose}: MobileNavigationProps) => {
    const location = useLocation()
    const navigator = useNavigate();

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
        <Backdrop onClick={handleClose} className="justify-end md:hidden">
            <NavigationProvider handleClose={handleClose}>
                <motion.div
                    initial={{x: 500}}
                    animate={{x: 0}}
                    exit={{x: 500}}
                    className="h-full w-[413px] bg-white py-10 px-6 md:hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col flex-1 gap-4">
                        {/*Title*/}
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium text-[1.75rem]">3legant.</h3>
                            <span onClick={handleClose} className="cursor-pointer">
                                <Close size={24}/>
                            </span>
                        </div>

                        <div className="flex items-center gap-2 px-2 border border-theme-neutral-4 rounded-[6px] py-4">
                            <img src={`${search}`} alt={"search icon"}/>
                            <input type="text" className="border-0 outline-none w-full"/>
                        </div>

                        <div className="flex flex-col gap-4 divide-y divide-theme-neutral-3 flex-1">
                            {links.map((link, idx) => (
                                <NavLink
                                    key={idx}
                                    to={link.path}
                                    isActive={location.pathname === link.path}
                                    className="py-4 first:pt-0 last:pb-0"
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>

                        <div className="mt-auto divide-y divide-theme-neutral-3">
                            <div className="pb-4 flex items-center justify-between">
                                <h3 className="text-theme-neutral-4 font-medium">Cart</h3>
                                <CartCount count={10}/>
                            </div>
                            <div className="py-4 flex items-center justify-between">
                                <h3 className="text-theme-neutral-4 font-medium">Wishlist</h3>
                                <CartCount count={10}/>
                            </div>
                            <Button onClick={() => {
                                navigator("/login")
                            }}>Sign in</Button>
                        </div>
                    </div>
                </motion.div>
            </NavigationProvider>
        </Backdrop>
    )
}

export default MobileNavigation;
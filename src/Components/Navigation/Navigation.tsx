import {Link, useLocation} from "react-router-dom";
import {FaBars as Bars} from "react-icons/fa6";
import {PropsWithChildren, useState} from "react";
import Container from "../Container.tsx";
import {profile, search} from "../../Constants/icons.ts";
import CartCount from "../CartCount.tsx";
import MobileNavigation from "./MobileNavigtion.tsx";
import {AnimatePresence} from "framer-motion";
import {WithClassName} from "../../types/types.ts";

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact us" }
];

interface NavLinkProps extends PropsWithChildren, WithClassName{
    to: string,
    isActive: boolean
}

interface NavigationProps {
    openCart: () => void
}

export const NavLink = ({children, to, isActive, className}:NavLinkProps) => {
    return(
        <Link
            to={to}
            className={`text-[0.875rem] font-medium ${className} ${isActive? `text-theme-neutral-7`: `text-theme-neutral-4`}`}
        >{children}
        </Link>
    )
}

const Navigation = ({openCart}: NavigationProps) => {
    const location = useLocation();

    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const handleMobileNavClose = () => {
        setIsMobileOpen(false);
    }

    return (
        <div id="navigation">
            <Container>
                <div className="py-4 flex items-center justify-between">
                    <div className="flex items-center justify-center gap-1">
                        <button
                            onClick={() => setIsMobileOpen(true)}
                            className="visible md:hidden"
                            aria-label="Open mobile navigation"
                        >
                            <Bars size={24} />
                        </button>
                        <Link className="text-2xl font-medium" to={"/"}>3legant</Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-10">
                        {
                            navLinks.map((link, idx) => (
                                <NavLink
                                    key={idx}
                                    to={link.path}
                                    isActive={location.pathname === link.path}
                                >
                                    {link.label}
                                </NavLink>
                            ))
                        }
                    </nav>
                    <div className="actions flex items-center gap-4">
                        <button>
                            <img src={`${search}`} alt={"search icon"}/>
                        </button>
                        <Link to={"/login"}>
                            <img src={`${profile}`} alt={"profile icon"}/>
                        </Link>
                        <CartCount onClick={openCart} count={10} />
                    </div>
                </div>
            </Container>

            <AnimatePresence>
                {isMobileOpen &&
                    <MobileNavigation links={navLinks} handleClose={handleMobileNavClose} />
                }
            </AnimatePresence>

        </div>
    )
}

export default Navigation;
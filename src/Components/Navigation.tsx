import {Link, useLocation} from "react-router-dom";
import { FaBars as Bars } from "react-icons/fa6";
import {PropsWithChildren} from "react";
import Container from "./Container.tsx";
import {profile, search} from "../Constants/icons.ts";
import CartCount from "./CartCount.tsx";

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact us" }
];

interface NavLinkProps extends PropsWithChildren{
    to: string,
    isActive: boolean
}

interface NavigationProps {
    openCart: () => void
}

const NavLink = ({children, to, isActive}:NavLinkProps) => {
    return(
        <Link
            to={to}
            className={`text-[0.875rem] font-medium ${isActive? `text-theme-neutral-7`: `text-theme-neutral-4`}`}
        >{children}
        </Link>
    )
}

const Navigation = ({openCart}: NavigationProps) => {
    const location = useLocation();
    return (
        <div id="navigation">
            <Container>
                <div className="py-4 flex items-center justify-between">
                    <div className="flex items-center justify-center gap-1">
                        <button className="visible md:hidden">
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
                        <button>
                            <img src={`${profile}`} alt={"profile icon"}/>
                        </button>
                        <CartCount onClick={openCart} count={10} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navigation;
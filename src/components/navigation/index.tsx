'use client'

import Link from "next/link";
import {links} from "@/constants/data";
import {CircleUserRound, Menu, Search, ShoppingBag} from "@/constants/icons";
import Container from "@/components/container";
import {usePathname} from "next/navigation";
import CartSheet from "@/components/cart-sheet";
import MobileNav from "@/components/navigation/mobile-nav";


export default function Navigation() {

    const pathName = usePathname();

    return(
        <div className="py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-2">
                        <div className="visible md:hidden">
                            <MobileNav />
                        </div>
                        <Link className="text-2xl font-medium font-poppins" href="/">3legant.</Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-10">
                        {
                            links.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.path}
                                    className={`font-spaceGrotesk font-medium ${
                                        pathName === link.path ? 'text-th-neutral-700' : 'text-th-neutral-400'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))
                        }
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex">
                            <Search/>
                        </button>
                        <button className="hidden md:flex">
                            <CircleUserRound />
                        </button>
                        <CartSheet />
                    </div>
                </div>
            </Container>
        </div>
    )
}
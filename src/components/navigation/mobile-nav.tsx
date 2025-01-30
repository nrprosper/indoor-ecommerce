import {Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Close, Heart, Menu, ShoppingBag} from "@/constants/icons";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {links} from "@/constants/data";
import SearchBar, {SearchSkeleton} from "@/components/navigation/search-bar";
import {Suspense} from "react";

export default function MobileNav() {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu strokeWidth={"2.5px"}/>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col h-full">
                <SheetHeader className="flex flex-row items-center justify-between">
                    <SheetTitle>
                        <Link className="text-2xl font-medium font-poppins" href="/">3legant.</Link>
                    </SheetTitle>
                    <SheetClose className="text-th-neutral-400">
                        <Close />
                    </SheetClose>
                </SheetHeader>
                <div className="mt-6 flex-grow overflow-auto">
                    <Suspense fallback={<SearchSkeleton />}>
                        <SearchBar />
                    </Suspense>
                    <div className="mt-6 flex flex-col gap-10">
                        {
                            links.map((link, idx) => (
                                <Link key={idx} href={link.path}>{link.label}</Link>
                            ))
                        }
                    </div>
                </div>
                <div id="bottom" className="mt-auto pt-6">
                    <div className="flex items-center justify-between py-3">
                        <h3 className="text-th-neutral-700">Cart</h3>
                        <div className="flex items-center gap-1">
                            <ShoppingBag />
                            <span className="text-white text-[12px] px-2 py-1 bg-th-neutral-700 rounded-full">24</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <h3 className="text-th-neutral-700">Wishlist</h3>
                        <div className="flex items-center gap-1">
                            <Heart />
                            <span className="text-white text-[12px] px-2 py-1 bg-th-neutral-700 rounded-full">24</span>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col items-center">
                        <Button className="block w-full text-lg">Sign in</Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Close, ShoppingBag } from "@/constants/icons"
import CartItem from "@/components/cart-item"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CartSheet() {
    return (
        <Sheet>
            <SheetTrigger>
                <div className="flex items-center gap-1">
                    <ShoppingBag/>
                    <span className="text-white text-[12px] px-2 py-1 bg-th-neutral-700 rounded-full">24</span>
                </div>
            </SheetTrigger>
            <SheetContent className="flex flex-col h-full">
                <SheetHeader className="flex flex-row items-center justify-between">
                    <SheetTitle className="font-poppins text-[1.75rem]">Cart</SheetTitle>
                    <SheetClose className="text-th-neutral-400">
                        <Close />
                    </SheetClose>
                </SheetHeader>
                <div className="mt-6 flex-grow overflow-auto">
                    <div className="flex flex-col gap-10">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                </div>
                <div id="bottom" className="mt-auto pt-6">
                    <div className="flex items-center justify-between py-3">
                        <h3 className="text-th-neutral-700">Subtotal</h3>
                        <p className="font-semibold">$99.00</p>
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <h3 className="text-th-neutral-700 font-semibold">Total</h3>
                        <p className="text-th-neutral-700 font-semibold">$234.00</p>
                    </div>
                    <div className="mt-3 flex flex-col items-center">
                        <Button className="block w-full text-lg">Checkout</Button>
                        <Link href="" className="text-center mt-3 border-b-2 border-th-neutral-700 font-medium">
                            View cart
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}


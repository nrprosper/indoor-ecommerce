import Image from "next/image";
import RatingCount from "@/components/rating-count";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import React from "react";

export default function ProductCard() {
    return(
        <div className="group">
            <div className="relative w-full bg-[#F3F5F7] flex items-center justify-center mb-3">
                <Image
                    src={"/images/lamp.png"}
                    width={262}
                    height={349}
                    alt={"Lamp image"}
                    className="object-cover object-center"
                />
                <div className="opacity-0 absolute bottom-3 w-full px-3 transition-opacity duration-200 group-hover:opacity-100">
                    <Button className="block w-full">Add to cart</Button>
                </div>

                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Pill variant={"arrival"}>
                        New
                    </Pill>
                    <Pill variant={"discount"}>
                        50%
                    </Pill>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <RatingCount count={2.5} />
                <Link
                    href={"/shop/kasjnkasdjnk"}
                    className="font-semibold hover:underline transform duration-200"
                >Table Lamp</Link>
                <div className="flex items-center gap-3 text-sm">
                    <h5 className="font-semibold">$24.99</h5>
                    <h5 className="text-th-neutral-400 line-through">$400.00</h5>
                </div>
            </div>
        </div>
    )
}

interface PillProps {
    variant: "arrival" | "discount";
    children: React.ReactNode;
}

const pillVariants: Record<"arrival" | "discount", string> = {
    arrival: "bg-white text-th-neutral-700",
    discount: "bg-th-green text-white",
};

const Pill: React.FC<PillProps> = ({ variant, children }) => {
    return (
        <span className={`px-[14px] py-2 font-bold rounded-sm uppercase ${pillVariants[variant]}`}>
            {children}
        </span>
    )
}
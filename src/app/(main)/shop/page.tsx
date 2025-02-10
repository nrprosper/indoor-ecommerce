import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import {ChevronRight} from "@/constants/icons";
import Filters from "@/components/filters";
import ProductCard from "@/components/product-card";
import {Button} from "@/components/ui/button";

const layoutOptions = [
    { id: "grid-3", icon: "/icons/grid-3.svg", label: "Grid 3" },
    { id: "grid-2", icon: "/icons/grid-2.svg", label: "Grid 2" },
    { id: "row-2", icon: "/icons/row-2.svg", label: "Row 2" },
    { id: "col-2", icon: "/icons/col-2.svg", label: "Column 2" },
];

export default function ShopPage() {
    return(
        <div>
            <Container>
                <div className="relative h-[392px] w-full">
                    <Image
                        className="w-full"
                        src="/images/shop-banner.png"
                        alt={"Shop banner"}
                        fill
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-2 md:gap-6">
                        <div
                            className="flex items-center gap-2 text-sm"
                        >
                            <Link
                                href="/"
                                className="hover:font-medium text-th-neutral-400"
                            >Home</Link>
                            <ChevronRight  size={12} />
                            <Link
                                href="/shop"
                                className="font-medium"
                            >Shop</Link>

                        </div>
                        <h1 className="font-medium font-poppins text-4xl md:text-[3.375rem] capitalize">Shop page</h1>
                        <p className="text-base md:text-[1.25rem]">Let’s design the place you always imagined.</p>
                    </div>
                </div>

                <div className="my-[3.75rem]">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-10">
                        <Filters/>
                        <div className="pt-8 md:pt-0 grid grid-cols-4">
                            {
                                layoutOptions.map((option, idx) => (
                                    <button
                                        className="flex items-center justify-center h-10 w-12 border border-th-neutral-300 hover:bg-th-neutral-200">
                                        <Image
                                            src={option.icon}
                                            alt={option.label}
                                            width={24}
                                            height={24}
                                            className="object-center"
                                        />
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {
                            Array.from({length: 12}).fill(0).map((_, idx) => (
                                <ProductCard/>
                            ))
                        }
                    </div>
                    <div className="flex items-center justify-center mt-20">
                        <Button variant="outline" className="rounded-full font-semibold">Load more</Button>
                    </div>
                </div>

            </Container>
        </div>
    )
}
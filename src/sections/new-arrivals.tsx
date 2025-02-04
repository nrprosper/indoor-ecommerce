import Action from "@/components/action";
import ProductCard from "@/components/product-card";

export default function NewArrivals() {
    return(
        <div className="my-12">
            <div className="flex items-center justify-between mb-12">
                <h2 className="font-medium font-poppins text-[2.5rem]">New Arrivals</h2>
                <Action label="more products" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {
                    Array(6).fill(0).map((_, idx) => (
                        <ProductCard key={idx} />
                    ))
                }
            </div>

        </div>
    )
}
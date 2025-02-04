import Image from "next/image";
import Action from "@/components/action";

export default function CategoryGrid() {
    const categories = [
        { name: "Living Room", image: "/images/sofa.png" },
        { name: "Bedroom", image: "/images/sofa.png" },
        { name: "Kitchen", image: "/images/sofa.png" },
    ];

    return (
        <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 h-[664px] w-full">
            {categories.map((category, idx) => (
                <div
                    key={idx}
                    className={`relative w-full h-full 
                        ${idx === 0 ? "sm:col-span-2 md:col-span-1 md:row-span-2" : "col-span-1"}
                    `}
                >
                    <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover"
                    />

                    <div className={`absolute left-12 ${
                        idx === 0 ? 'top-12' : 'bottom-12'
                    }`}>
                        <h3 className="text-th-neutral-700 text-2xl md:text-4xl font-poppins font-medium mb-2 md:mb-3">
                            {category.name}
                        </h3>
                        <Action className="inline-flex"/>
                    </div>
                </div>
            ))}
        </div>
    );
}

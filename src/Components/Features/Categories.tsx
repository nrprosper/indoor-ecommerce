import CategoryCard from "../CategoryCard.tsx";
import {cat1, cat2, cat3} from "../../Constants/bgs.ts";

const Categories = () => {
    return(
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CategoryCard title={"Living Room"} image={cat1 as string} className="h-[23.5625rem] md:h-[41.5rem] items-end" />
            <div className="flex flex-col gap-6">
                <CategoryCard title={"Bedroom"} image={cat2 as string} className="h-[11.25rem] md:h-[19.9375rem]" />
                <CategoryCard title={"Kitchen"} image={cat3 as string} className="h-[11.25rem] md:h-[19.9375rem]" />
            </div>
        </div>
    )
}


export default Categories;
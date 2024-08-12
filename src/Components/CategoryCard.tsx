import Linkcta from "./Linkcta.tsx";

interface CategoryCardProps {
    title: string,
    className?: string,
    image: string,
}

const CategoryCard = ({title, className, image}:CategoryCardProps) => {
    return(
        <div style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
            }}
            className={`${className} px-8 py-8 md:px-12 md:py-12 flex`}>
            <div>
                <h3 className="text-theme-neutral-7 font-medium text-[1.75rem] md:text-4xl mb-0 md:mb-3">{title}</h3>
                <Linkcta className="w-[106px] md:text-[1rem]" to={"/shop"}>Shop now</Linkcta>
            </div>
        </div>
    )
}


export  default CategoryCard;
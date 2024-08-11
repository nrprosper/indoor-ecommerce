import {storeWide} from "../Constants/icons.ts"
import {IoClose as Close} from "react-icons/io5";
import {FaArrowRightLong as ArrowRight} from "react-icons/fa6";
import {Link} from "react-router-dom";

const Banner = () => {
    return (
        <div className="h-10 relative top-0 flex items-center justify-center bg-theme-neutral-2 text-[0.875rem]">
            <div className="flex items-center gap-3">
                <img src={`${storeWide}`} alt="Icon"/>
                <h4 className="text-theme-neutral-5 -[14px] font-semibold">30&#37; off storewide - Limited!</h4>
                <Link to={""} className="shop-action relative flex items-center gap-1 text-theme-blue font-medium py-0.5 hover:gap-2 transition-all">
                    <span>Shop Now</span>
                    <ArrowRight size={18} />
                </Link>
            </div>
            <span className="cursor-pointer absolute right-0 px-4">
                <Close size={20} />
            </span>
        </div>
    )
}


export default Banner;
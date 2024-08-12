import {storeWide} from "../Constants/icons.ts"
import {IoClose as Close} from "react-icons/io5";
import Linkcta from "./Linkcta.tsx";

const Banner = () => {
    return (
        <div className="h-10 relative top-0 flex items-center justify-center bg-theme-neutral-2 text-[0.875rem]">
            <div className="flex items-center gap-3">
                <img src={`${storeWide}`} alt="Icon"/>
                <h4 className="text-theme-neutral-5 -[14px] font-semibold">30&#37; off storewide - Limited!</h4>
                <Linkcta to={"/shop"} variant={"blue"}>
                    Shop now
                </Linkcta>
            </div>
            <span className="cursor-pointer absolute right-0 px-4">
                <Close size={20} />
            </span>
        </div>
    )
}


export default Banner;
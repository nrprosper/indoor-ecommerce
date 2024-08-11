import {ReactNode} from "react";
import {bg} from "../../Constants/bgs.ts";
import {Link} from "react-router-dom";

const AuthLayout = ({children}: {children: ReactNode}) => {
    return(
        <div className="flex flex-col md:flex-row items-center h-[950px]">
            <div
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className="relative w-full h-full basis-1/2">
                <Link className="absolute top-8 left-1/2 -translate-x-1/2 text-2xl font-medium" to={"/"}>3legant</Link>
            </div>
            <div className="mt-4 md:mt-0 px-10 lg:pe-16 lg:ps-16 xl:ps-32 basis-1/2">
                {children}
            </div>
        </div>
    )
}


export default AuthLayout;
import {PropsWithChildren} from "react";

const Container = ({children}:PropsWithChildren) => {
    return(
        <div className="container mx-auto px-4 lg:px-8 xl:px-9">
            {children}
        </div>
    )
}


export default Container
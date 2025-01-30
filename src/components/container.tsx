import {cn} from "@/lib/utils";
import React from "react";

export default function Container({className, children}: {className?: string, children: React.ReactNode}) {
    return(
        <div className={cn(`container mx-auto px-4 lg:px-8 xl:px-9`, className)}>
            {children}
        </div>
    )
}
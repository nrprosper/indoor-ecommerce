import Link from "next/link";
import {cn} from "../lib/utils";
import {MoveRight} from "@/constants/icons";

interface ActionProps {
    to?: string,
    label?: string,
    variant?: 'black' | 'blue',
    className?: string
}

const Action = ({ to, label, variant='black', className }: ActionProps) => {
    return(
        <Link href={""} className={cn(
            `duration-200 transition-all font-medium flex items-center gap-2 text-sm py-[0.5px] border-b-2 hover:gap-3 hover:text-base ${variant === 'blue' ? 'text-th-blue border-b-th-blue' : 'text-th-primary border-b-th-primary'}`, className
        )}>
            <span className="block">Shop now</span>
            <MoveRight />
        </Link>
    )
}


export default Action;
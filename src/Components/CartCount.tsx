import {bag} from "../Constants/icons.ts";

type CartCountProps = {
    onClick?: () => void,
    count: number
}

const CartCount = ({onClick, count}: CartCountProps) => {
    return(
        <div className="flex items-center gap-1 cursor-pointer" onClick={onClick}>
            <img src={`${bag}`} alt="cart bag icon"/>
            <div className="h-5 w-5 flex items-center justify-center rounded-full bg-black">
                <span className="text-white text-xs font-medium">{count}</span>
            </div>
        </div>
    )
}

export default CartCount;
import Image from "next/image";
import Counter from "@/components/ui/counter";
import {Close} from "@/constants/icons";


export default function CartItem() {
    return(
        <div className="flex items-center gap-3 text-sm">
            <Image
                src={`/images/table.png`}
                alt={'Table Image'}
                height={96}
                width={80}
            />
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Tray Table</h3>
                    <p className="font-semibold">$19.19</p>
                </div>
                <div className="mt-2">
                    <div className="flex items-center justify-between text-th-neutral-400">
                        <p className="text-th-neutral-400">Color: Black</p>
                        <button>
                            <Close size={18} />
                        </button>
                    </div>
                    <Counter />
                </div>
            </div>
        </div>
    )
}
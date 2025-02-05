import Image from "next/image";
import Action from "@/components/action";


export default function Advertisement() {
    return(
        <div className="max-h[532px] bg-th-neutral-200 flex flex-col md:flex-row items-center justify-center">
            <div className="flex-1">
                <Image
                    src={"/images/advertisement.png"}
                    height={532}
                    width={720}
                    alt={"Advertisement"}
                    style={{
                        width: "100%",
                        objectFit: "cover"
                    }}
                />
            </div>
            <div className="pe-12 ps-10 md:ps-20 lg:ps-40 mt-12 md:max-w-[60%]">
                <div className="mb-6 flex flex-col gap-4">
                    <h3 className="text-th-blue font-bold">SALE UP TO 35% OFF</h3>
                    <h2 className="font-poppins font-medium text-3xl md:text-4xl">HUNDREDS of
                        <br/> New lower prices!</h2>
                    <p className="text-th-neutral-700">It’s more affordable than ever to give every room in your home a stylish makeover</p>
                </div>
                <Action className="inline-flex"/>
            </div>
        </div>
    )
}
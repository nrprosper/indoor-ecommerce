import Action from "@/components/action";
import Image from "next/image";

export default function Articles() {
    return(
        <div className="my-20">
            <div className="flex items-center justify-between mb-12">
                <h2 className="font-medium font-poppins text-[2.5rem]">Articles</h2>
                <Action label="more articles"/>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    Array(4).fill(0).map((_, idx) => (
                        <div key={idx} className="flex flex-col gap-6 w-full">
                            <div>
                                <Image
                                    src={"/images/article.png"}
                                    height={325}
                                    width={357}
                                    alt={"Article Banner"}
                                    style={{
                                        width: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                            <div className="mb-2">
                                <h4 className="font-poppins text-lg md:text-xl font-medium">7 ways to decor your home</h4>
                                <Action className="inline-flex" label={"Read more"}/>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
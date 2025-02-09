import RatingCount from "@/components/rating-count";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import Image from "next/image";


export default function ProductReviews() {
    return(
        <div className="my-10">
            <div className="mb-6">
                <h1 className="mb-2 font-medium font-poppins text-3xl">Customer Reviews</h1>
                <div className="flex items-center gap-3">
                    <RatingCount count={4}/>
                    <p className="text-xs">11 reviews</p>
                </div>
            </div>

            <div className="flex items-center w-full border-2 border-th-neutral-300 rounded-xl p-2">
                <input
                    type="text"
                    name="review"
                    id="review"
                    placeholder="Share you thoughts ...."
                    className="w-full px-4 py-3 outline-none bg-transparent placeholder:text-th-neutral-400"
                />
                <Button>Post review</Button>
            </div>

            <div className="mt-10 flex items-center justify-between">
                <h4 className="font-medium font-poppins text-2xl">11 reviews</h4>
                <Select>
                    <SelectTrigger className="w-[182px] font-semibold">
                        <SelectValue placeholder="Select the filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="new">Newest</SelectItem>
                        <SelectItem value="olg">Oldest</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-6">
                {
                    Array.from({length: 11}).map((_, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-10 pb-4 border-b border-b-th-neutral-300"
                        >
                            <div className="min-w-[72px] min-h-[72px] overflow-hidden rounded-full">
                                <Image
                                    src={"/images/avatar.png"}
                                    alt={"User Avatar"}
                                    height={72}
                                    width={72}
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <h5 className="font-semibold text-th-neutral-700 text-xl">Sofia Harvetz</h5>
                                <RatingCount count={3.5}/>
                                <p className="text-th-neutral-400">
                                    I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really
                                    enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non
                                    provident.
                                </p>
                            </div>
                        </div>
                    ))
                }

                <div className="flex items-center justify-center mt-6">
                    <Button variant="outline" className="rounded-full font-semibold">Load more</Button>
                </div>
            </div>

        </div>
    )
}
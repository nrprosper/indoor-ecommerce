import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Container from "@/components/container";
import Image from "next/image";
import RatingCount from "@/components/rating-count";
import CountDown from "@/components/ui/count-down";
import Counter from "@/components/ui/counter";
import {Button} from "@/components/ui/button";
import {Heart} from "@/constants/icons";
import ProductReviews from "@/sections/product-reviews";

export default function PageDetails() {
    return(
        <div>
            <Container>
                <div className="mt-8 flex flex-col gap-6 lg:flex-row items-start">
                    <div className="flex-1">
                        <Carousel className="w-full lg:max-w-[548px]">
                            <CarouselContent>
                                {
                                    Array(5).fill(0).map((_, idx) => (
                                        <CarouselItem key={idx}>
                                            <div className="p-1">
                                                <Image
                                                    src={"/images/table.png"}
                                                    alt={"Table details page"}
                                                    width={548}
                                                    height={729}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>
                            <div className="absolute left-0 right-0 top-1/2 bottom-1/2 flex items-center justify-between p-4">
                                <CarouselPrevious className="relative left-0 h-8 w-8 bg-white/70 hover:bg-white/90"/>
                                <CarouselNext className="relative right-0 h-8 w-8 bg-white/70 hover:bg-white/90"/>
                            </div>
                        </Carousel>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <RatingCount count={5}/>
                            <p className="text-xs">11 reviews</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-4xl font-poppins font-medium">Tray Table</h1>
                            <p className="text-th-neutral-400 leading-7">Buy one or buy a few and make every space where you sit more convenient. Light and easy
                                to move around with removable tray top, handy for serving snacks.</p>
                            <div className="flex items-center gap-3 text-lg pb-6 border-b border-b-th-neutral-300">
                                <h5 className="font-semibold">$199.00</h5>
                                <h5 className="text-th-neutral-400 line-through">$400.00</h5>
                            </div>
                        </div>

                        <CountDown
                            startDate="2025-02-01T00:00:00"
                            endDate="2025-10-31T23:59:59"
                        />

                        <div className="mt-6">
                            <h3 className="mb-2 font-semibold text-th-neutral-400">Measurements</h3>
                            <p>17 1/2x20 5/8 "</p>
                        </div>

                        <div className="my-6">
                            <div className="flex items-center gap-6 mb-4">
                                <Counter className="h-10 py-2 mt-0" />
                                <Button
                                    variant="outline"
                                    className="w-full"
                                >
                                    <Heart />
                                    <span>Wish list</span>
                                </Button>
                            </div>
                            <Button className="w-full">Add to cart</Button>
                        </div>

                        <div className="pt-6 border-t border-t-th-neutral-300">
                            <div className="flex items-center mb-2">
                                <h4 className="w-40 text-th-neutral-400 uppercase">SKU</h4>
                                <span className="text-th-neutral-700">1117</span>
                            </div>
                            <div className="flex items-center">
                                <h4 className="w-40 text-th-neutral-400 uppercase">Category</h4>
                                <span className="text-th-neutral-700">Living Room, Bedroom</span>
                            </div>
                        </div>
                    </div>

                </div>

                <ProductReviews />

            </Container>
        </div>
    )
}
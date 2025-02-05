import HomeSwiper from "@/components/swiper";
import Container from "@/components/container";
import CategoryGrid from "@/sections/category-grid";
import NewArrivals from "@/sections/new-arrivals";
import {services} from "@/constants/data";
import Advertisement from "@/sections/advertisement";
import Articles from "@/sections/articles";

export default function Home() {
  return(
      <>
          <Container>
              <HomeSwiper/>
              <div
                  className="pt-8 pb-10 flex flex-col gap-4 xl:gap-0 xl:flex-row items-start xl:items-center justify-between animate-slide-up">
                  <div className="font-poppins">
                      <h2 className="text-th-neutral-700 text-5xl md:text-7xl font-medium">
                          Simply Unique
                          <span className="text-th-neutral-400">/</span>
                      </h2>
                      <h2 className="text-5xl md:text-7xl font-medium">
                          Simply Better
                          <span className="text-th-neutral-400">.</span>
                      </h2>
                  </div>
                  <div
                      className=" w-[19.5625rem] md:w-[28.3125rem]">
                      <p className="text-theme-neutral-4">
                          <span className="text-theme-neutral-5 font-semibold">3legant</span> is a gift & decorations
                          store based in KIGALI, Rwanda. Est since 2019.
                      </p>
                  </div>
              </div>

              <CategoryGrid />

              <NewArrivals />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
                  {
                      services.map((service, idx) => (
                          <div
                              key={idx}
                              className="px-8 py-12 bg-neutral-200"
                          >
                              <service.icon size={36} strokeWidth={1.5} />
                              <div className="mt-3">
                                  <h4 className="mb-2 font-medium font-poppins text-xl text-th-neutral-700">{service.title}</h4>
                                  <p className="text-sm text-th-neutral-400">{service.description}</p>
                              </div>
                          </div>
                      ))
                  }
              </div>
          </Container>

          <Advertisement />

          <Container>
              <Articles />
          </Container>

      </>
  )
}
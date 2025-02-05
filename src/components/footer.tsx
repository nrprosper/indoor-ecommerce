import {Mail} from "@/constants/icons";
import Container from "@/components/container";
import Link from "next/link";
import {links, socials} from "@/constants/data";

export default function Footer() {
    return(
        <div>
            <div
                className="h-80"
                style={{
                    backgroundImage: `url("/images/newsletter.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="h-full flex flex-col items-center justify-center">
                    <h3 className="mb-2 text-4xl text-th-neutral-700 font-medium font-poppins">Join Our Newsletter</h3>
                    <p className="text-th-neutral-700 mb-8">Sign up for deals, new products and promotions</p>
                    <div className="max-w-[488px] md:w-[488px]">
                        <div className="flex items-center w-full py-2 border-b border-b-th-neutral-400">
                            <Mail />
                            <input
                                type="text"
                                placeholder="Email address"
                                name="mail"
                                id="mail"
                                autoComplete="false"
                                className="px-3 w-full bg-transparent placeholder:text-th-neutral-400 text-th-neutral-700 outline-none"
                            />
                            <button className="capitalize font-medium font-poppins">signup</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-th-neutral-700 pt-20 pb-8">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
                        <div className="flex items-center gap-3">
                            <Link className="text-2xl font-medium font-poppins text-white" href="/">3legant.</Link>
                            <span className="text-th-neutral-300">|</span>
                            <p className="text-th-neutral-300">Gift & Decoration Store</p>
                        </div>
                        <nav className="mt-5 lg:mt-0 flex items-center gap-10 text-th-neutral-100">
                            {
                                links.map((link, idx) => (
                                    <Link
                                        href={link.path}
                                        className="font-poppins hover:font-medium transition-all duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                ))
                            }
                        </nav>
                    </div>

                    <div className="pt-4 flex flex-col-reverse md:flex-row border-t border-b-th-neutral-500 items-center justify-between">
                        <div className="flex flex-col items-center md:items-start xl:flex-row xl:items-center gap-7">
                            <p className="text-th-neutral-300">Copyright © 2023 3legant. All rights reserved</p>
                            <div className="text-th-neutral-100 font-medium font-poppins">
                                <Link href={""} className="pe-7">Privacy Policy</Link>
                                <Link href={""}>Terms of Use</Link>
                            </div>
                        </div>

                        <div className="mb-6 md:mb-0 flex items-center gap-6 text-th-neutral-100">
                            {
                                socials.map((social, idx) => (
                                    <Link key={`${social.title}_${idx}`} href={social.path}>
                                        <social.icon />
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </footer>

        </div>
    )
}
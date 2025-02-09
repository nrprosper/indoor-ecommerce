import {Close, TicketPercent} from "@/constants/icons";
import Action from "@/components/action";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import React from "react";

export default function MainLayout({children}:{children: React.ReactNode}) {
    return(
        <>
            <header>
                <div
                    className="px-8 md:px-0 bg-th-neutral-200 h-10 flex justify-center sm:justify-between items-center md:relative md:justify-center">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <TicketPercent/>
                            <h3 className="font-semibold">30% off storewide — Limited time! </h3>
                        </div>
                        <Action variant="blue"/>
                    </div>
                    <button className="hidden sm:inline-flex md:absolute md:right-8">
                        <Close size={20}/>
                    </button>
                </div>
                <Navigation/>
            </header>
            <main className="min-h-screen">
                {children}
            </main>

            <Footer/>
        </>
    )
}
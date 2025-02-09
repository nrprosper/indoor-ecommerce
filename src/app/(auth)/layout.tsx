import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({children}: {children: React.ReactNode}) {
    return(
        <div className="h-screen min-h-screen flex items-center">
            <div className="relative flex-1 w-full h-full">
                <Image
                    src="/images/auth.png"
                    alt="Auth background image"
                    fill
                    className="object-cover object-center"
                />
                <Link className="absolute right-1/2 transform translate-x-1/2 top-3  text-2xl font-medium font-poppins" href="/">3legant.</Link>
            </div>
            <div className="flex-1 p-6 flex items-center justify-center">
                <div className="w-7/12">
                    {children}
                </div>
            </div>
        </div>
    )
}
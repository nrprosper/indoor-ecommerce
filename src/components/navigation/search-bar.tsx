'use client'

import {Search} from "@/constants/icons";
import {useSearchParams} from "next/navigation";
import Form from "next/form";


export default function SearchBar() {

    const searchParams = useSearchParams();

    return(
        <Form
            action="/products"
            className="w-full p-2 flex items-center border border-th-neutral-700 rounded-md"
        >
            <div>
                <Search />
            </div>
            <input
                key={searchParams?.get('q')}
                type="text"
                name="q"
                placeholder="Search for products..."
                autoComplete="off"
                defaultValue={searchParams?.get('q') || ''}
                className="ms-2 w-full text-sm outline-none border-none"
            />
        </Form>
    )
}


export function SearchSkeleton() {
    return(
        <Form
            action="/products"
            className="w-full p-2 flex items-center border border-th-neutral-700 rounded-md"
        >
            <div>
                <Search />
            </div>
            <input
                type="text"
                placeholder="Search for products..."
                className="ms-2 w-full text-sm outline-none border-none"
            />
        </Form>
    )
}
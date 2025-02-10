import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";

export default function Filters() {
    return(
        <div className="w-full flex items-center justify-between md:justify-start gap-6">
            <div>
                <Label htmlFor="category-select"
                       className="uppercase font-semibold text-base text-th-neutral-400">Categories</Label>
                <Select>
                    <SelectTrigger id="category-select" className="md:w-[262px] font-semibold mt-2">
                        <SelectValue placeholder="Select the category to filter"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="new">Newest</SelectItem>
                        <SelectItem value="olg">Oldest</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label htmlFor="price-select"
                       className="uppercase font-semibold text-base text-th-neutral-400">Price</Label>
                <Select>
                    <SelectTrigger id="price-select" className="md:w-[262px] font-semibold mt-2">
                        <SelectValue placeholder="Select the price to filter"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="new">Newest</SelectItem>
                        <SelectItem value="olg">Oldest</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(...inputs))

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
    stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;
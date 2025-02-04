import {Star, StarHalf} from "@/constants/icons";

export default function RatingCount({count} : {count: number}) {

    const clampedCount = Math.min(Math.max(count, 0), 5);

    const fullStars = Math.floor(clampedCount);
    const hasHalfStar = clampedCount % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return(
        <div className="flex items-center gap-1">
            {Array.from({ length: fullStars }, (_, index) => (
                <Star size={16} fill="#141718" key={`full-${index}`} />
            ))}
            {hasHalfStar && <StarHalf size={16} fill="#141718" key="half" />}
            {Array.from({ length: emptyStars }, (_, index) => (
                <Star size={16} key={`empty-${index}`} />
            ))}
        </div>
    )
}
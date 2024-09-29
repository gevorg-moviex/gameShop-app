import  decorativeImg  from "../../assets/Decorative/decorative-1.webp"

export default function Decorative() {
    return (
        <div className="h-[100px] sm:h-[150px] w-full grid justify-center bg-[#8858ED] relative md:h-[280px]">
            <div className="relative bottom-24 sm:bottom-28">
                <img src={decorativeImg} alt="" width={900} />
            </div>
        </div>
    )
};

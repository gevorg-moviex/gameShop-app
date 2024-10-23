import promotionalImg from "/public/Promotional/promotional-1.webp"

export default function Promotional() {
    return (
        <div className="grid justify-center items-center h-[410px]" style={
            {backgroundImage: `url(${promotionalImg})`,
             backgroundSize: "cover"
            }
        }>
            <div className="flex flex-col justify-center items-center gap-6 text-white font-bold -tracking-tight text-center">
                <h1 className="text-7xl">SPEND & SAVE</h1>
                <h2 className="text-xl">Save 20% when you spend more than $125</h2>
                <button className='transition-all duration-500 px-4 py-2 rounded-3xl w-36 text-white bg-[#8858ED] hover:bg-transparent border border-solid border-[#8858ED] hover:bg-white hover:text-[#8858ED] '>Shop Now</button>
            </div>
        </div>
    )
};

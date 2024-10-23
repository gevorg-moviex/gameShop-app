import promotionalImg from "/public/Promotional/promotional-1.webp"

export default function Promotional( {language} ) {
    return (
        <div className="grid justify-center items-center h-[410px]" style={
            {backgroundImage: `url(${promotionalImg})`,
             backgroundSize: "cover"
            }
        }>
            <div className="flex flex-col justify-center items-center gap-6 text-white font-bold -tracking-tight text-center">
                <h1 className="text-7xl">{`${language ? "ԾԱԽՍԵԼ ԵՎ ԽՆԱՅԵԼ" : "SPEND & SAVE"}`}</h1>
                <h2 className="text-xl">{`${language ? "Խնայեք 20%, երբ ծախսում եք ավելի քան 48,503 \u058F" : "Save 20% when you spend more than $125"}`}</h2>
                <button className='transition-all duration-500 px-4 py-2 rounded-3xl w-36 text-white bg-[#8858ED] hover:bg-transparent border border-solid border-[#8858ED] hover:bg-white hover:text-[#8858ED] '>{`${language ? "Գնիր հիմա" : "Shop Now"}`}</button>
            </div>
        </div>
    )
};

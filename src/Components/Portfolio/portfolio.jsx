import { portfolio } from "../../../data"

export default function Portfolio() {
    return (
        <div className="grid justify-center items-center bg-[#232223] px-5 pt-24 gap-16 pb-24">
        <h1 className="text-5xl font-bold text-white text-center product660x:text-left">SHOP BY CATEGORY</h1>
        <div className="flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-7">
            {portfolio.map((item) => (
                <div key={item.id} className=" transition-all duration-500 rounded-3xl cursor-pointer hover:-translate-y-6 group">
                    <img src={item.imageUrl} alt="" className="w-[400px] transition-all duration-300 h-auto object-cover rounded-3xl group-hover:brightness-[130%]"/>
                    <a href="" className="block mt-2 text-center font-bold text-white text-xl">{item.title}</a>
                </div>
            ))}
        </div>
     </div>
    )
};

import { Link, useLocation } from "react-router-dom"
import { portfolio } from "../../../data"

export default function Portfolio() {
    return (
        <div className="grid justify-center items-center bg-[#232223] px-5 pt-24 gap-16 pb-24">
        <h1 className="text-4xl product660x:text-5xl font-bold text-white text-center product660x:text-left">SHOP BY CATEGORY</h1>
        <div className="flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-7">
            {portfolio.map((item) => (
                <Link key={item.id} to={item.srcProduct}>
                    <div className="transition-all duration-500 rounded-3xl cursor-pointer hover:-translate-y-6 group">
                        <img src={item.imageUrl} alt="" className="w-[250px] product660x:w-[300px] product805x:w-[450px] transition-all duration-300 h-auto object-cover rounded-3xl group-hover:brightness-[130%]"/>
                        <span className="block mt-2 text-center font-bold text-white text-xl">{item.title}</span>
                    </div>
                </Link>
            ))}
        </div>
     </div>
    )
};

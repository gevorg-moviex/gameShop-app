import { FaMinus, FaPlus } from "react-icons/fa";
import { descriptionItem, allProducts } from "../../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ItemComponent() {
    const [description, setDescription] = useState(descriptionItem);
    const [openId, setOpenId] = useState(1)

    const itemId = new URLSearchParams(location.search).get("id");
    const gettedItem = allProducts.filter(item => item.id == itemId)

    const handleDescription = (id) => {
        setDescription(prevItem => 
            prevItem.map(item => 
                item.id === id ? {...item, isOpened: !item.isOpened} : item
            )
        )
        setOpenId(prevId => (prevId == id ? null : id))
    }
        
    return (
        <div className="bg-black py-12 flex justify-center items-center text-white">
            <div key={gettedItem[0].id} className="flex justify-center gap-7">
                <div className="flex flex-col gap-14 w-[500px] object-contain">
                    <img src={gettedItem[0].imageUrl} alt="" className="w-full h-[420px]" 
                    style={{
                        objectPosition: "50% 50%",
                        objectFit: "cover"
                        }} />
                    <p>I'm a product description. This is a great place to "sell" your product and grab buyers' attention. Describe your product clearly and concisely. Use unique keywords. Write your own description instead of using manufacturers' copy.</p>
                </div>
                <div className="flex flex-col w-[300px] gap-14">
                    <h1 className="font-bold text-[42px]">{gettedItem[0].title}</h1>
                    <span className="text-xl">{gettedItem[0].price}</span>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">Quantity</span>
                        <span>{gettedItem[0].count}</span> 
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="w-[300px] transition-all duration-300 border-none outline-none bg-[#8858ED] text-white rounded-2xl py-1.5">Add to Cart</button>
                        <Link to="/products/allProducts">
                            <button className="w-[300px] transition-all duration-300 border-none outline-none bg-[white] text-[#8858ED] rounded-2xl py-1.5">Buy Now</button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        {description.map((item) => (
                            <div key={item.id} className="flex flex-col border-b border-gray-300 pb-5 gap-1">
                                <div className="flex justify-between items-center cursor-pointer group" onClick={() => handleDescription(item.id)}>
                                    <span className="group-hover:opacity-[0.8]">{item.title}</span>
                                    <div className="cursor-pointer group-hover:opacity-[0.7] text-sm">{openId == item.id ? <FaMinus /> : <FaPlus />}</div>
                                </div>
                                <p className={`transition-all text-sm duration-700 ease-in-out overflow-hidden ${openId == item.id ? 'max-h-80' : 'max-h-0'}`}>{item.description}</p>
                            </div>
                        ))}
                    </div>                    
                </div>
            </div>
        </div>
        )
    }
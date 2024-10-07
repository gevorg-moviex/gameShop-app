import { FaMinus, FaPlus } from "react-icons/fa";
import { descriptionItem, allProducts } from "../../../data";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import useBookmarkStore from "../../Store/useBookmarkStore";

export default function ItemComponent() {
    const [description, setDescription] = useState(descriptionItem);
    const [openId, setOpenId] = useState(1);
    const {bookmarks, addBookmark, updateBookmarkPlus, updateBookmarkMinus} = useBookmarkStore();

    const itemId = new URLSearchParams(location.search).get("id");
    const gettedItem = allProducts.filter(item => item.id == itemId)

    const bookmarkCurrent = bookmarks.find(b => b.id == itemId);
    const quantity = bookmarkCurrent ? bookmarkCurrent.count : 1    

    const handleDescription = (id) => {
        setDescription(prevItem => 
            prevItem.map(item => 
                item.id === id ? {...item, isOpened: !item.isOpened} : item
            )
        )
        setOpenId(prevId => (prevId == id ? null : id))
    }

    const handleBookmark = useCallback((item) => {
        addBookmark(item)
    }, [addBookmark])
        
    return (
        <div className="bg-black py-12 flex justify-center items-center text-white">
            <div key={gettedItem[0].id} className="flex flex-col px-5 items-center product460x:px-0 product460x:items-start product805x:flex-row justify-center gap-7">
                <div className="flex flex-col w-auto gap-14 product460x:w-[400px] product560x:w-[500px] product805x:w-[400px] product970x:w-[500px] object-contain">
                    <img src={gettedItem[0].imageUrl} alt="" className="w-full h-auto product460x:h-[360px] product560x:h-[420px] product805x:h-[320px] product970x:h-[420px]" 
                    style={{
                        objectPosition: "50% 50%",
                        objectFit: "cover"
                        }} /> 
                    <p>I'm a product description. This is a great place to "sell" your product and grab buyers' attention. Describe your product clearly and concisely. Use unique keywords. Write your own description instead of using manufacturers' copy.</p>
                </div>
                <div className="flex flex-col w-auto product460x:w-[400px] product560x:w-[500px] product805x:w-[300px] gap-14">
                    <h1 className="font-bold text-[42px]">{gettedItem[0].title}</h1>
                    <div className="flex flex-col">
                    <span className="text-xl font-bold">Total</span>
                    <span>{"$" + quantity * parseInt(gettedItem[0].price.slice(1))}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">Quantity</span>
                        <div className="flex gap-2 items-center">
                            <FaMinus className="text-xs cursor-pointer" onClick={() => updateBookmarkMinus(gettedItem[0].id)} />
                            <span>{quantity}</span> 
                            <FaPlus className="text-xs cursor-pointer" onClick={() => updateBookmarkPlus(gettedItem[0].id)} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center product805x:items-start gap-2">
                        <button className="w-full transition-all product805x:w-[300px] duration-300 border-none outline-none bg-[#8858ED] text-white rounded-2xl py-1.5" onClick={() => handleBookmark(gettedItem[0])}>Add to Cart</button>
                        <Link to="/products/allProducts" className="w-full">
                            <button className="w-full product460x:w-[400px] product560x:w-[500px] product805x:w-[300px] transition-all duration-300 border-none outline-none bg-[white] text-[#8858ED] rounded-2xl py-1.5">Buy Now</button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center w-auto product460x:w-[400px] product560x:w-[500px] product805x:items-start product805x:w-auto gap-5">
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
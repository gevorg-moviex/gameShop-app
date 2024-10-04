import { FaMinus, FaPlus } from "react-icons/fa";
import { descriptionItem, allProducts } from "../../../data";
import { Link } from "react-router-dom";

export default function ItemComponent() {
    const itemId = new URLSearchParams(location.search).get("id");
    const gettedItem = allProducts.filter(item => item.id == itemId)

    const handleDescription = (id) => {
        descriptionItem.map(item => 
            item.id == id ? {...item, isOpened: !item.isOpened} : item
        )
    }
        
    return (
        <div className="bg-black py-10 flex justify-center items-center text-white">
            <div key={gettedItem[0].id} className="flex justify-center gap-7">
                <div className="flex flex-col gap-14 w-[500px] object-contain">
                    <img src={gettedItem[0].imageUrl} alt="" className="w-full h-[420px]" 
                    style={{
                        objectPosition: "50% 50%",
                        objectFit: "cover"
                        }} />
                    <p>I'm a product description. This is a great place to "sell" your product and grab buyers' attention. Describe your product clearly and concisely. Use unique keywords. Write your own description instead of using manufacturers' copy.</p>
                </div>
                <div className="flex flex-col w-[300px] gap-11">
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
                        {descriptionItem.map((item) => (
                            <div key={item.id} className="flex flex-col border-b border-gray-300 pb-5">
                                <div className="flex justify-between items-center">
                                    <span>{item.title}</span>
                                    <div className="cursor-pointer text-sm" onClick={() => handleDescription(item.id)}>{item.isOpened ? <FaPlus /> : <FaMinus />}</div>
                                </div>
                                <p className={`${item.isOpened ? "hidden" : "block"} text-sm tracking-wide`}>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.</p>
                            </div>
                            
                        ))}
                        {console.log(descriptionItem)}
                    </div>
                    
                </div>
            </div>
        </div>
        )
    }
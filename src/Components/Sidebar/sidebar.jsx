import { useState } from "react"
import { FaX } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom"

export default function Sidebar( {opened, setOpened} ) {
    const [value, setValue] = useState(0);

    let location = useLocation()

    return (
        <div className={`flex rounded-xl flex-col mt-5 gap-9 p-5 w-56 bg-black text-white ${opened ? 'block z-[1000] mt-0 border-gray-300 border fixed' : 'hidden'} product560x:flex`}>
            <div className="flex items-center gap-5">
                <h1 className="text-3xl">Browse by</h1>
                {opened && <FaX className="text-lg cursor-pointer relative -top-3 left-4" onClick={() => setOpened(false)} />}
            </div>
            <hr className="border-gray-600 w-[85%]"/>
            <div>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Link to="/products/allProducts" className={`${location.pathname == "/products/allProducts" ? "border-b border-white font-bold hover:border-none hover:text-gray-500" : "border-none"}`}>All Products</Link>
                    </li>
                    <li>
                        <Link to="/products/accesories" className={`${location.pathname == "/products/accesories" ? "border-b border-white font-bold hover:border-none hover:text-gray-500" : "border-none"}`}>Accesories</Link>
                    </li>
                    <li>
                        <Link to="/products/bestSellers" className={`${location.pathname == "/products/bestSellers" ? "border-b border-white font-bold hover:border-none hover:text-gray-500" : "border-none"}`}>Best Sellers</Link>
                    </li>
                    <li>
                        <Link to="/products/consoles" className={`${location.pathname == "/products/consoles" ? "border-b border-white font-bold hover:border-none hover:text-gray-500" : "border-none"}`}>Consoles</Link>
                    </li>
                    <li>
                        <Link to="/products/controllers" className={`${location.pathname == "/products/controllers" ? "border-b border-white font-bold hover:border-none hover:text-gray-500" : "border-none"}`}>Controllers</Link>
                    </li>
                </ul>
            </div>
            <hr className="border-gray-600 w-[85px]"/>
            <h1 className="text-2xl">Filter by</h1>
            <div className="flex flex-col gap-3">
                <span>Price</span>
                <input type="range" min={0} max={1000} className="h-2" onChange={(e) => setValue(e.target.value)}/>
                <span>{`${value} $`}</span>
            </div>
        </div>
    )
};

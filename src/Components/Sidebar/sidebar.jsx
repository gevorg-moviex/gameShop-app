export default function Sidebar() {
    return (
        <div className="flex flex-col gap-3 p-5 w-56 bg-black text-white">
            <h1 className="text-2xl">Browse by</h1>
            <hr className="border-gray-600 w-3/4"/>
            <div>
                <ul className="flex flex-col gap-1">
                    <li><a href="">All Products</a></li>
                    <li><a href="">Accesories</a></li>
                    <li><a href="">Best Sellers</a></li>
                    <li><a href="">Consoles</a></li>
                    <li><a href="">Controllers</a></li>
                </ul>
            </div>
            {/* <hr className="border-gray-600 w-3/4"/>
            <h1 className="text-2xl">Filter by</h1>
            <div>
                <span>Price</span>
                <input type="range" />
            </div> */}
        </div>
    )
};

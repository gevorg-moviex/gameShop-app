import { Link } from "react-router-dom";
import { useState } from "react";
import BookmarkFunction from "../../Functions/Bookmark_Function/bookmark_function";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative flex justify-center items-center">
            <li className={`flex md:hidden`}>
                <BookmarkFunction />
            </li>
            <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleMenu}>
                <div className="md:hidden">
                    <div className={`w-6 h-1 bg-white mb-1 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <div className={`w-6 h-1 bg-white mb-1 transition-all ${isOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-6 h-1 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
            </div>
            <ul className={`flex-col items-center justify-center gap-8 fixed w-full top-[104px] left-0 border-white border z-50 bg-black p-4 transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:static md:border-none md:bg-transparent`}>
                <li>
                    <Link to="/products/allProducts" className="block p-2 transition-all duration-300 hover:text-[#887CED]">Products</Link>
                </li>
                <li>
                    <Link to="/onSale" className="block p-2 transition-all duration-300 hover:text-[#887CED]">On Sale</Link>
                </li>
                <li>
                    <Link to="/contact" className="block p-2 transition-all duration-300 hover:text-[#887CED]">Contact Us</Link>
                </li>
                <li>
                    <Link to="/login" className="block p-1 px-3 border border-solid border-[#8858ED] rounded-3xl transition-all font-bold duration-300 text-[#887CED] hover:text-white hover:border-white">Log in</Link>
                </li>
                <li className={`${isOpen ? "hidden" : "block"}`}>
                    <BookmarkFunction />
                </li>
            </ul>
        </nav>
    );
}

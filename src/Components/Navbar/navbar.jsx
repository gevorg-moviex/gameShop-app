import { Link } from "react-router-dom"
import useModal from "../../Functions/useModal/useModal"
import BookmarkFunction from "../../Functions/Bookmark_Function/bookmark_function"

export default function Navbar() {

    const {isModalOpen, setModalOpen} = useModal()
    
    return (
        <nav>
            <ul className="flex items-center justify-center gap-8">
                <li>
                    <Link to="/products" className="transition-all duration-300 hover:text-[#887CED]">Products</Link>
                </li>
                <li>
                    <Link to="/onSale" className="transition-all duration-300 hover:text-[#887CED]">On Sale</Link>
                </li>
                <li>
                    <Link to="/contact" className="transition-all duration-300 hover:text-[#887CED]">Contact Us</Link>
                </li>
                <li>
                    <Link to="/login" className="transition-all duration-300 hover:text-[#887CED]">Log in</Link>
                </li>
                <li>
                    <BookmarkFunction />
                </li>
            </ul>
        </nav>
    )
};

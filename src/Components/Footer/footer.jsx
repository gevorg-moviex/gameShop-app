import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import logo from "/public/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-black flex flex-col justify-center items-center">
            <div className="text-white w-full flex py-24 items-center flex-col md:flex-row md:justify-evenly">
                <div className="flex flex-col gap-5 justify-center items-center mb-8 md:mb-0">
                    <img src={logo} alt="Arcade Logo" width="90" height="90" className="rounded-full"/>
                    <span className="text-xl font-bold tracking-wider">ARCADE</span>
                </div>
                <hr className="border-gray-700 w-60 py-4 md:hidden"/>
                <div className="flex flex-col gap-6">
                    <span className="font-bold text-center md:text-left">Products</span>
                    <ul className="flex flex-col justify-center gap-4 items-center md:items-start">
                        <li>
                            <Link to="/products/consoles" className="hover:text-gray-400">Consoles</Link>
                        </li>
                        <li>
                            <Link to="/products/controllers" className="hover:text-gray-400">Controllers</Link>
                        </li>
                        <li>
                            <Link to="/products/accesories" className="hover:text-gray-400">Accessories</Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700 w-60 mt-4 pb-4 md:hidden"/>
                <div className="flex flex-col gap-6">
                    <span className="font-bold text-center md:text-left">Store</span>
                    <ul className="flex flex-col justify-center items-center gap-4 md:items-start">
                        <li>500 Terry Francine Street <br/> San Francisco, CA 94158</li>
                        <li>Mon - Fri: 9am - 9pm</li>
                        <li>
                            <a href="mailto:info@mysite.com" className="hover:text-gray-400">info@mysite.com</a>
                        </li>
                        <li>123-456-7890</li>
                    </ul>
                </div>
                <hr className="border-gray-700 w-60 mt-4 pb-4 md:hidden"/>
                <div className="flex flex-col gap-6">
                    <span className="font-bold text-center md:text-left">Policy</span>
                    <ul className="flex flex-col justify-center items-center gap-4 md:items-start">
                        <li>
                            <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Shipping Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Refund Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Cookie Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-gray-700 w-4/5" />
            <div className="flex flex-col justify-center items-center gap-3 text-white mt-4 pb-5">
                <span className="font-bold">Join the Community</span>
                <div className="flex gap-7 text-xl">
                    <FaFacebookF className="cursor-pointer hover:text-gray-400"/>
                    <FaInstagram className="cursor-pointer hover:text-gray-400"/>
                    <FaYoutube className="cursor-pointer hover:text-gray-400"/>
                    <FaTiktok className="cursor-pointer hover:text-gray-400"/>
                </div>
            </div>
            <div className="w-full h-10 bg-white flex justify-center items-center text-[12px]">
                <div className="text-center">
                    <p>&copy; 2035 by ARCADE. Powered and secured by Gevorg</p>
                </div>
            </div>
        </footer>
    );
}

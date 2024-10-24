import { Link } from "react-router-dom";
import { useState } from "react";
import CountryFlag from "react-country-flag";
import BookmarkFunction from "../../Functions/Bookmark_Function/bookmark_function";
import ReactFlagsSelect from "react-flags-select";

export default function Navbar({ language, setLanguage }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (countryCode) => {
        setLanguage(countryCode === "AM");
    };

    return (
        <nav className="relative flex justify-center items-center">
            <li className={`flex md:hidden`}>
                <BookmarkFunction language={language} />
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
                    <Link to="/products/allProducts" className="block p-2 transition-all duration-300 hover:text-[#887CED]">{language ? "Ապրանքներ" : "Products"}</Link>
                </li>
                <li>
                    <Link to="/onSale" className="block p-2 transition-all duration-300 hover:text-[#887CED]">{language ? "Զեղչեր" : "On Sale"}</Link>
                </li>
                <li>
                    <Link to="/contact" className="block p-2 transition-all duration-300 hover:text-[#887CED]">{language ? "Կապ" : "Contact Us"}</Link>
                </li>
                <li>
                    <Link to="/login" className="block p-1 px-3 border border-solid border-[#8858ED] rounded-3xl transition-all font-bold duration-300 text-[#887CED] hover:text-white hover:border-white">{language ? "Մուտք" : "Log In"}</Link>
                </li>
                <li>
                    <ReactFlagsSelect 
                        onSelect={handleLanguageChange}
                        countries={["AM", "US"]}
                        placeholder={language ? <CountryFlag countryCode="AM" svg style={{width: "20px", height: "20px"}} /> :  <CountryFlag countryCode="US" svg style={{width: "20px", height: "20px"}} />  }
                        customLabels={{
                            AM: <CountryFlag countryCode="AM" svg style={{width: "20px", height: "20px"}} />,
                            US: <CountryFlag countryCode="US" svg style={{width: "20px", height: "20px"}} />
                        }}
                    />
                </li>
                <li className={`${isOpen ? "hidden" : "block"}`}>
                    <BookmarkFunction />
                </li>
            </ul>
        </nav>
    );
}

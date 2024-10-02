import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import Sidebar from "../Components/Sidebar/sidebar";
import { useState } from "react";

export default function LayoutProducts( {children} ) {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleSidebar = () => {
        setIsOpen(prev => !prev);
    };
    return (
        <>
            <Header />
                <div className="flex px-5 product660x:px-16 product805x:px-32 bg-black">
                    <Sidebar toggle={toggleSidebar} opened={isOpen} />
                    <div className="flex-1 p-4">
                        <div>
                            <button 
                                className="product560x:hidden p-2 text-white bg-red-500" 
                                onClick={toggleSidebar}
                            >
                                {isOpen ? "✖" : "☰"}
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
};

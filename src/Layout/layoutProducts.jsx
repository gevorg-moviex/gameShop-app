import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import Sidebar from "../Components/Sidebar/sidebar";

export default function LayoutProducts( {children} ) {
    return (
        <>
            <Header />
                <div className="flex px-5 product660x:px-16 product805x:px-32 bg-black">
                    <Sidebar />
                    <div className="flex-1 p-4">{children}</div>
                </div>
            <Footer />
        </>
    )
};

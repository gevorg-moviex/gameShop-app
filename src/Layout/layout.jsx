import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";

export default function Layout( {children, themeColor} ) {
    return (
        <>
            <Header background={themeColor} />
                {children}
            <Footer />
        </>
    )
};
